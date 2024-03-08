import React, { useState, useEffect } from "react";
import axiosObject from "../../../../services/axiosUrl";
import logo from "../../../image/logo.png";
import CardProduct from "./component/cardProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosObject.get("/api/products");
        const randomProducts = getRandomProducts(response.data, 20);
        setProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const getRandomProducts = (products, n) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  return (
    <div className="container mb-5">
      <h4 className="fw-semibold text-center">WELCOME TO</h4>
      <h4 className="fw-semibold text-center">
        <img src={logo} alt="" />
      </h4>
      <div className="row">
        {products.map((product) => (
          <CardProduct key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
