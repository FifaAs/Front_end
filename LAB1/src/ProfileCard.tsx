const ProfileCard = () => {
  const containerStyle = {
    width: "300px",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    textAlign: "center" as const,
    fontFamily: "Arial",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const name = "Bexultan Koshantayev";
  const bio = "Love music, game. Love Dark Souls.";

  return (
    <div style={containerStyle}>
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        style={imageStyle}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button style={buttonStyle}>Follow</button>
    </div>
  );
};

export default ProfileCard;