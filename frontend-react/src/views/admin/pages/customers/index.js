import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axios from "axios";
import ButtonCreate from '../../components/Customer/BtnCreate';
import DataList from '../../components/Customer/DataList';
function Customer() {
    const [customer, setCustomer] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [customerNameDelete, setCustomerNameDelete] = useState('')
    const [customerIdDelete, setCustomerIdDelete] = useState('')
    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleOpenModalDelete = () => {
        setShowModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setShowModalDelete(false);
    };
    const getProduct = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/users/customers')
            console.log(response.data)
            setCustomer(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3001/api/cutomers/${customerIdDelete}`)
            setCustomerNameDelete('')
            setCustomerIdDelete('')
            setShowModalDelete(false);
            setRefresh(true);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getProduct();
        setRefresh(false);
    }, [getProduct, refresh])
    console.log(refresh)
    return (
        <Layout>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <div><h2>Customer</h2></div>
                    <div className='lg:ml-40 ml-0 lg:space-x-8'>
                        <ButtonCreate setRefresh={setRefresh} />
                    </div>
                </div>
                <div className='page-content '>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <th colSpan={6}>Loading....</th>
                                </tr>
                            ) : customer.length > 0 ? (
                                customer.map((customer, index) => (
                                    <DataList
                                        key={customer.id}
                                        index={index}
                                        customer={customer}
                                        setRefresh={setRefresh} />
                                ))
                            ) : (<tr>
                                <th colSpan={6}>No Data Found</th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div >
        </Layout >
    )
}
export default Customer