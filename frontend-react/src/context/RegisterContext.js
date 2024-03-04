import React, { createContext, useState, useContext } from "react";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedRegency, setSelectedRegency] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');

    const updateName = (value) => {
        setName(value);
    }
    const updateEmail = (value) => {
        setEmail(value);
    }

    const updatePhoneNumber = (value) => {
        setPhoneNumber(value);
    }

    const updatePassword = (value) => {
        setPassword(value);
    }

    const updateSelectedProvince = (value) => {
        setSelectedProvince(value);
    }

    const updateSelectedRegency = (value) => {
        setSelectedRegency(value);
    }

    const updateSelectedDistrict = (value) => {
        setSelectedDistrict(value);
    }
    const updateSelectedVillage = (value) => {
        setSelectedVillage(value);
    }
    return (
        <RegisterContext.Provider value={{
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
            updateSelectedVillage,
        }}>
            {children}
        </RegisterContext.Provider>
    )
}

const useRegisterContext = () => {
    return useContext(RegisterContext);
}

export { RegisterProvider, useRegisterContext }