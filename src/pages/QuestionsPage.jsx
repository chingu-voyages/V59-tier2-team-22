import { useParams, Link } from "react-router";
import QUESTIONS_DATA from "../data/questions";
import QuestionCard from "../components/cards/QuestionCard";

function QuestionsPage() {
  // Flatten the data to get all roles in a single array
  const flattenedRoles = QUESTIONS_DATA.flat();

  // Get role from URL
  const { role } = useParams();

  // Find questions for this role
  const roleData = flattenedRoles.find((r) => r.role === role);
  const questions = roleData?.flashcards || [];

  // Handle role not found
  if (!roleData) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Role Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The role "{role}" doesn't exist in our database.
        </p>
        <Link
          to="/roles"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
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
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Back to Roles
        </Link>
      </div>
    );
  }

  // For now, just show the FIRST question
  const currentQuestion = questions[0];

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Back Button */}
      <Link
        to="/roles"
        className="text-blue-600 hover:text-blue-700 font-medium mb-4 inline-block"
      >
        Back to Roles
      </Link>

      {/* Role Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {role}
      </h1>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        questionNumber={1}
        totalQuestions={questions.length}
      />
    </div>
  );
}

export default QuestionsPage;
