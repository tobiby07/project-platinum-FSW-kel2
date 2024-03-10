import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axiosObject from "../../../../services/axiosUrl";
import DataList from '../../components/Customer/DataList';
import { toast } from "react-toastify";
function Customer() {
  const [customer, setCustomer] = useState([])
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false);
  const getProduct = useCallback(async () => {
    try {
      const response = await axiosObject.get('/api/users/customers')
      setCustomer(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error("Something went wrong");
    }
  }, [])
  useEffect(() => {
    getProduct();
    setRefresh(false);
  }, [getProduct, refresh])
  return (
    <Layout>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <div><h2>Customer</h2></div>
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
export default Customer;
