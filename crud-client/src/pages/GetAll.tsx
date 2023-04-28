import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetAll() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);

  return (
    <>
      <p>All Products will show in console</p>
    </>
  );
}

export default GetAll;
