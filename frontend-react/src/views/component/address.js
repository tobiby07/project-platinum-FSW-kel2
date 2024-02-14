import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectForm from '../assets/select-form';

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regencies, setRegencies] = useState([]);
  const [selectedRegency, setSelectedRegency] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [villages, setVillages] = useState([]);
  const [selectedVillage, setSelectedVillage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchResource = async (url, setter, errorMessageSetter) => {
    try {
      const response = await axios.get(url);
      setter(response.data);
    } catch (error) {
      errorMessageSetter(error.message);
    }
  };

  const fetchProvinces = async () => {
    await fetchResource('https://tobiby07.github.io/api-wilayah-indonesia/api/provinces.json', setProvinces, setError);
  };
  
  const fetchRegencies = async (provinceId) => {
    await fetchResource(`https://tobiby07.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`, setRegencies, setError);
  };
  
  const fetchDistricts = async (regencyId) => {
    await fetchResource(`https://tobiby07.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`, setDistricts, setError);
  };
  
  const fetchVillages = async (districtId) => {
    await fetchResource(`https://tobiby07.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`, setVillages, setError);
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

  return (
    <>
       <div> 
       <label className="form-label font-weight-bold text-center">ALAMAT LENGKAP</label>
        <SelectForm contenLabel={"PROVINSI"} contenOption={"PILIH PROVINSI"} value={selectedProvince} onChange={handleProvinceChange} options={provinces}/>
        <SelectForm contenLabel={"KABUPATEN/KOTA"} contenOption={"PILIH KABUPATEN/KOTA"} value={selectedRegency} onChange={handleRegencyChange} options={regencies}/>
        <SelectForm contenLabel={"KECAMATAN"} contenOption={"PILIH KECAMATAN"} value={selectedDistrict} onChange={handleDistrictChange} options={districts}/>
        <SelectForm contenLabel={"DESA"} contenOption={"PILIH DESA"} value={selectedVillage} onChange={handleVillageChange} options={villages}/>
       </div>
        
    </>
  );
};

export default Address;
