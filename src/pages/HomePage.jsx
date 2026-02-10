import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import AuthModal from "../components/auth/AuthModal";

function HomePage() {
  const { isAuthenticated, user, signup, login, isLoading } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuth = (email, password, isLogin) => {
    return isLogin ? login(email, password) : signup(email, password);
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
        /* NEW: Dashboard View for Logged In Users */
        <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-500">
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <p className="font-semibold text-gray-800">
                    Frontend Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    Last practiced: 2 hours ago
                  </p>
                </div>
                <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  85% Score
                </span>
              </div>
              <p className="text-center text-gray-400 py-4 text-sm italic">
                Complete more sessions to see history
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Daily Challenge
            </h3>
            <p className="text-gray-700 text-sm mb-6">
              "How do you handle conflict with a coworker?"
              <br />
              <br />
              Practice this behavioral question today to keep your streak alive!
            </p>
            <button className="w-full py-3 bg-white border-2 border-yellow-400 text-yellow-700 rounded-lg font-bold hover:bg-yellow-400 hover:text-white transition">
              Attempt Now
            </button>
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
