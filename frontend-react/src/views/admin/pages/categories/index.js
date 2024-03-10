import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axiosObject from "../../../../services/axiosUrl";
import ButtonCreate from '../../components/Category/BtnCreate';
import DataList from '../../components/Category/DataList';
import { toast } from "react-toastify";
function Category() {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false);
  const getProduct = useCallback(async () => {
    try {
      const response = await axiosObject.get('/api/categories')
      setCategory(response.data)
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
          <div><h2>Category</h2></div>
          <div className='lg:ml-40 ml-0 lg:space-x-8'>
            <ButtonCreate setRefresh={setRefresh} />
          </div>
        </div>
        <div className='page-content '>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <th colSpan={3}>Loading....</th>
                </tr>
              ) : category.length > 0 ? (
                category.map((category, index) => (
                  <DataList
                    key={category.id}
                    index={index}
                    category={category}
                    setRefresh={setRefresh} />
                ))
              ) : (<tr>
                <th colSpan={3}>No Data Found</th>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div >
    </Layout >
  )
}
export default Category;
