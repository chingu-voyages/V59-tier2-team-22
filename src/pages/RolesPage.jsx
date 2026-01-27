import { Link } from "react-router";
import RoleCard from "../components/cards/RoleCard";
import roles from "../data/jobRoles.js";

const rolesData = roles;

function RolesPage() {
  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <section className="roles-page-container">
        <div className="min-w-[20rem] md:w-160 text-center mb-8 ">
          <h2>Find Your Job Role</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            doloremque animi. Natus, quisquam autem doloribus nostrum aliquid
            facere distinctio odio at, nulla delectus accusantium culpa hic a
            laudantium velit!
          </p>
        </div>
        <div className="search">
          {/* search  */}
          <input
            type="text"
            placeholder="Search roles..."
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        {/* roles cards */}
        <div className="mt-12 w-full border border-gray-300 rounded-3xl p-6 ">
          <ul className="role-cards-flex">
            {rolesData.map((role) => (
              <Link to={`/questions/${role.title}`} key={role.title}>
                <RoleCard key={roles.title} role={role} />
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default RolesPage;
