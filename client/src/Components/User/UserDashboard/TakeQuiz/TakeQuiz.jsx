import { Link, useParams } from "react-router-dom";
import { useUserStore } from "../../../../Store/UserStore";
import { useState } from "react";

function TakeQuiz() {
  const { user } = useUserStore();
  const { id } = useParams();

  const [checkedDeclaration, setCheckedDeclaration] = useState(false);
  const [checkedTerms, setCheckedTerms] = useState(false);

  const isButtonDisabled = !(checkedDeclaration && checkedTerms);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Panel */}
      <div className="w-2/5 p-12 bg-white">
        <div className="max-w-md">
          <div className="flex items-center mb-12">
            <h1 className="text-2xl font-bold text-gray-700">TalentLink</h1>
            <div className="w-5 h-5 ml-1 bg-green-500"></div>
          </div>

          <p className="text-gray-600 text-lg mb-4">Hey , {user.fullname}</p>

          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome to TalentLink Job Test
          </h2>

          <div className="flex mt-16 text-gray-600">
            <div className="mr-12">
              <p>Test duration</p>
              <p className="font-medium text-gray-800 text-xl">15 mins</p>
            </div>
            <div>
              <p>No. of questions</p>
              <p className="font-medium text-gray-800 text-xl">30 questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-3/5 p-12 bg-gray-50">
        <div className="max-w-xl text-start">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Instructions</h2>

          <ol className="list-decimal space-y-6 pl-6 text-gray-700">
            <li>
              This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started.
            </li>
            <li>Please ensure you have a stable internet connection.</li>
            <li>You will be eliminated if you make 3 wrong attempts during the quiz.</li>
            <li>If you do not answer a question within 30 seconds, it will be counted as a wrong attempt.</li>
            <li>
              We recommend you to try the{" "}
              <a href="#" className="text-blue-600 hover:underline">sample test</a>{" "}
              for a couple of minutes, before taking the main test.
            </li>
          </ol>

          {/* Confirmation Form */}
          <div className="mt-12 bg-gray-50 p-6 rounded-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Confirmation Form</h2>
            <p className="text-gray-700 mb-6">
              Before we start, here is some extra information we need to assess you better.
            </p>

            <div className="mb-6">
              <p className="text-gray-700">Logged in as</p>
              <p className="font-medium text-gray-800">{user.email}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-start mb-4">
                <span className="text-gray-800 font-medium">
                  Declaration Statement <span className="text-red-500">*</span>
                </span>
              </div>
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="declaration"
                  className="mt-1 mr-3 h-5 w-5 border-gray-300 rounded"
                  checked={checkedDeclaration}
                  onChange={(e) => setCheckedDeclaration(e.target.checked)}
                />
                <label htmlFor="declaration" className="text-gray-700">
                  I agree not to copy code from any source, including colleagues, and will refrain from accessing websites or AI tools for assistance. I further agree not to copy or share any content or questions from this assessment with any other medium or forum.
                </label>
              </div>
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-3 h-5 w-5 border-gray-300 rounded"
                  checked={checkedTerms}
                  onChange={(e) => setCheckedTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="text-gray-700">
                  I agree to TalentLink's{" "}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">Privacy policy</a>.
                </label>
              </div>
            </div>

            <Link to={`/Quiz/${id}`}>
              <button
                className={`px-6 py-3 font-medium rounded transition-colors ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
                disabled={isButtonDisabled}
              >
                Agree & Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeQuiz;
