import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputForm from '../assets/input-form';
import SelectForm from '../assets/select-form';

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [categoryId, setCategoryId] = useState("");
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

  const createProduct = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3001/api/products", {
        productName,
        productDescription,
        price,
        stock,
        productImage,
        categoryId
    })
    console.log(response.data); 
     setProductName('')
     setProductDescription('')
     setCategoryId('')
     setPrice('')
     setStock('')
     setProductImage('')
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
    <form onSubmit={createProduct}>
      <SelectForm contenLabel={'Category'}
    value={categoryId}
    options={categories}
    contenOption={"Pilih Category"}
    onChange={e => setCategoryId(e.target.value)} />
      <InputForm type={"text"} value={productName} onChange={e => setProductName(e.target.value)} id={""} placeholder={"Masukan Nama Product"} conten={"Nama Product"} />
    </form>
      <h2>Add New Product</h2>
      <form onSubmit={createProduct}>
        <div>
          <label htmlFor="categoryId">Category:</label>
          <select
            id="categoryId"
            name="categoryId"
            value={categoryId}
            onChange={e => setCategoryId(e.target.value)}
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
            value={productName}
            onChange={e => setProductName(e.target.value)}
            placeholder='Product Name'
            required
          />
        </div>
        <div>
          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id='productDescription'
            name='productDescription'
            value={productDescription}
            onChange={e => setProductDescription(e.target.value)}
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
            value={price}
            onChange={e => setPrice(e.target.value)}
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
            value={stock}
            onChange={e => setStock(e.target.value)}
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
            onChange={e => setProductImage(e.target.value)}
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
