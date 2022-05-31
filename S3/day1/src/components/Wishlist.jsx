import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Wishlist = () => {
  const { value } = useContext(CartContext);
  return <div>Wishlist: {value}</div>;
};

export default Wishlist;
