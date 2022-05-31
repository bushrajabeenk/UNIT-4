import React, { createContext } from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContex";

const Navbar = () => {
  const { isAuthorised, login, logout } = useContext(AuthContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorised) logout(); 
          else login();
        }}
      >
        {isAuthorised ? "Login" : "Logout"}
      </button>
      <button>Buy</button>
      <button>{`Make ${isLight : `Dark`}`}</button>
    </div>
  );
};

export default Navbar;
