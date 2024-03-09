import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/button';
import InputForm from './components/input-form';
import axiosObject from '../../services/axiosUrl';

const AddAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('admin');
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await axiosObject.post("/api/users", {
        name,
        email,
        password,
        role,
      });
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
          <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"Masukan Nama Anda"} />
          <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"Masukan Email Anda"} />
          <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"Masukan Password Anda"} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Button type={"submit"} conten={"BUAT AKUN"} />
          <p className='text-center' style={{ color: "tomato" }}>AKUN INI DI KHUSUSKAN UNTUK ADMIN</p>
        </form>

      </div>

    </>
  );
};

export default AddAdmin;
