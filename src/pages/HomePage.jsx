import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <Link to="/roles">Roles</Link>
    </>
  );
}

export default HomePage;
