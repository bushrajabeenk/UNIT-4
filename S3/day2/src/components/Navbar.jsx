import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === 1) {
      navigate("/products/1");
    } else if (id === 2) {
      navigate("/products/2");
    } else if (id === 3) {
      navigate("/products/3");
    }
  };

  return (
    <div>
      <h2>Navbar</h2>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/products">Products</a> */}
      {/* less number of internal network requests
       with Link for ex, if we click on home, products, etc links one after another,
       everytime network request will not be made, instead only once the request will be made, 
       i.e only when you refresh the page */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <button onClick={() => handleClick(1)}>Go To Product 1</button>
      <button onClick={() => handleClick(2)}>Go To Product 2</button>
      <button onClick={() => handleClick(3)}>Go To Product 3</button>
    </div>
  );
};

export default Navbar;
