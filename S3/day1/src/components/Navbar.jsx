// import React, { createContext } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Wishlist from "./Wishlist";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isAuthorised, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorised) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorised ? "Login" : "Logout"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      {!isAuthorised && <Wishlist />}
      {/* the above line tells only if the user is logged inthe wishlist will get displayed */}
    </div>
  );
};

export default Navbar;
