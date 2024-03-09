import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axios from "axios";
import DataList from '../../components/Order/DataList';
function Order() {
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [orderNameDelete, setOrderNameDelete] = useState('')
    const [orderIdDelete, setIdNameDelete] = useState('')
    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleOpenModalDelete = () => {
        setShowModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setShowModalDelete(false);
    };
    const getOrder = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/order')
            setOrder(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3001/api/order/${orderIdDelete}`)
            setOrderNameDelete('')
            setIdNameDelete('')
            setShowModalDelete(false);
            setRefresh(true);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getOrder();
        setRefresh(false);
    }, [getOrder, refresh])
    return (
        <Layout>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <div><h2>Order</h2></div>
                </div>
                <div className='page-content '>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Order</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Total</th>
                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <th colSpan={4}>Loading....</th>
                                </tr>
                            ) : order.length > 0 ? (
                                order.map((order, index) => (
                                    <DataList key={order.id} index={index} order={order} setRefresh={setRefresh} />
                                ))
                            ) : (<tr>
                                <th colSpan={4}>No Data Found</th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div >
        </Layout >
    )
}
export default Order