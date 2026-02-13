import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useInterview } from "../context/InterviewContext";

function SummaryPage() {
  const navigate = useNavigate();
  const { session, resetInterview, isAnswerCorrect } = useInterview();
  const isLeavingIntentionally = useRef(false);

  // Redirect if no completed session
  useEffect(() => {
    if (!session || !session.isComplete) {
      if (!isLeavingIntentionally.current) {
        navigate("/roles");
      }
    }
  }, [session, navigate]);

  if (!session || !session.isComplete) {
    return null; // Will redirect
  }

  const { role, questions, answers, score } = session;

  // Calculate time taken
  const startTime = new Date(session.startTime);
  const endTime = new Date(session.endTime);
  const timeTaken = Math.round((endTime - startTime) / 1000 / 60); // minutes

  const handleTryAgain = () => {
    isLeavingIntentionally.current = true;
    resetInterview();
    navigate(`/questions/${encodeURIComponent(role)}`);
  };

  const handleNewRole = () => {
    isLeavingIntentionally.current = true;
    resetInterview();
    navigate("/roles");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Interview Complete!
        </h1>
        <p className="text-xl text-gray-600">{role}</p>
      </div>

      {/* Score Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-emerald-600 mb-2">
            {score.percentage}%
          </div>
          <p className="text-gray-600 text-lg">
            You scored {score.correct} out of {score.total} questions correctly
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-600">
              {score.correct}
            </div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-red-600">
              {score.incorrect}
            </div>
            <div className="text-sm text-gray-600">Incorrect</div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-600">
              {timeTaken}
            </div>
            <div className="text-sm text-gray-600">Minutes</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleTryAgain}
            className="px-6 py-3 bg-emerald-400 text-white rounded-lg font-medium hover:bg-emerald-700 transition cursor-pointer"
          >
            Try {role} Again
          </button>

          <button
            onClick={handleNewRole}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer"
          >
            Practice Another Role
          </button>
        </div>
      </div>

      {/* Question Review */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Question Review
        </h2>

        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id];
            const correct = isAnswerCorrect(question.id);

            return (
              <div
                key={question.id}
                className={`border-2 rounded-lg p-6 ${
                  correct
                    ? "border-green-300 bg-green-50"
                    : "border-red-300 bg-red-50"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Question {index + 1}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          correct
                            ? "bg-green-200 text-green-700"
                            : "bg-yellow-200 text-yellow-600"
                        }`}
                      >
                        {correct ? "✓ Correct" : "✗ Incorrect"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {question.question}
                    </h3>
                  </div>
                </div>

                {/* Answer Options */}
                <div className="space-y-2 mb-4">
                  {Object.entries(question.options).map(([letter, text]) => {
                    const isUserAnswer = userAnswer === letter;
                    const isCorrectAnswer = question.answer === letter;

                    return (
                      <div
                        key={letter}
                        className={`p-3 rounded-lg border-2 ${
                          isCorrectAnswer
                            ? "border-green-200 bg-green-100"
                            : isUserAnswer
                              ? "border-red-200 bg-red-100"
                              : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-gray-700">
                            {letter}.
                          </span>
                          <span className="flex-1 text-gray-800">{text}</span>
                          {isCorrectAnswer && (
                            <span className="text-green-600 font-semibold">
                              ✓ Correct Answer
                            </span>
                          )}
                          {isUserAnswer && !isCorrectAnswer && (
                            <span className="text-red-600 font-semibold">
                              Your Answer
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Rationale */}
                <div className="bg-white border-l-4 border-gray-500 p-4 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Explanation:
                  </p>
                  <p className="text-sm text-gray-600">{question.rationale}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-8 text-center">
        <Link
          to="/roles"
          className="text-gray-600 hover:text-gray-700 font-medium"
        >
          Back to Roles
        </Link>
      </div>
    </div>
  );
}

export default SummaryPage;
