import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        const randomProducts = getRandomProducts(response.data, 8);
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
      {/* row-cols-4 */}
      <h4 className="fw-semibold text-center">RANDOM PICK</h4>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-6 g-1 col-md-4 col-lg-3 g-sm-4">
            <div className="card h-100">
              <Link to={`/products/${product.id}`}>
                <img
                  src={`http://localhost:3001/images/${product.productImage}`}
                  className="card-img-top"
                  alt={product.productName}
                />
              </Link>
              <div className="card-body">
                <h6 className="card-title fw-semibold">
                  {product.productName}
                </h6>
                <p className="card-text text-secondary">
                  {product.ProductCategory.categoryName}
                </p>
                <p className="card-text fw-semibold">{product.Brand.name}</p>
                <p className="card-text">
                  Rp. {product.price.toLocaleString()}
                </p>
                {/* <p className="card-text">Stock: {product.stock}</p> */}
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-dark"
                  >
                    Detail
                  </Link>
                  <button className="btn btn-outline-danger">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
