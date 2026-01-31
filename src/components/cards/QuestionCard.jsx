function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
}) {
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
        {Object.entries(question.options).map(([letter, text]) => {
          const isSelected = selectedAnswer === letter;

          return (
            <div
              key={letter}
              onClick={() => onAnswerSelect(letter)}
              className={`flex items-start p-4 rounded-lg border transition-all duration-300 cursor-pointer hover:scale-[1.01] ${
                isSelected
                  ? "border-emerald-400 ring-opacity-50"
                  : "border-gray-200 hover:border-emerald-400"
              }`}
            >
              <span
                className={`font-semibold mr-3 ${isSelected ? "text-emerald-700" : "text-gray-700"}`}
              >
                {letter}.
              </span>
              <span
                className={
                  isSelected ? "text-emerald-900 font-medium" : "text-gray-800"
                }
              >
                {text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
