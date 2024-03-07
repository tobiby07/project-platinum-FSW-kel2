import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FiEye } from "react-icons/fi";
import axiosObject from '../../../../services/axiosUrl';
import { format, parseISO } from "date-fns";
import numeral from 'numeral';
import { Button } from 'bootstrap';
function DataList({ ...props }) {
    const [showModalShow, setShowModalShow] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [orderNameDelete, setOrderNameDelete] = useState(props.order.orderName);
    const handleOpenModalShow = () => {
        setShowModalShow(true);
    };

    const handleCloseModalShow = () => {
        setShowModalShow(false);
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
            await axiosObject.delete(`/api/orders/${props.order.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            setOrderNameDelete('')
            setShowModalShow(false);
            props.setRefresh(true);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <tr key={props.order.id}>
            <th scope="row">{props.index + 1}</th>
            <td>
                {format(
                    parseISO(props?.order?.createdAt?.toString()),
                    "dd-MMM-yyyy"
                )}
            </td>
            <td> {props.order.id}</td>
            <td> {props.order?.User?.name}</td>
            <td> Rp {numeral(props.order.totalPrice).format('0,0')}</td>
            <td> {props.order.shippingAddress}</td>
            <td> {props.order.orderStatus}</td>
            <td>
                <FiEye
                    onClick={handleOpenModalShow}
                    size={20}
                    className="m text-blue-950 hover:text-slate-600 transition-all"
                    cursor="pointer"
                />
                <Modal show={showModalShow} onHide={handleCloseModalShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <table className='table'>
                            <thead>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                {props.order?.OrderItems?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Product?.productName}</td>
                                        <td>{item.quantity}</td>
                                        <td>Rp {numeral(item.price).format('0,0')}</td>
                                        <td>Rp {numeral(item.price * item.quantity).format('0,0')}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3}>Total</td>
                                    <td>Rp {numeral(props.order.totalPrice).format('0,0')}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    )
}

export default DataList