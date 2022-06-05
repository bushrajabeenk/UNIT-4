import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  // useParamsto extract the url parameters

  console.log(id);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        let res = await axios.get(`http://localhost:4444/products/${id}`);
        let data = await res.data;
        //console.log(data);
        setProduct(data);
      };
      getData();
      // fetch(`http://localhost:1234/products/${id}`)
      //   .then((r) => r.json())
      //   .then((d) => setProduct(d));
    }
  }, [id]);

  return (
    <div>
      ProductID: {id}
      <div>{product.name}</div>
      <div>{product.place}</div>
    </div>
  );
};

export default Product;
