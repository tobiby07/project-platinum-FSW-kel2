import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./addToCart";

const CardProduct = ({ product }) => {
    return (
      <div className="col-6 g-1 col-md-4 col-lg-3 g-sm-4">
        <div className="card h-100">
          <Link to={`/products/${product.id}`}>
            <img
              src={`${process.env.REACT_APP_API_HOST}/images/${product.productImage}`}
              alt={product.productName}
              className="card-img-top"
              style={{ maxWidth: "100%", height: "auto" }} // Menambahkan properti CSS untuk mengecilkan gambar
            />
          </Link>
          <div className="card-body">
            <h6 className="card-title fw-semibold">{product.productName}</h6>
            <p className="card-text text-secondary">{product.ProductCategory.categoryName}</p>
            <p className="card-text">Rp. {product.price.toLocaleString()}</p>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap flex-sm-nowrap">
              <Link to={`/products/${product.id}`} className="btn btn-dark my-1 my-sm-0 mx-1">
                Detail
              </Link>
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardProduct;
  