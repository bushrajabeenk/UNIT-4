import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:1234/products/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }
  }, [id]);

  return (
    <div>
      ProductID: {id}
      <div>{product.name}</div>
    </div>
  );
};

export default Product;
