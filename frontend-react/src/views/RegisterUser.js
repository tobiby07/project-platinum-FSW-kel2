import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/users", {
        name,
        email,
        password,
      });
      setName('');
      setEmail('');
      setPassword('');
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Add New User</h2>
      <form onSubmit={createUsers}>
        <div>
          <label htmlFor="name">Nama:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Name'
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='abc@gmail.com'
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='password'
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

export default AddUser;
