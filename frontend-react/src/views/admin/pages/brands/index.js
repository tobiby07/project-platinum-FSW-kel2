<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axiosObject from "../../../../services/axiosUrl";
import ButtonCreate from '../../components/Brand/BtnCreate';
import DataList from '../../components/Brand/DataList';
function Brand() {
    const [brand, setBrand] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const getBrand = useCallback(async () => {
        try {
            const response = await axiosObject.get('/api/brands')
            setBrand(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])
    useEffect(() => {
        getBrand();
        setRefresh(false);
    }, [getBrand, refresh])
    return (
        <Layout>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <div><h2>Brand</h2></div>
                    <div className='lg:ml-40 ml-0 lg:space-x-8'>
                        <ButtonCreate setRefresh={setRefresh} />
                    </div>
                </div>
                <div className='page-content '>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <th colSpan={4}>Loading....</th>
                                </tr>
                            ) : brand.length > 0 ? (
                                brand.map((brand, index) => (
                                    <DataList key={brand.id} index={index} brand={brand} setRefresh={setRefresh} />
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
=======
import React, { useCallback, useEffect, useState } from "react";
import Layout from "../..";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ButtonCreate from "../../components/Brand/BtnCreate";
import { Modal, Button } from "react-bootstrap";
import ModalDelete from "../../components/Brand/ModalDelete";
import DataList from "../../components/Brand/DataList";
import axiosObject from "../../../../services/axiosUrl";
function Brand() {
  const [brand, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [brandNameDelete, setBrandNameDelete] = useState("");
  const [brandIdDelete, setIdNameDelete] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleOpenModalDelete = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };
  const getBrand = useCallback(async () => {
    try {
      const response = await axiosObject.get(`/api/brands`);
      setBrand(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  }, []);
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axiosObject.delete(`/api/brands/${brandIdDelete}`);
      setBrandNameDelete("");
      setIdNameDelete("");
      setShowModalDelete(false);
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBrand();
    setRefresh(false);
  }, [getBrand, refresh]);
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div>
            <h2>Brand</h2>
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
                <th scope="col">Brand</th>
                <th scope="col">Logo</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <th colSpan={4}>Loading....</th>
                </tr>
              ) : brand.length > 0 ? (
                brand.map((brand, index) => <DataList key={brand.id} index={index} brand={brand} setRefresh={setRefresh} />)
              ) : (
                <tr>
                  <th colSpan={4}>No Data Found</th>
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
export default Brand;
