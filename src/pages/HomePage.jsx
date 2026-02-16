import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useInterview } from "../context/InterviewContext";
import AuthModal from "../components/auth/AuthModal";
import { getRandomChallenge } from "../data/challenges";

function HomePage() {
  const { isAuthenticated, user, signup, login, isLoading } = useAuth();
  const { getRecentSessions } = useInterview();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [dailyChallenge] = useState(getRandomChallenge());

  // Get last 3 sessions
  const recentSessions = getRecentSessions(3);

  const handleAuth = (email, password, isLogin) => {
    return isLogin ? login(email, password) : signup(email, password);
  };

  // Helper function to format time ago
  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const sessionTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - sessionTime) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  };

  // Helper function to get score color
  const getScoreColor = (percentage) => {
    if (percentage >= 80) return "bg-green-100 text-green-700";
    if (percentage >= 60) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* --- HERO SECTION --- */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          {isAuthenticated && user
            ? `Ready for your next round, ${user.email.split("@")[0]}?`
            : "Master Your Interview Skills"}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {isAuthenticated
            ? "Your practice history is saved. Pick a role and start a new session."
            : "Prepare for your dream job with our comprehensive interview practice platform."}
        </p>

        {isAuthenticated ? (
          <Link
            to="/roles"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start New Practice Session
          </Link>
        ) : (
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Free
          </button>
        )}
      </div>

      {/* --- CONDITIONAL CONTENT --- */}
      {isAuthenticated ? (
        /* Dashboard View for Logged In Users */
        <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-500">
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentSessions.length > 0 ? (
                <>
                  {recentSessions.map((session, index) => (
                    <div
                      key={`${session.id}-${index}`} // Combining ID and Index guarantees uniqueness
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">
                          {session.role}
                        </p>
                        <p className="text-sm text-gray-500">
                          Last practiced: {getTimeAgo(session.endTime)}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${getScoreColor(session.score.percentage)}`}
                      >
                        {session.score.percentage}% Score
                      </span>
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-center text-gray-400 py-4 text-sm italic">
                  Complete your first session to see history
                </p>
              )}
            </div>
          </div>

          {/* Daily Challenge Widget */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                Daily Challenge
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  dailyChallenge.difficulty === "easy"
                    ? "bg-green-100 text-green-700"
                    : dailyChallenge.difficulty === "medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {dailyChallenge.difficulty}
              </span>
            </div>

            <div className="mb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">
                {dailyChallenge.type} • {dailyChallenge.category}
              </span>
            </div>
            <p className="text-gray-900 font-medium text-sm mb-4">
              "{dailyChallenge.challenge}"
            </p>
            <p className="text-gray-600 text-xs mb-4 italic">
              Estimated time: {dailyChallenge.timeEstimate}
            </p>
            <Link
              to="/challenges"
              className="block w-full py-3 bg-white border-2 border-yellow-400 text-yellow-700 rounded-lg font-bold hover:bg-yellow-400 hover:text-white transition text-center"
            >
              View All Challenges
            </Link>
          </div>
        </div>
      ) : (
        /* Marketing View: Feature Grid (Only for Logged Out) */
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Multiple Roles"
            desc="Practice for various job positions across different industries."
            icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
          <FeatureCard
            title="Timed Practice"
            desc="Simulate real interview conditions with live metrics."
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <FeatureCard
            title="Instant Feedback"
            desc="Get detailed AI explanations for every answer."
            icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </div>
      )}

      {/* The Modal Trigger */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSubmit={handleAuth}
        isLoading={isLoading}
      />
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition border border-gray-50">
      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
        <svg
          className="w-6 h-6 text-yellow-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d={icon} />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default HomePage;
