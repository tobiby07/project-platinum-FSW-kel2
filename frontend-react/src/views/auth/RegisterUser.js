import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputForm from './components/input-form';
import Button from './components/button';
import SelectForm from './components/select-form';
import logo from '../image/logo.png'
import register1 from '../image/register-pic1.png'
import register2 from '../image/register-pic2.png'
import axiosObject from '../../services/axiosUrl';


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
      const response = await axios.get(`https://tobiby07.github.io/api-wilayah-indonesia/api${url}`);
      setter(response.data);
    } catch (error) {
      console.log('error');
    }
  };


  const fetchProvinces = async () => {
    await fetchResource('/provinces.json', setProvinces);
  };

  const fetchRegencies = async (provinceId) => {
    await fetchResource(`/regencies/${provinceId}.json`, setRegencies);
  };

  const fetchDistricts = async (regencyId) => {
    await fetchResource(`/districts/${regencyId}.json`, setDistricts);
  };

  const fetchVillages = async (districtId) => {
    await fetchResource(`/villages/${districtId}.json`, setVillages);
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
    const provinceObject = provinces.find(item => item.id === selectedProvince)
    const regencyObject = regencies.find(item => item.id === selectedRegency)
    const districkObject = districts.find(item => item.id === selectedDistrict)
    const villageObject = villages.find(item => item.id === selectedVillage)
    e.preventDefault();
    try {
      await axiosObject.post("/api/users", {
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

<section className="vh-100 ">
<div className="container py-5 h-1 ">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col col-xl-10">
      <div className="card" style={{ borderRadius: "1rem" }}>
        <div className="row g-0">
          <div className="col-md-6 col-lg-7 d-flex align-items-center">
            <div className="card-body p-4 p-lg-5 text-black">
              <form onSubmit={createUser}>
                <div className="d-flex align-items-center mb-3 pb-1">
                  <i
                    className="fas fa-cubes fa-2x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0"><img  src={logo} alt="" /></span>
                </div>
                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}> Register Account</h5>
                <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onChange={e => setName(e.target.value)} placeholder={"Masukan Nama Anda"}/>
                <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"Masukan Email Anda"}/>
                <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"Masukan Password Anda"}/>
                <InputForm conten={"Nomor HP"} type={"number"} id={"phoneNumber"} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder={"09876xxxxxx"}/>
                <label className="form-label font-weight-bold text-center">ALAMAT LENGKAP</label>
                <SelectForm contenLabel={"Provinsi"} contenOption={"Pilih Provinsi"} value={selectedProvince} onChange={handleProvinceChange} options={provinces}/>
                <SelectForm contenLabel={"Kabupaten/Kota"} contenOption={"Pilih Kabupaten/Kota"} value={selectedRegency} onChange={handleRegencyChange} options={regencies}/>
                <SelectForm contenLabel={"Kecamatan"} contenOption={"Pilih Kecamatan"} value={selectedDistrict} onChange={handleDistrictChange} options={districts}/>
                <SelectForm contenLabel={"Desa"} contenOption={"Pilih Desa"} value={selectedVillage} onChange={handleVillageChange} options={villages}/>
                {error && <p>Error: {error}</p>}
                <Button type={"submit"} conten={"Register"}/>
                <p className="mb-5 pb-lg-2 mt-4" style={{ color: "#393f81"  }}>Have an account?{" "}<a href="/" style={{ color: "#393f81" }}>Login here</a></p>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 d-none d-md-block">
          <img
                    src={register1}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
          <img
          src={register2}
          alt="login form"
          className="img-fluid"
          style={{ borderRadius: "1rem 0 0 1rem" }}
          />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

    
  );
};

export default AddUser;
