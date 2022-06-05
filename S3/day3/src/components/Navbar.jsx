import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isAuth) {
      // wants to logout
      // navigate him to home screen
      logout();
      navigate("/");
    } else {
      //wants to login
      navigate("/login");
    }
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
      <Link to="/posts">Posts</Link>
      <Link to="/feed">Feed</Link>
      <button onClick={handleLoginClick}>
        {" "}
        {/* Spacer */} {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
