import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosObject from '../../../../services/axiosUrl';
const ModalEdit = ({ ...props }) => {
    const [showModalEdit, setShowModal] = useState(false);
    const [customerId, setCustomerId] = useState(props.customer.customerId)
    const [customerName, setCustomerName] = useState(props.customer.customerName)
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModalEdit = () => {
        props.handleCloseModalEdit();
        setShowModal(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(props.customer.id)
        try {
            console.log('customer', props.customer.id)
            await axiosObject.patch(`/api/users/${props.customer.id}`, {
                name: customerName,
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
                <Modal.Title>Edit Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(() => { })}>
                    <div className="w-full max-w-lg mx-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Customer Name
                            </label>
                            <input
                                name="customerName"
                                required={true}
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
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