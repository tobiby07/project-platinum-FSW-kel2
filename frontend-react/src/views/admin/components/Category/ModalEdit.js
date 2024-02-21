import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
const ModalEdit = ({ ...props }) => {
    const [showModalEdit, setShowModal] = useState(false);
    const [categoryId, setCategoryId] = useState(props.category.categoryId)
    const [categoryName, setCategoryName] = useState(props.category.categoryName)
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModalEdit = () => {
        props.handleCloseModalEdit();
        setShowModal(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(props.category.id)
        try {
            console.log('category', props.category.id)
            await axios.patch(`http://localhost:3001/api/categories/${props.category.id}`, {
                name: categoryName,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            props.setRefresh(true);
            props.handleCloseModalEdit();
            setShowModal(false);
        } catch (error) {
            setShowModal(false);
            console.log(error);
        }
    }

    useEffect(() => {
        if (props.showModalEdit === true) {
            handleOpenModal()
        } else {
            handleCloseModalEdit()
        }
    }, [handleOpenModal, props.showModalEdit, handleCloseModalEdit])
    return (
        <Modal show={showModalEdit} onHide={handleCloseModalEdit} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Category</Modal.Title>
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
    )
}

export default ModalEdit