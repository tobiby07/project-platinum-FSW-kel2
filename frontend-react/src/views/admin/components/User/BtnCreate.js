import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
const BtnCreate = ({ setRefresh }) => {
    const [showModal, setShowModal] = useState(false);
    const [adminName, setAdminName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axiosObject.post("/api/users", {
                name: adminName,
                email: email,
                password: password,
                role: 'admin'
            })
            setAdminName('')
            setEmail('')
            setPassword('')
            toast.success("Admin Added Successfully");
            setRefresh(true);
            setShowModal(false);
        } catch (error) {
            setShowModal(false);
            toast.error("Something went wrong");
        }
    }
    return (
        <div className="lg:ml-40 ml-0 lg:space-x-8">
            <button className='btn btn-primary' onClick={handleOpenModal}>Add</button>
            <Modal show={showModal} onHide={handleCloseModal} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(() => { })}>
                        <div className="w-full max-w-lg mx-4">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <label className="form-label" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    name="adminName"
                                    required={true}
                                    value={adminName}
                                    onChange={(e) => setAdminName(e.target.value)}
                                    type={"text"}
                                    placeholder={""}
                                    className={`form-control`}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    required={true}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={"email"}
                                    placeholder={""}
                                    className={`form-control`}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    required={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={"password"}
                                    placeholder={""}
                                    className={`form-control`}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default BtnCreate