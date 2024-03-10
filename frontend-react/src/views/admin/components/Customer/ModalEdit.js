import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
const ModalEdit = ({ ...props }) => {
    const [showModalEdit, setShowModal] = useState(false);
    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, [setShowModal]);

    const handleCloseModalEdit = useCallback(() => {
        props.handleCloseModalEdit();
        setShowModal(false);
    }, [setShowModal, props]);

    useEffect(() => {
        if (props.showModalEdit === true) {
            handleOpenModal()
        } else {
            handleCloseModalEdit()
        }
    }, [handleOpenModal, props.showModalEdit, handleCloseModalEdit])
    return (
        <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Detail Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table table-borderless table-striped table-earning">
                    <tbody>
                        <tr>
                            <td>Customer Name</td>
                            <td>{props.customer.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{props.customer.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{props.customer.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{props.customer.Address?.village}- {props.customer.Address?.district}, {props.customer.Address?.regency},{props.customer.Address?.province}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModalEdit}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEdit