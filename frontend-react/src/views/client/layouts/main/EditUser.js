import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../../../auth/components/button';
import logo from '../../../image/logo.png';
import register1 from '../../../image/register-pic1.png';
import register2 from '../../../image/register-pic2.png';
import InputForm from '../../../auth/components/input-form';
import SelectForm from '../../../auth/components/select-form';

const idUser =  localStorage.getItem('id');


const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
  
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/users/${idUser}`);
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
        setPassword(userData.password);
        setPhoneNumber(userData.phoneNumber);
        setSelectedProvince(userData.province);
        setSelectedRegency(userData.regency);
        setSelectedDistrict(userData.district);
        setSelectedVillage(userData.village);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
    console.log(fetchUser)
  }, [id]);

  useEffect(() => {
    fetchProvinces();
  }, []);

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

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/users/${id}`, {
        name,
        email,
        password,
        phoneNumber,
        province: selectedProvince,
        regency: selectedRegency,
        district: selectedDistrict,
        village: selectedVillage
      });
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
                    <form onSubmit={updateUser}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0"><img src={logo} alt="" /></span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}> Edit Account</h5>
                      <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onChange={e => setName(e.target.value)}/>
                      <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onChange={e => setEmail(e.target.value)}  />
                      <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onChange={e => setPassword(e.target.value)}  />
                      <InputForm conten={"Nomor HP"} type={"number"} id={"phoneNumber"} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}  />
                      <label className="form-label font-weight-bold text-center">ALAMAT LENGKAP</label>
                      <SelectForm contenLabel={"Provinsi"} contenOption={"Pilih Provinsi"} value={selectedProvince} onChange={handleProvinceChange} options={provinces} />
                      <SelectForm contenLabel={"Kabupaten/Kota"} contenOption={`${selectedRegency}`} value={selectedRegency} onChange={handleRegencyChange} options={regencies} />
                      <SelectForm contenLabel={"Kecamatan"} contenOption={"Pilih Kecamatan"} value={selectedDistrict} onChange={handleDistrictChange} options={districts} />
                      <SelectForm contenLabel={"Desa"} contenOption={"Pilih Desa"} value={selectedVillage} onChange={handleVillageChange} options={villages} />
                      {error && <p>Error: {error}</p>}
                      <Button type={"submit"} conten={"Update"} />
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

export default EditUser;
