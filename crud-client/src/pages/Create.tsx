import React from "react";
import { useState } from "react";
import axios from "axios";

function Create() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const onIdChange = (event: any) => {
    setProduct({ ...product, id: event.target.value });
  };

  const onNameChange = (event: any) => {
    setProduct({ ...product, name: event.target.value });
  };

  const onDescriptionChange = (event: any) => {
    setProduct({ ...product, description: event.target.value });
  };

  const onPriceChange = (event: any) => {
    setProduct({ ...product, price: event.target.value });
  };

  function createProduct() {
    axios
      .post("http://localhost:8080/api/products/", {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  const checkProduct = () => {
    console.log(product);
  };

  return (
    <div>
      Enter Product ID: <input onChange={onIdChange} />
      <br />
      Enter Product Name: <input onChange={onNameChange} />
      <br />
      Enter Product Description: <input onChange={onDescriptionChange} />
      <br />
      Enter Product Price: <input onChange={onPriceChange} />
      <br />
      <button onClick={createProduct}>Create Product</button>
      <button onClick={checkProduct}>Check current product</button>
    </div>
  );
}

export default Create;
