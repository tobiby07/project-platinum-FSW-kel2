import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
import { Modal } from 'react-bootstrap';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";
function DataList({ ...props }) {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [customerNameDelete, setProductNameDelete] = useState(props.customer.categoryName);
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
            await axios.delete(`http://localhost:3001/api/categories/${props.customer.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            setProductNameDelete('')
            setShowModalDelete(false);
            props.setRefresh(true);
        } catch (error) {
            console.log(error)
        }
    };
    console.log(props.customer)
    return (
        <tr key={props.customer.id}>
            <th scope="row">{props.index + 1}</th>
            <td>{props.customer.name}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.phoneNumber}</td>
            <td>{props.customer.Address?.province}</td>
            <td>
                <FiEdit
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