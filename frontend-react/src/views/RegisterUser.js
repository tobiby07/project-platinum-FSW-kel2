import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from './assets/input-form';
import Button from './assets/button';
import Address from './component/address';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
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
        address,
        phoneNumber
      });
      setName('');
      setEmail('');
      setPassword('');
      setAddress('')
      setPhoneNumber('')
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
        <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onchange={e => setName(e.target.value)} placeholder={"Masukan Nama Anda"}/>
        <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onchange={e => setEmail(e.target.value)} placeholder={"Masukan Email Anda"}/>
        <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onchange={e => setPassword(e.target.value)} placeholder={"Masukan Password Anda"}/>
        <InputForm conten={"Alamat"} type={"text"} id={"address"} value={address} onchange={e => setAddress(e.target.value)} placeholder={"Masukan Alamat Anda"}/>
        <InputForm conten={"Nomor HP"} type={"number"} id={"phoneNumber"} value={phoneNumber} onchange={e => setPhoneNumber(e.target.value)} placeholder={"09876xxxxxx"}/>
        <Address/>
        {error && Error}
        <Button type={"submit"} conten={"BUAT AKUN"}/>
      </form>
      <p className="text-center">Sudah memiliki akun? <Link to="/">Masuk disini</Link></p>
      </div>
    </>
  );
};

export default AddUser;
