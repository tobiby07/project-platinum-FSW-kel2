import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
import { Modal } from 'react-bootstrap';
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axiosObject from '../../../../services/axiosUrl';
function DataList({ ...props }) {
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [productNameDelete, setProductNameDelete] = useState(props.product.productName);
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
            await axiosObject.delete(`/api/products/${props.product.id}`, {
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
    return (
        <tr key={props.product.id}>
            <th scope="row">{props.index + 1}</th>
            <td>
                {props.product.productImage ? <img src={`${process.env.REACT_APP_API_HOST}/images/${props.product.productImage}`} alt="product" width="50px" className='rounded m-2' /> : ''}
                {props.product.productName}
            </td>
            <td>{props.product.Brand ? `${props.product.Brand.name}` : 'N/A'}</td>
            <td>{props.product.ProductCategory ? `${props.product.ProductCategory.categoryName}` : 'Uncategorized'}</td>
            <td>{props.product.price}</td>
            <td>{props.product.stock}</td>
            <td>
                <FiEdit
                    onClick={handleOpenModalEdit}
                    size={20}
                    className="text-blue-950 hover:text-slate-600 transition-all"
                    cursor="pointer"
                />
                <ModalEdit
                    product={props.product}
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
                    <ModalDelete product={productNameDelete} handleDelete={handleDelete} />
                </Modal>
            </td>
        </tr>
    )
}

export default DataList