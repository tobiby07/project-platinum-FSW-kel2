import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from './components/button';
import InputForm from './components/input-form';

const AddAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/users", {
        name,
        email,
        password,
        role,
      });
      console.log(response.data); 
      setName('');
      setEmail('');
      setPassword('');
      setRole('admin')
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container p-4">
      <h3 className="mb-3">DAFTAR AKUN BARU UNTUK ADMIN</h3>
      <div className="login-line"></div>
      <form onSubmit={createUser}>
      <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"Masukan Nama Anda"}/>
      <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"Masukan Email Anda"}/>
      <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"Masukan Password Anda"}/>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Button type={"submit"} conten={"BUAT AKUN"}/>
        <p className='text-center' style={{color:"tomato"}}>AKUN INI DI KHUSUSKAN UNTUK ADMIN</p>
      </form>
      
      </div>
      
    </>
  );
};

export default AddAdmin;
