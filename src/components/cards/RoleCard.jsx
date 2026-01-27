import { Link } from "react-router";

const RoleCard = ({ role }) => {
  return (
    <Link to={`/questions/${encodeURIComponent(role.role)}`}>
      {" "}
      {/* Make it clickable */}
      <div className="role-card">
        <h3 className="role-card-title">{role.role}</h3>
      </div>
    </Link>
  );
};

export default RoleCard;
