import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Product = () => {
  const { isAuthorised } = useContext(AuthContext);

  return (
    <div>
      Product : {isAuthorised ? "LoggedOut" : "LoggenIn"}
      <Cart />
    </div>
  );
};

export default Product;
