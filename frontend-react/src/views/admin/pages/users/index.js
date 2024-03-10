import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import ButtonCreate from '../../components/User/BtnCreate';
import DataList from '../../components/User/DataList';
import { apiUrl } from '../../../../config/config';
import axiosObject from "../../../../services/axiosUrl";
function User() {
    const [user, setCustomer] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);

    const getProduct = useCallback(async () => {
        try {
            const response = await axiosObject.get('/api/users/admin')
            setCustomer(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])

    useEffect(() => {
        getProduct();
        setRefresh(false);
    }, [getProduct, refresh])
    console.log(apiUrl)
    return (
        <Layout>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <div><h2>Admin List</h2></div>
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
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <th colSpan={6}>Loading....</th>
                                </tr>
                            ) : user.length > 0 ? (
                                user.map((user, index) => (
                                    <DataList
                                        key={user.id}
                                        index={index}
                                        user={user}
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
export default User