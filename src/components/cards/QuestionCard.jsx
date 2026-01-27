function QuestionCard({ question, questionNumber, totalQuestions }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
      {/* Question Header */}
      <div className="mb-6">
        <span className="text-sm text-gray-500 font-medium">
          Question {questionNumber} of {totalQuestions}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {Object.entries(question.options).map(([letter, text]) => (
          <div
            key={letter}
            className="flex items-start p-4 rounded-lg border border-emarald-200 hover:border-emerald-600 hover:scale-101 transition-transform duration-300"
          >
            <span className="font-semibold text-gray-700 mr-3">{letter}.</span>
            <span className="text-gray-800">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
