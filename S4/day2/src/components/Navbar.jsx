import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        padding: "30px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        fontSize: "30px",
      }}
    >
      <Link to="/">Counter</Link>
      <Link to="/todo">Todo</Link>
    </div>
  );
};

export default Navbar;
