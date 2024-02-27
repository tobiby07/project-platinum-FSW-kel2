import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.productDescription}</p>
      <p>Price: Rp.{product.price.toLocaleString()}</p>
      <p>Stock: {product.stock}</p>
      <img src={`http://localhost:3001/images/${product.productImage}`} alt={product.productName} />
    </div>
  );
};

export default ProductDetail;
