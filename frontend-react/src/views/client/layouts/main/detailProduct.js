import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mb-4">
      <h2 className="my-4 fw-semibold">Detail Product</h2>
      <div className="row g-0">
        <div className="col-md-5 p-3 d-flex justify-content-center align-items-center">
          <img
            className="img-responsive"
            width="100%"
            src={`http://localhost:3001/images/${product.productImage}`}
            alt={product.productName}
          />
        </div>
        <div className="col-md-7 d-flex flex-column">
          <h2 className="p-2 fw-semibold">{product.productName}</h2>
          <h5 className="p-2">Rp. {product.price.toLocaleString()}</h5>
          <p className="p-2">{product.productDescription}</p>
          <div className="add-to-cart-btn-stock m-2">
            <button className="btn btn-dark rounded-0 py-2 px-3">
              <FiShoppingCart size={24} />
              <span className="px-3">Add to cart</span>
            </button>
            <span className="p-2 mx-2">Stock: {product.stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
