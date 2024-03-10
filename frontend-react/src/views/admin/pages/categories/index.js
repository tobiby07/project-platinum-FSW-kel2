<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axiosObject from "../../../../services/axiosUrl";
import ButtonCreate from '../../components/Category/BtnCreate';
import DataList from '../../components/Category/DataList';
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
            console.log('error', error)
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
=======
import React, { useCallback, useEffect, useState } from "react";
import Layout from "../..";
import axios from "axios";
import ButtonCreate from "../../components/Category/BtnCreate";
import DataList from "../../components/Category/DataList";
import axiosObject from "../../../../services/axiosUrl";
function Category() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [categoryNameDelete, setCategoryNameDelete] = useState("");
  const [categoryIdDelete, setCategoryIdDelete] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleOpenModalDelete = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };
  const getProduct = useCallback(async () => {
    try {
      const response = await axiosObject.get("/api/categories");
      setCategory(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  }, []);
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axiosObject.delete(`/api/categories/${categoryIdDelete}`);
      setCategoryNameDelete("");
      setCategoryIdDelete("");
      setShowModalDelete(false);
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
    setRefresh(false);
  }, [getProduct, refresh]);
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div>
            <h2>Category</h2>
          </div>
          <div className="lg:ml-40 ml-0 lg:space-x-8">
            <ButtonCreate setRefresh={setRefresh} />
          </div>
        </div>
        <div className="page-content ">
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
                category.map((category, index) => <DataList key={category.id} index={index} category={category} setRefresh={setRefresh} />)
              ) : (
                <tr>
                  <th colSpan={3}>No Data Found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
>>>>>>> 69739dcbc54b4b07d592414f902b69944e3fdc18
}
export default Category;
