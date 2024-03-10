import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
import { Modal } from 'react-bootstrap';
import { FiTrash2, FiEye } from "react-icons/fi";
import axiosObject from '../../../../services/axiosUrl';
import { toast } from "react-toastify";
function DataList({ ...props }) {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [customerNameDelete, setProductNameDelete] = useState(props.customer.name);
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
            await axiosObject.delete(`/api/users/${props.customer.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            toast.success("Custmer Deleted Successfully");
            setProductNameDelete('')
            setShowModalDelete(false);
            props.setRefresh(true);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    return (
        <tr key={props.customer.id}>
            <th scope="row">{props.index + 1}</th>
            <td>{props.customer.name}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.phoneNumber}</td>
            <td>{props.customer.Address?.province}</td>
            <td>
                <FiEye
                    onClick={handleOpenModalEdit}
                    size={20}
                    className="text-blue-950 hover:text-slate-600 transition-all"
                    cursor="pointer"
                />
                <ModalEdit
                    customer={props.customer}
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
                    <ModalDelete customer={customerNameDelete} handleDelete={handleDelete} />
                </Modal>
            </td>
        </tr>
    )
}

export default DataList