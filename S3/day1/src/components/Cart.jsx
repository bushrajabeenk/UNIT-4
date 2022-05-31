import React, { useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const Cart = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      Cart
      <button></button>
    </div>
  );
};

export default Cart;
