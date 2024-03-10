import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
const ModalEdit = ({ ...props }) => {
    const [showModalEdit, setShowModal] = useState(false);
    const [categoryName, setCategoryName] = useState(props.category.categoryName)
    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModalEdit = useCallback(() => {
        props.handleCloseModalEdit();
        setShowModal(false);
    }, [props]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(props.category.id)
        try {
            await axiosObject.patch(`/api/categories/${props.category.id}`, {
                name: categoryName,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            toast.success("Category Updated Successfully");
            props.setRefresh(true);
            props.handleCloseModalEdit();
            setShowModal(false);
        } catch (error) {
            setShowModal(false);
            toast.error("Something went wrong");
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