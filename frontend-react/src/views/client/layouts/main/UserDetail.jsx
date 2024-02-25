import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import EditUser from "./component/EditUser";
import Button from '../../../auth/components/button';

const UserDetail = () => {
    const [userData, setUserData] = useState(null);
    const [showModal, setShowModal] = useState(false); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const idUser = localStorage.getItem('id');
                const response = await axios.get(`http://localhost:3001/api/users/${idUser}`);
                setUserData(response.data); 
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData(); 
    }, []); 

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="">
            {userData ? (
                <div>
                    <h2>User Detail</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phoneNumber}</p>
                    {userData.Address && (
                        <div>
                            <p>Province: {userData.Address.province}</p>
                            <p>Regency: {userData.Address.regency}</p>
                            <p>District: {userData.Address.district}</p>
                            <p>Village: {userData.Address.village}</p>
                        </div>
                    )}
                    <button onClick={openModal}>Edit User</button>
                    <Modal show={showModal} onHide={closeModal} size='lg' >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ maxHeight: '800vh' }} >
                            <EditUser userData={userData} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={closeModal} conten={"Close"} />
                        </Modal.Footer>
                    </Modal>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetail;
