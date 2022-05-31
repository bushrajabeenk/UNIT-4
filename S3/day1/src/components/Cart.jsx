import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Cart;
