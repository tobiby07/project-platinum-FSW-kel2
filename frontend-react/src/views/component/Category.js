import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/categories", {
        name
      });
      console.log(response.data); 
      setName('');
    } catch (error) {
      setError(error.response.data.message || 'Failed to create category');
    }
  };

  return (
    <>
      <h2>Create New Category</h2>
      <form onSubmit={createCategory}>
        <div>
          <label htmlFor="name">Category Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Category Name'
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default CategoryForm;
