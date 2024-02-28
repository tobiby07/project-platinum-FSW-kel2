import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
import { Modal } from 'react-bootstrap';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";
function DataList({ ...props }) {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [brandNameDelete, setBrandNameDelete] = useState(props.brand.brandName);
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
            await axios.delete(`http://localhost:3001/api/brands/${props.brand.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            setBrandNameDelete('')
            setShowModalDelete(false);
            props.setRefresh(true);
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <tr key={props.brand.id}>
            <th scope="row">{props.index + 1}</th>
            <td>
                {props.brand.name}
            </td>
            <td>  {props.brand.logo ? <img src={`${props.brand.logo}`} alt={`${props.brand.name}`} width="50px" className='rounded m-2' /> : ''}</td>
            <td>
                <FiEdit
                    onClick={handleOpenModalEdit}
                    size={20}
                    className="text-blue-950 hover:text-slate-600 transition-all"
                    cursor="pointer"
                />
                <ModalEdit
                    brand={props.brand}
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
                    <ModalDelete brand={brandNameDelete} handleDelete={handleDelete} />
                </Modal>
            </td>
        </tr>
    )
}

export default DataList