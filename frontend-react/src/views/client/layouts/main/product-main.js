import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        const randomProducts = getRandomProducts(response.data, 20);
        setProducts(randomProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const getRandomProducts = (products, n) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  return (
    
<div className="row row-cols-5">
  {products.map(product => (
    <div key={product.id} className="col mb-4">
      <div className="card h-100">
        <Link to={`/products/${product.id}`}>
          <img src={`http://localhost:3001/images/${product.productImage}`} className="card-img-top" alt={product.productName} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">Category: {product.ProductCategory.categoryName}</p>
          <p className="card-text">Brand: {product.Brand.name}</p>
          <p className="card-text">Price: Rp.{product.price.toLocaleString()}</p>
          <p className="card-text">Stock: {product.stock}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/products/${product.id}`} className="btn btn-primary">Detail</Link>
            <button className="btn btn-outline-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  
  );
};

export default ProductList;
