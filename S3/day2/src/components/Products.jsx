import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await axios.get(`http://localhost:4444/products`);
      let data = await r.data;
      //console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      Products:{""}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          {products.map((prod) => {
            return (
              <div key={prod.id}>
                <Link to={`/products/${prod.id}`}> {prod.name}</Link>
              </div>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
