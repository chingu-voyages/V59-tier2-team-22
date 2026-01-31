import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h2>Welcome to Interview Prep 101</h2>
      <Link to="/roles">Roles</Link>
    </>
  );
}

export default HomePage;
