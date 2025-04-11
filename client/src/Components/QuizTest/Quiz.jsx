"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { AddQuizApi, getDataOfQuizApi } from "./QuizApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserStore } from "../../Store/UserStore";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { user } = useUserStore();
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [isEliminated, setIsEliminated] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(30);

  const [tabViolations, setTabViolations] = useState(0); // 👁️‍🗨️ tab switch count
  const [warningMessage, setWarningMessage] = useState(""); // 🟡 for showing warnings

  const totalQuestions = 30;

  const { data, isLoading, error } = useQuery({
    queryKey: ["quiz"],
    queryFn: getDataOfQuizApi,
  });

  const sendQuizMutation = useMutation({
    mutationFn: AddQuizApi,
    onSuccess: () => {
      console.log("quiz data added successfully");
    },
    onError: () => {
      console.log("error in adding the quiz data");
    },
  });

  // Set start time once when quiz begins
  useEffect(() => {
    if (!startTime) {
      setStartTime(new Date().toISOString());
    }
  }, []);

  // ⛔ Disable right-click, copy, paste
  useEffect(() => {
    const blockContextMenu = (e) => e.preventDefault();
    const blockCopyPaste = (e) => e.preventDefault();

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("copy", blockCopyPaste);
    document.addEventListener("paste", blockCopyPaste);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("copy", blockCopyPaste);
      document.removeEventListener("paste", blockCopyPaste);
    };
  }, []);

  // 👁️‍🗨️ Detect tab switch / window blur
  useEffect(() => {
    const handleBlur = () => {
      setTabViolations((prev) => {
        const updated = prev + 1;
        if (updated >= 3) {
          setIsEliminated(true);
        } else {
          setWarningMessage(`Warning: Do not switch tabs! (${updated}/3)`);
          setTimeout(() => setWarningMessage(""), 3000);
        }
        return updated;
      });
    };

    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  // Automatically submit quiz when completed or eliminated
  useEffect(() => {
    if (isEliminated || isCompleted) {
      const end = new Date().toISOString();
      setEndTime(end);

      const quizResult = {
        studentId: user._id,
        jobId: id,
        correctAnswers: score,
        wrongAnswers: wrongAttempts,
        isDisqualified: isEliminated,
        startTime: startTime,
        endTime: end,
      };

      sendQuizMutation.mutate(quizResult);
    }
  }, [isEliminated, isCompleted]);

  // Timer logic
  useEffect(() => {
    if (isCompleted || isEliminated || selectedAnswer !== null) return;

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          handleAnswerSelect(null); // Timeout counts as wrong answer
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestion, isCompleted, isEliminated, selectedAnswer]);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h2>Error fetching quiz data</h2>;
  if (!data || !data[currentQuestion]) return <h1>Invalid quiz data</h1>;

  const quizData = data;
  const questionData = quizData[currentQuestion];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);

    if (index === questionData.correctAnswerIndex) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
      setWrongAttempts((prev) => {
        const updated = prev + 1;
        if (updated >= 3) {
          setTimeout(() => setIsEliminated(true), 1000);
        }
        return updated;
      });
    }

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setTimer(30);
      } else {
        setIsCompleted(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setWrongAttempts(0);
    setScore(0);
    setIsEliminated(false);
    setIsCompleted(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setStartTime(new Date().toISOString());
    setEndTime(null);
    setTimer(30);
  };

  if (isEliminated) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
        <div className="w-full max-w-md p-6 bg-red-50 border border-red-200 rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center space-y-4">
            <AlertCircle className="h-16 w-16 text-red-500" />
            <h2 className="text-2xl font-bold text-red-700">
              You've been eliminated!
            </h2>
            <p className="text-red-600">You made 3 wrong attempts or violated tab rules.</p>
            <p className="text-gray-700">
              Your final score: {score} / {currentQuestion}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
        <div className="w-full max-w-md p-6 bg-green-50 border border-green-200 rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold text-green-700">
              Quiz Completed!
            </h2>
            <p className="text-green-600">
              Congratulations on finishing the quiz!
            </p>
            <p className="text-gray-700">
              Your final score: {score} / {totalQuestions}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-gray-500">Score: {score}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{
                  width: `${(currentQuestion / totalQuestions) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-6">{questionData.questionText}</h2>

          <div className="space-y-3">
            {questionData.options.map((option, index) => {
              let buttonClasses =
                "w-full text-left p-4 rounded-md border transition-all duration-300 ";

              if (selectedAnswer === index) {
                buttonClasses += isCorrect
                  ? "bg-green-50 border-green-500 border-2 text-green-700 "
                  : "bg-red-50 border-red-500 border-2 text-red-700 ";
              } else if (selectedAnswer !== null) {
                buttonClasses += "opacity-70 border-gray-200 ";
              } else {
                buttonClasses += "hover:bg-gray-50 border-gray-200 ";
              }

              return (
                <button
                  key={index}
                  className={buttonClasses}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm font-medium text-red-500">
              Wrong Attempts: {wrongAttempts} / 3
            </div>
            <div className="text-sm font-medium text-gray-500">
              Time Left: {timer}s
            </div>
          </div>

          {warningMessage && (
            <div className="mt-4 text-sm font-semibold text-yellow-600 text-center">
              {warningMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
