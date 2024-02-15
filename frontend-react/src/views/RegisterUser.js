import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from './assets/input-form';
import Button from './assets/button';
import SelectForm from './assets/select-form';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedRegency, setSelectedRegency] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        navigate('/home');
    }
  }, [navigate]);

  useEffect(() => {
    fetchProvinces();
  },);

  const fetchResource = async (url, setter) => {
    try {
      const response = await axios.get(url);
      setter(response.data);
    } catch (error) {
      console.log('error');
    }
  };

  const fetchProvinces = async () => {
    await fetchResource('https://tobiby07.github.io/api-wilayah-indonesia/api/provinces.json', setProvinces);
  };
  
  const fetchRegencies = async (provinceId) => {
    await fetchResource(`https://tobiby07.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`, setRegencies);
  };
  
  const fetchDistricts = async (regencyId) => {
    await fetchResource(`https://tobiby07.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`, setDistricts);
  };
  
  const fetchVillages = async (districtId) => {
    await fetchResource(`https://tobiby07.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`, setVillages);
  };  

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    fetchRegencies(provinceId);
  };

  const handleRegencyChange = (e) => {
    const regencyId = e.target.value;
    setSelectedRegency(regencyId);
    fetchDistricts(regencyId);
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    fetchVillages(districtId);
  };

  const handleVillageChange = (e) => {
    const villageId = e.target.value;
    setSelectedVillage(villageId);
  };

  const createUser = async (e) => {
    const provinceObject = provinces.find(item => item.id = selectedProvince)
    const regencyObject = regencies.find(item => item.id = selectedRegency)
    const districkObject = districts.find(item => item.id = selectedDistrict)
    const villageObject = villages.find(item => item.id = selectedVillage)
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/users", {
        name,
        email,
        password,
        phoneNumber,
        province: provinceObject.name,
        regency: regencyObject.name,
        district: districkObject.name,
        village: villageObject.name
        }
      );
      setName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setSelectedProvince('');
      setSelectedRegency('');
      setSelectedDistrict('');
      setSelectedVillage('');
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container p-4">
      <h3 className="mb-3">DAFTAR AKUN BARU</h3>
      <div className="login-line"></div>
      <form onSubmit={createUser}>
        <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"Masukan Nama Anda"}/>
        <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"Masukan Email Anda"}/>
        <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"Masukan Password Anda"}/>
        <InputForm conten={"Nomor HP"} type={"number"} id={"phoneNumber"} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder={"09876xxxxxx"}/>
        <div> 
          <label className="form-label font-weight-bold text-center">ALAMAT LENGKAP</label>
          <SelectForm contenLabel={"PROVINSI"} contenOption={"PILIH PROVINSI"} value={selectedProvince} onChange={handleProvinceChange} options={provinces}/>
          <SelectForm contenLabel={"KABUPATEN/KOTA"} contenOption={"PILIH KABUPATEN/KOTA"} value={selectedRegency} onChange={handleRegencyChange} options={regencies}/>
          <SelectForm contenLabel={"KECAMATAN"} contenOption={"PILIH KECAMATAN"} value={selectedDistrict} onChange={handleDistrictChange} options={districts}/>
          <SelectForm contenLabel={"DESA"} contenOption={"PILIH DESA"} value={selectedVillage} onChange={handleVillageChange} options={villages}/>
        </div>
        {error && <p>Error: {error}</p>}
        <Button type={"submit"} conten={"BUAT AKUN"}/>
      </form>
      <p className="text-center">Sudah memiliki akun? <Link to="/">Masuk disini</Link></p>
    </div>
  );
};

export default AddUser;
