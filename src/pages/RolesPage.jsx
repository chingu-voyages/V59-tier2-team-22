import { Link } from "react-router";

function RolesPage() {
  return (
    <>
      <h2>Roles Page</h2>
      <Link to="/questions/:role">Questions</Link>
      <p>
        <Link to="/">Home</Link>
      </p>
    </>
  );
}

export default RolesPage;
