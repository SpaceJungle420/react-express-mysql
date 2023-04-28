import React from "react";
import { useState } from "react";
import axios from "axios";

function Delete() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const onIdChange = (event: any) => {
    setProduct({ ...product, id: event.target.value });
  };

  const deleteProduct = () => {
    axios
      .delete("http://localhost:8080/api/products/" + product.id)
      .then((res) => {
        // console.log("get a single product: ");
        console.log(res.data);
      });
  };

  return (
    <div>
      Delete product ID: <input onChange={onIdChange} />
      <button onClick={deleteProduct}>Delete Product</button>
    </div>
  );
}

export default Delete;
