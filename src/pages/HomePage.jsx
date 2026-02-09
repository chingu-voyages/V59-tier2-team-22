import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import AuthModal from "../components/auth/AuthModal";

function HomePage() {
  const { isAuthenticated, user, signup, login, isLoading } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuth = (email, password, isLogin) => {
    if (isLogin) {
      return login(email, password);
    } else {
      return signup(email, password);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            {isAuthenticated
              ? `Ready for your next round, ${user?.email.split("@")[0]}?`
              : "Master Your Interview Skills"}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {isAuthenticated
              ? "Pick up where you left off or explore new interview roles below."
              : "Prepare for your dream job with our comprehensive interview practice platform."}
          </p>

          {isAuthenticated ? (
            <Link
              to="/roles"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              Browse All Roles
            </Link>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started Free
            </button>
          )}
        </div>

        {/* --- CONDITIONAL CONTENT --- */}

        {isAuthenticated ? (
          /* Logged In View: User Dashboard / Quick Stats */
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Your Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">
                    Frontend Developer Interview
                  </span>
                  <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                    Completed
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl opacity-60">
                  <span className="text-gray-600">
                    No other recent sessions
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Daily Tip
              </h3>
              <p className="text-gray-700 mb-4">
                "When answering behavioral questions, use the **STAR** method:
                Situation, Task, Action, and Result."
              </p>
              <Link
                to="/tips"
                className="text-yellow-700 font-medium hover:underline"
              >
                View more tips →
              </Link>
            </div>
          </div>
        ) : (
          /* Logged Out View: Marketing Feature Grid */
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Multiple Roles"
              desc="Practice for various job positions across different industries and skill levels."
              icon={
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              }
            />
            <FeatureCard
              title="Timed Practice"
              desc="Simulate real interview conditions with time tracking and performance metrics."
              icon={<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
            />
            <FeatureCard
              title="Instant Feedback"
              desc="Get detailed explanations and insights for every question you answer."
              icon={
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              }
            />
          </div>
        )}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSubmit={handleAuth}
        isLoading={isLoading}
      />
    </>
  );
}

/* Reusable Feature Component to keep the code clean */
function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border border-gray-50">
      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
        <svg
          className="w-6 h-6 text-yellow-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default HomePage;
