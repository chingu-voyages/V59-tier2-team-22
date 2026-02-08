import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-xl font-bold text-gray-900 hover:text-yellow-400"
      >
        Interview Prep 101
      </Link>

      {/* Desktop Navigation (visible on md and up) */}
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-yellow-400 transition">
          Home
        </Link>
        {isAuthenticated && (
          <Link
            to="/roles"
            className="text-gray-600 hover:text-yellow-400 transition"
          >
            Roles
          </Link>
        )}
        <Link
          to="/blog"
          className="text-gray-600 hover:text-yellow-400 transition"
        >
          Blog
        </Link>
        <Link
          to="/faqs"
          className="text-gray-600 hover:text-yellow-400 transition"
        >
          FAQs
        </Link>

        {/* Auth Section - Desktop */}
        {isAuthenticated && (
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-300">
            <span className="text-sm text-gray-600">{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Hamburger Menu Button (visible on md and below) */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1 focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Dropdown (visible when toggled on mobile) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden shadow-lg z-50">
          <nav className="flex flex-col gap-2 p-4">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-400 hover:bg-gray-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {isAuthenticated && (
              <Link
                to="/roles"
                className="block px-3 py-2 text-gray-600 hover:text-yellow-400 hover:bg-gray-50 rounded transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Roles
              </Link>
            )}
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-400 hover:bg-gray-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/faqs"
              className="block px-3 py-2 text-gray-600 hover:text-yellow-400 hover:bg-gray-50 rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>

            {/* Auth Section - Mobile */}
            {isAuthenticated && (
              <>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-3 py-2 text-sm text-gray-600">
                  {user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-yellow-400 hover:bg-gray-50 rounded transition"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
