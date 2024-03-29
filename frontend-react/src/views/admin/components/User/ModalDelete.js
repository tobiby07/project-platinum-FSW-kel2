import React from 'react'
import { Modal, Button } from 'react-bootstrap';
const ModalDelete = ({ ...props }) => {
    return (
        <div className="lg:ml-40 ml-0 lg:space-x-8">
            <Modal.Header closeButton>
                <Modal.Title>Delete Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(() => { })}>
                    <div className="w-full max-w-lg mx-4">
                        <span>Are you sure want to delete this user?</span>
                        <br />
                        <span className="text-red-500"><b>{props.user}</b></span>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </div >
    )
}

export default ModalDelete