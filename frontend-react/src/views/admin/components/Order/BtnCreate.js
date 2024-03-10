import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
const BtnCreate = ({ setRefresh }) => {
    const [showModal, setShowModal] = useState(false);
    const [brandName, setBrandName] = useState('')
    const [brandImage, setBrandImage] = useState()
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('brandImage', brandImage)
        formData.append('name', brandName)
        try {
            await axiosObject.post("/api/brands", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'role': localStorage.getItem('role')
                }
            })
            toast.success("Brand Added Successfully");
            setBrandName('')
            setBrandImage('')
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
                    <Modal.Title>Add Brands</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(() => { })}>
                        <div className="w-full max-w-lg mx-4">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <label className="form-label" htmlFor="name">
                                    Brand Name
                                </label>
                                <input
                                    name="brandName"
                                    required={true}
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    type={"text"}
                                    placeholder={""}
                                    className={`form-control`}
                                />
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <label className="form-label" htmlFor="name">
                                    Brand Logo
                                </label>
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    filename={brandImage}
                                    onChange={(e) => setBrandImage(e.target.files[0])}
                                    type={"file"}
                                    accept='image/*'
                                    className={`form-control`}
                                />
                                {brandImage && <img src={URL.createObjectURL(brandImage)} alt="preview" width={100} height={100} />}
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