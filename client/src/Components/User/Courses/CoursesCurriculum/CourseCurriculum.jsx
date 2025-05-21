import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { Lock } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDataOfCourseApi } from "../CoursesApi";

function QuizModal({ quiz, onClose }) {
  const [userAnswers, setUserAnswers] = useState({});
  // 2) State to store final score once the user submits
  const [score, setScore] = useState(null);

  // Handle user answer selection
  const handleOptionChange = (questionIndex, chosenAnswer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: chosenAnswer,
    }));
  };

  // Handle quiz submission
  const handleSubmit = () => {
    let correctCount = 0;
    quiz.forEach((questionItem, index) => {
      if (userAnswers[index] === questionItem.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-xl mx-auto rounded shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Quiz</h2>

        {quiz && quiz.length > 0 ? (
          <div className="space-y-4">
            {quiz.map((q, idx) => (
              <div key={idx} className="border p-3 rounded">
                <p className="font-semibold">
                  Q{idx + 1}: {q.question}
                </p>
                <div className="mt-2 space-y-1">
                  {q.answer.map((option, optIdx) => (
                    <div key={optIdx} className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${idx}`}
                        id={`q-${idx}-a-${optIdx}`}
                        value={option}
                        className="mr-2"
                        onChange={() => handleOptionChange(idx, option)}
                        checked={userAnswers[idx] === option}
                      />
                      <label htmlFor={`q-${idx}-a-${optIdx}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No quiz data available.</p>
        )}

        {/* Show Score AFTER user has submitted */}
        {score !== null && (
          <p className="mt-4 font-semibold text-green-600">
            Your Score: {score} / {quiz.length}
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CourseCurriculum({bought}) {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getDataOfCourseApi(id),
  });

 
  const [expandedLecture, setExpandedLecture] = useState(null);
  const [openQuizIndex, setOpenQuizIndex] = useState(null);

  if (isLoading) {
    return <div>Data Loading...</div>;
  }

  if (error) {
    return <div>Some error loading data</div>;
  }
  const lectures = data?.data?.lessons || [];
  const toggleLecture = (index) => {
    setExpandedLecture(expandedLecture === index ? null : index);
  };

  const handleOpenQuiz = (index) => {
    setOpenQuizIndex(index);
  };

  const handleCloseQuiz = () => {
    setOpenQuizIndex(null);
  };

  return (
    <div className="py-2">
      <div className="max-w-4xl p-4">
        {/* <h1 className="text-2xl font-bold mb-6">Course Curriculum</h1> */}

        {lectures.map((lecture, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden mb-4"
          >
            {/* Accordion Header */}
            {
              bought === true ?  <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleLecture(index)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{lecture.title}</h3>
                  <p className="text-sm flex items-center mt-1">
                    <PlayCircleIcon className="w-4 h-4 mr-1" />
                    45 minutes
                  </p>
                </div>
              </div>
              {expandedLecture === index ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </div>  : <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold">{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{lecture.title}</h3>
                  <p className="text-sm flex items-center mt-1">
                    <PlayCircleIcon className="w-4 h-4 mr-1" />
                    45 minutes
                  </p>
                </div>
              </div>
                <Lock className="w-6 h-6 text-gray-600" />
            </div>
            }
           

            {/* Accordion Body */}
            {expandedLecture === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="mb-4">{lecture.description}</p>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src={`http://localhost:8000/public${lecture.videoUrl}`}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Take Quiz Button */}
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleOpenQuiz(index)}
                >
                  Take Quiz
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Quiz Modal (opens if openQuizIndex is set) */}
        {openQuizIndex !== null && (
          <QuizModal
            quiz={lectures[openQuizIndex].quiz}
            onClose={handleCloseQuiz}
          />
        )}
      </div>
    </div>
  );
}
