import { useState } from "react";
import { useParams, Link } from "react-router";
import QUESTIONS_DATA from "../data/questions";
import QuestionCard from "../components/cards/QuestionCard";
import {
  flattenQuestionsData,
  getQuestionsForRole,
  roleExists,
  calculateProgress,
  isFirstQuestion,
  isLastQuestion,
  getAnsweredCount,
} from "../utils/questionHelper";

function QuestionsPage() {
  // Flatten the data to get all roles in a single array
  const flattenedRoles = flattenQuestionsData(QUESTIONS_DATA);

  // Get role from URL
  const { role } = useParams();

  // Initialize state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Find questions for this role
  const roleFound = roleExists(flattenedRoles, role);
  const allQuestions = getQuestionsForRole(flattenedRoles, role);

  // Handle role not found
  if (!roleFound) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Questions Coming soon!
        </h1>
        <p className="text-gray-600 mb-6">
          We don't have Questions for "{role}" yet. Try one of these roles:
        </p>
        <ul className="mb-6 space-y-2">
          {flattenedRoles.map((r) => (
            <li key={r.role}>
              <Link
                to={`/questions/${encodeURIComponent(r.role)}`}
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                {r.role}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/roles"
          className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emarald-700 transition-colors duration-300"
        >
          Back to Roles
        </Link>
      </div>
    );
  }

  // Handle no questions
  if (allQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          No Questions Available
        </h1>
        <p className="text-gray-600 mb-6">
          Questions for "{role}" are coming soon!
        </p>
        <Link
          to="/roles"
          className="inline-block hover:text-gray-700 text-white px-6 py-3 rounded-lg "
        >
          Back to Roles
        </Link>
      </div>
    );
  }

  const currentQuestion = allQuestions[currentIndex];
  const selectedAnswer = answers[currentQuestion.id];
  const isFirst = isFirstQuestion(currentIndex);
  const isLast = isLastQuestion(currentIndex, allQuestions.length);

  const handleAnswerSelect = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));

    setIsTransitioning(true);
    setTimeout(() => {
      if (!isLast) {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        const totalAnswered = getAnsweredCount(answers) + 1;
        alert(`Quiz complete! You answered ${totalAnswered} questions.`);
        setIsTransitioning(false);
      }
    }, 400);
  };

  const handlePrevious = () => {
    if (!isFirst) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const progressPercent = calculateProgress(currentIndex, allQuestions.length);

  return (
    <div className="max-w-4xl mx-auto ">
      {/* Return Links */}
      <Link
        to="/roles"
        className="text-gray-600 hover:text-gray-700 font-medium  inline-block"
      >
        Back to Roles
      </Link>

      {/* Role Title */}
      <h1 className="text-2xl  font-bold text-gray-900 mb-2">{role}</h1>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>Progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${progressPercent}%`,
            }}
          ></div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={allQuestions.length}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={isFirst}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition cursor-pointer"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={isLast || !selectedAnswer}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition cursor-pointer"
        >
          {isLast ? "Finish" : "Next "}
        </button>
      </div>

      {/* Instruction message */}
      <p className="text-center text-sm text-gray-500 mt-6">
        {isLast
          ? "Select your final answer to complete"
          : "Select an answer to continue"}
      </p>
    </div>
  );
}

export default QuestionsPage;
