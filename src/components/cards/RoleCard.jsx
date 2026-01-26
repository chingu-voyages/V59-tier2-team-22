const RoleCard = ({ role }) => {
  return (
    <>
      <div className="role-card">
        <h3 className="role-card-title">{role.title}</h3>
      </div>
    </>
  );
};

export default RoleCard;
