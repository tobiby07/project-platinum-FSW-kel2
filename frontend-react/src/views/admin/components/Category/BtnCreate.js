import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
const BtnCreate = ({ setRefresh }) => {
    const [showModal, setShowModal] = useState(false);
    const [categoryName, setCategoryName] = useState('')
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/api/categories", {
                name: categoryName
            })
            setCategoryName('')
            setRefresh(true);
            setShowModal(false);
        } catch (error) {
            setShowModal(false);
            console.log(error);
        }
    }
    return (
        <div className="lg:ml-40 ml-0 lg:space-x-8">
            <button className='btn btn-primary' onClick={handleOpenModal}>Add</button>
            <Modal show={showModal} onHide={handleCloseModal} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(() => { })}>
                        <div className="w-full max-w-lg mx-4">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <label className="form-label" htmlFor="name">
                                    Category Name
                                </label>
                                <input
                                    name="categoryName"
                                    required={true}
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    type={"text"}
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