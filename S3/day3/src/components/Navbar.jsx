import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      Navbar:
      <Link to="">Home</Link>
      <Link to="/feed">Feed</Link>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Navbar;
