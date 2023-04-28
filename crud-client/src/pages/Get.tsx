import React from "react";
import { useState } from "react";
import axios from "axios";

function Get() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const onIdChange = (event: any) => {
    setProduct({ ...product, id: event.target.value });
  };

  function getProduct() {
    axios
      .get("http://localhost:8080/api/products/" + product.id)
      .then((res) => {
        setProduct({
          id: res.data[0].id,
          name: res.data[0].name,
          description: res.data[0].description,
          price: res.data[0].price,
        });
        // console.log("get a single product: ");
        // console.log(res.data);
      });
  };

  const checkProduct = () => {
    console.log(product);
  };

  return (
    <div>
      Enter product ID: <input onChange={onIdChange} />
      <br />
      <button onClick={getProduct}>Get Product</button>
      <button onClick={checkProduct}>Check current product</button>
      <br />
      ID: {product.id}
      <br />
      Name: {product.name}
      <br />
      Description: {product.description}
      <br />
      Price: {product.price}
    </div>
  );
}

export default Get;
