import React, { useEffect, useState, useCallback } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
const ModalEdit = ({ ...props }) => {
    const [showModalEdit, setShowModal] = useState(false);
    const [brandName, setBrandName] = useState(props.brand.name)
    const [brandImage, setBrandImage] = useState(props.brand.logo ? props.brand.logo : '')
    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModalEdit = useCallback(() => {
        props.handleCloseModalEdit();
        setShowModal(false);
    }, [props]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('brandImage', brandImage)
        formData.append('name', brandName)
        try {
            await axiosObject.patch(`/api/brands/${props.brand.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'role': localStorage.getItem('role')
                }
            })
            props.setRefresh(true);
            props.handleCloseModalEdit();
            toast.success("Brand Updated Successfully");
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
    }, [props.showModalEdit, handleOpenModal, handleCloseModalEdit])
    return (
        <Modal show={showModalEdit} onHide={handleCloseModalEdit} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Brand</Modal.Title>
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
                            {brandImage ? brandImage.name ?
                                <img src={URL.createObjectURL(brandImage)} alt="preview" width={100} height={100} /> : <img src={`${brandImage}`} alt="preview" width={100} height={100} /> : null}

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