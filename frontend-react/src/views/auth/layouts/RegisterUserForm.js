import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/input-form';
import Button from '../components/button';
import SelectForm from '../components/select-form';
import logo from '../../image/logo.png'
import axiosObject from '../../../services/axiosUrl';
import { useRegisterContext } from '../../../context/RegisterContext';

const RegisterUserForm = () => {
    // const [name, setName] = useState('');
    const {
        name,
        email,
        password,
        phoneNumber,
        selectedProvince,
        selectedRegency,
        selectedDistrict,
        selectedVillage,
        updateName,
        updateEmail,
        updatePassword,
        updatePhoneNumber,
        updateSelectedProvince,
        updateSelectedRegency,
        updateSelectedDistrict,
        updateSelectedVillage, } = useRegisterContext();
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
        updateSelectedProvince(provinceId);
        fetchRegencies(provinceId);
    };

    const handleRegencyChange = (e) => {
        const regencyId = e.target.value;
        updateSelectedRegency(regencyId);
        fetchDistricts(regencyId);
    };

    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        updateSelectedDistrict(districtId);
        fetchVillages(districtId);
    };

    const handleVillageChange = (e) => {
        const villageId = e.target.value;
        updateSelectedVillage(villageId);
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
            updateName('');
            updateEmail('');
            updatePassword('');
            updatePhoneNumber('');
            updateSelectedProvince('');
            updateSelectedRegency('');
            updateSelectedDistrict('');
            updateSelectedVillage('');
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={createUser}>
            <div className="d-flex align-items-center mb-3 pb-1">
                <i
                    className="fas fa-cubes fa-2x me-3"
                    style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0"><img src={logo} alt="" /></span>
            </div>
            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}> Register Account</h5>
            <InputForm conten={"Nama"} type={"text"} id={"name"} value={name} onChange={e => updateName(e.target.value)} placeholder={"Masukan Nama Anda"} />
            <InputForm conten={"Email"} type={"email"} id={"email"} value={email} onChange={e => updateEmail(e.target.value)} placeholder={"Masukan Email Anda"} />
            <InputForm conten={"Password"} type={"password"} id={"password"} value={password} onChange={e => updatePassword(e.target.value)} placeholder={"Masukan Password Anda"} />
            <InputForm conten={"Nomor HP"} type={"number"} id={"phoneNumber"} value={phoneNumber} onChange={e => updatePhoneNumber(e.target.value)} placeholder={"09876xxxxxx"} />
            <label className="form-label font-weight-bold text-center">ALAMAT LENGKAP</label>
            <SelectForm contenLabel={"Provinsi"} contenOption={"Pilih Provinsi"} value={selectedProvince} onChange={handleProvinceChange} options={provinces} />
            <SelectForm contenLabel={"Kabupaten/Kota"} contenOption={"Pilih Kabupaten/Kota"} value={selectedRegency} onChange={handleRegencyChange} options={regencies} />
            <SelectForm contenLabel={"Kecamatan"} contenOption={"Pilih Kecamatan"} value={selectedDistrict} onChange={handleDistrictChange} options={districts} />
            <SelectForm contenLabel={"Desa"} contenOption={"Pilih Desa"} value={selectedVillage} onChange={handleVillageChange} options={villages} />
            {error && <p>Error: {error}</p>}
            <Button type={"submit"} conten={"Register"} />
            <p className="mb-5 pb-lg-2 mt-4" style={{ color: "#393f81" }}>Have an account?{" "}<a href="/" style={{ color: "#393f81" }}>Login here</a></p>
        </form>


    );
};

export default RegisterUserForm;
