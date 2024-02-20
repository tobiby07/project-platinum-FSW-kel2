import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products')
        setProduct(response.data)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchProduct()
  }, [])
  return (
    <div>
      <h2>product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name product</th>
            <th>Category Product</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.ProductCategory ? `${product.ProductCategory.categoryName}` : 'Uncategorized'}</td>
              <td>{product.productImage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList;

