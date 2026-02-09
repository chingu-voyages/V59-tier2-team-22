import { Link } from "react-router";
import RoleCard from "../components/cards/RoleCard";
import QUESTIONS_DATA from "../data/questions.js";

const rolesData = QUESTIONS_DATA.flat();

function RolesPage() {
  return (
    <>
      <section className="roles-page-container roles-page-container">
        <div className="text-center mb-8 ">
          <h2>Find Your Job Role</h2>
          <p className="mt-4">
            Browse and select from a variety of job roles to view tailored
            interview questions and practice for your next opportunity. Use the
            search to quickly find roles that match your interests or career
            goals.
          </p>
        </div>

        {/* roles cards */}
        <div className="mt-12 w-full border border-gray-300 rounded-3xl p-6 ">
          <ul className="role-cards-flex">
            {rolesData.map((role) => (
              <RoleCard key={role.role} role={role} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default RolesPage;
