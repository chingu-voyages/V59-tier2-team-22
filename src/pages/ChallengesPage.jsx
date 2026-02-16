import { useState } from "react";
import { Target, Clock, TrendingUp } from "lucide-react";
import DAILY_CHALLENGES, {
  getChallengesByDifficulty,
  getAllCategories,
} from "../data/challenges";

function ChallengesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  // Get unique categories
  const categories = getAllCategories();

  // Filter challenges based on selected filters
  const getFilteredChallenges = () => {
    let filtered = DAILY_CHALLENGES;

    if (selectedType !== "all") {
      filtered = filtered.filter((c) => c.type === selectedType);
    }

    if (selectedDifficulty !== "all") {
      filtered = filtered.filter((c) => c.difficulty === selectedDifficulty);
    }

    if (selectedFilter !== "all") {
      filtered = filtered.filter((c) => c.category === selectedFilter);
    }

    return filtered;
  };

  const filteredChallenges = getFilteredChallenges();

  // Get statistics
  const stats = {
    total: DAILY_CHALLENGES.length,
    behavioral: DAILY_CHALLENGES.filter((c) => c.type === "behavioral").length,
    technical: DAILY_CHALLENGES.filter((c) => c.type === "technical").length,
    easy: getChallengesByDifficulty("easy").length,
    medium: getChallengesByDifficulty("medium").length,
    hard: getChallengesByDifficulty("hard").length,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Daily Challenges & Tips
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sharpen your interview skills with our curated challenges. Each
          challenge comes with expert tips to help you craft winning answers.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <Target className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Challenges</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900">
            {stats.behavioral}
          </div>
          <div className="text-sm text-gray-600">Behavioral</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-900">
            {stats.technical}
          </div>
          <div className="text-sm text-gray-600">Technical</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Filter Challenges</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="behavioral">Behavioral</option>
              <option value="technical">Technical</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.sort().map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedType !== "all" ||
          selectedDifficulty !== "all" ||
          selectedFilter !== "all") && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedType !== "all" && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                {selectedType}
              </span>
            )}
            {selectedDifficulty !== "all" && (
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                {selectedDifficulty}
              </span>
            )}
            {selectedFilter !== "all" && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                {selectedFilter}
              </span>
            )}
            <button
              onClick={() => {
                setSelectedType("all");
                setSelectedDifficulty("all");
                setSelectedFilter("all");
              }}
              className="text-xs text-gray-500 hover:text-gray-700 underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredChallenges.length} of {stats.total} challenges
        </p>
      </div>

      {/* Challenges Grid */}
      <div className="space-y-6">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>

      {/* No Results */}
      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            No challenges found matching your filters.
          </p>
          <button
            onClick={() => {
              setSelectedType("all");
              setSelectedDifficulty("all");
              setSelectedFilter("all");
            }}
            className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

function ChallengeCard({ challenge }) {
  const [showTip, setShowTip] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-700 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "hard":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeColor = (type) => {
    return type === "behavioral"
      ? "bg-blue-100 text-blue-700"
      : "bg-purple-100 text-purple-700";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(challenge.type)}`}
            >
              {challenge.type}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(challenge.difficulty)}`}
            >
              {challenge.difficulty}
            </span>
            <span className="text-xs text-gray-500">
              • {challenge.category}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-xs">{challenge.timeEstimate}</span>
        </div>
      </div>

      {/* Challenge Question */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {challenge.challenge}
      </h3>

      {/* Tip Toggle */}
      <button
        onClick={() => setShowTip(!showTip)}
        className="text-sm font-medium text-yellow-600 hover:text-yellow-700 transition cursor-pointer"
      >
        {showTip ? "Hide Tip" : "Show Tip"} →
      </button>

      {/* Tip Content */}
      {showTip && (
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Expert Tip:
          </p>
          <p className="text-sm text-gray-600">{challenge.tip}</p>
        </div>
      )}
    </div>
  );
}

export default ChallengesPage;
