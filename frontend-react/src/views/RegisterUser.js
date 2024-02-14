import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        navigate('/home');
    }
}, [navigate]);

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
    <div className="container p-4">
      <h3 className="mb-3">DAFTAR AKUN BARU</h3>
      <div className="login-line"></div>
      <form onSubmit={createUsers}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label font-weight-bold">Nama</label>
          <input
            className="form-control rounded-0 font-style-italic"
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Masukkan nama Anda'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="email" className="form-label font-weight-bold">Alamat email</label>
          <input
            className="form-control rounded-0 font-style-italic"
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Masukkan alamat email Anda'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label font-weight-bold">Kata sandi</label>
          <input
            className="form-control rounded-0 font-style-italic"
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Masukkan kata sandi Anda'
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type='submit' className="btn rounded-0 p-2 my-3">BUAT AKUN</button>
      </form>
      <p className="text-center">Sudah memiliki akun? <Link to="/">Masuk disini</Link></p>
      </div>
    </>
  );
};

export default AddUser;
