import { Link } from "react-router";

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-xl font-bold text-gray-900 hover:text-emerald-600"
      >
        Interview Prep 101
      </Link>
      <nav className="flex gap-6">
        <Link to="/" className="text-gray-600 hover:text-emerald-600">
          Home
        </Link>
        <Link to="/roles" className="text-gray-600 hover:text-emerald-600">
          Roles
        </Link>
      </nav>
    </div>
  );
};

export default Header;
