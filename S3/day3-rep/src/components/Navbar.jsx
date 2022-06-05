import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContextProvider";

const Navbar = () => {
  const navigate = useNavigate();

  const { logout, isAuth } = useContext(AuthContext);

  //   const handleClick = () => {
  //     if (isAuth) {
  //       // if login credentials are true and the user is authorised, then take the user to Home page
  //       // if the user clicks log out, take him to the home page of the website
  //       logout();
  //       navigate("");
  //     } else {
  //       // if login credentials are false and the user is not authorised, then take the user to Login page
  //       navigate("login");
  //     }
  //   };

  const handleClick = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("login");
    }
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "50px",
        fontSize: "25px",
      }}
    >
      Navbar
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/careers">Careers</Link>
      <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
