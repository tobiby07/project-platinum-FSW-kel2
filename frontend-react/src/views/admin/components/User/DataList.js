import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
import { Modal } from 'react-bootstrap';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
function DataList({ ...props }) {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [userNameDelete, setNameDelete] = useState(props.user.name);
    const handleOpenModalDelete = () => {
        setShowModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setShowModalDelete(false);
    };
    const handleOpenModalEdit = () => {
        setShowModalEdit(true);
    };

    const handleCloseModalEdit = () => {
        setShowModalEdit(false);
    };
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axiosObject.delete(`/api/users/${props.user.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            setNameDelete('')
            setShowModalDelete(false);
            toast.success("User Deleted Successfully");
            props.setRefresh(true);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    return (
        <tr key={props.user.id}>
            <th scope="row">{props.index + 1}</th>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.role}</td>
            <td>
                <FiEdit
                    onClick={handleOpenModalEdit}
                    size={20}
                    className="text-blue-950 hover:text-slate-600 transition-all"
                    cursor="pointer"
                />
                <ModalEdit
                    user={props.user}
                    setRefresh={props.setRefresh}
                    showModalEdit={showModalEdit}
                    handleCloseModalEdit={handleCloseModalEdit}
                    handleOpenModalEdit={handleOpenModalEdit} />
                <FiTrash2
                    onClick={handleOpenModalDelete}
                    size={20}
                    className="m text-blue-950 hover:text-slate-600 transition-all"
                    cursor="pointer"
                />
                <Modal show={showModalDelete} onHide={handleCloseModalDelete} onSubmit={handleDelete}>
                    <ModalDelete user={userNameDelete} handleDelete={handleDelete} />
                </Modal>
            </td>
        </tr>
    )
}

export default DataList