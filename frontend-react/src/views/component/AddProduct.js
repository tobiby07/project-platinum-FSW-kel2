import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    categoryId: '',
    productName: '',
    productDescription: '',
    price: '',
    stock: '',
    productImage: null
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to retrieve categories');
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      productImage: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post("http://localhost:3001/products", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setFormData({
        categoryId: '',
        productName: '',
        productDescription: '',
        price: '',
        stock: '',
        productImage: null
      });
    } catch (error) {
      console.error(error);
      setError('Failed to create a new product');
    }
  };

  return (
    <>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryId">Category:</label>
          <select
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.categoryName}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type='text'
            id='productName'
            name='productName'
            value={formData.productName}
            onChange={handleChange}
            placeholder='Product Name'
            required
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id='productDescription'
            name='productDescription'
            value={formData.productDescription}
            onChange={handleChange}
            placeholder='Product Description'
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type='text'
            id='price'
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='Price'
            required
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type='text'
            id='stock'
            name='stock'
            value={formData.stock}
            onChange={handleChange}
            placeholder='Stock'
            required
          />
        </div>
        <div>
          <label htmlFor="productImage">Product Image:</label>
          <input
            type='file'
            id='productImage'
            name='productImage'
            onChange={handleImageChange}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default ProductForm;
