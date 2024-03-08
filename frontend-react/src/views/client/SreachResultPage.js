import React, { useState, useEffect } from "react";
import Navbar from "./layouts/Header/component/Navbar";
import Footer from "./layouts/footer/Footer";
import axiosObject from "../../services/axiosUrl";
import Search from "./layouts/main/SreachPage";

const SearchPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosObject.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <Search products={products} />
      <Footer />
    </div>
  );
};

export default SearchPage;
