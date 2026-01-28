import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router";
import QUESTIONS_DATA from "../data/questions";
import QuestionCard from "../components/cards/QuestionCard";

function QuestionsPage() {
  // Flatten the data to get all roles in a single array
  const flattenedRoles = QUESTIONS_DATA.flat();

  // Get role from URL
  const { role } = useParams();

  // Initialize state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // auto scroll when question changes
  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentIndex]);

  // Create ref for question container
  const questionRef = useRef(null);

  // Find questions for this role
  const roleData = flattenedRoles.find((r) => r.role === role);
  const questions = roleData?.flashcards || [];

  // Handle role not found
  if (!roleData) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Questions Coming soon!
        </h1>
        <p className="text-gray-600 mb-6">
          We don't have Questions for "{role}" yet. Try one of these roles:
        </p>
        <ul className="mb-6 space-y-2">
          {QUESTIONS_DATA.map((r) => (
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
  if (questions.length === 0) {
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

  const currentQuestion = questions[currentIndex];
  const selectedAnswers = answers[currentQuestion.id];
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswerSelect = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Return Links */}
      <Link
        to="/roles"
        className="text-gray-600 hover:text-gray-700 font-medium mb-4 inline-block"
      >
        Back to Roles
      </Link>

      {/* Role Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {role}
      </h1>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>
            {Math.round(((currentIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Add ref to question container */}
      <div ref={questionRef}>
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswers={selectedAnswers}
          onAnwerSelect={handleAnswerSelect}
        />
      </div>
      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={isFirstQuestion}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          disabled={isLastQuestion || !selectedAnswers}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition"
        >
          {isLastQuestion ? "Finish" : "Next →"}
        </button>
      </div>

      {/* Validation message */}
      {!selectedAnswers && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Please select an answer to proceed
        </p>
      )}
    </div>
  );
}

export default QuestionsPage;
