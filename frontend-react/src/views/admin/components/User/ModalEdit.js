import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
const ModalEdit = ({ ...props }) => {
    const [showModalEdit, setShowModal] = useState(false);
    const [userName, setCustomerName] = useState(props.user.name)
    const [email, setEmail] = useState(props.user.email)
    const [password, setPassword] = useState('')
    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModalEdit = useCallback(() => {
        props.handleCloseModalEdit();
        setShowModal(false);
    }, [setShowModal, props]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log('user', props.user.id)
            await axiosObject.patch(`/api/users/${props.user.id}`, {
                name: userName,
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            props.setRefresh(true);
            toast.success("User Updated Successfully");
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
                <Modal.Title>Edit Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(() => { })}>
                    <div className="w-full max-w-lg mx-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input
                                name="userName"
                                required={true}
                                value={userName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                type={"text"}
                                placeholder={""}
                                className={`form-control`}
                            />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6 mt-2">
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
                        <div className="flex flex-wrap -mx-3 mb-6 mt-2">
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
                            <span>* Leave password blank if you don't want to change it</span>
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