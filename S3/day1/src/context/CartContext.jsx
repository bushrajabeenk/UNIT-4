import React, { useContext, createContext } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuthorised } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };

  const buy = () => {
    //check if user is logged in
    // if yes, then allow him to buy and pay
    if (isAuthorised) {
      console.log("can buy");
    } else {
      console.log("cannot buy without logginh in");
    }
  };

  return (
    <CartContext.Provider value={{ count, addToCart, buy }}>
      {children}
    </CartContext.Provider>
  );
};
