import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ButtonCreate from '../../components/Product/BtnCreate';
import { Modal, Button } from 'react-bootstrap';
import ModalDelete from '../../components/Product/ModalDelete';
import DataList from '../../components/Product/DataList';
function Product() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [productNameDelete, setProductNameDelete] = useState('')
    const [productIdDelete, setIdNameDelete] = useState('')
    const [showModalDelete, setShowModalDelete] = useState(false);
    const handleOpenModalDelete = () => {
        setShowModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setShowModalDelete(false);
    };
    const getProduct = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/products')
            setProduct(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3001/api/products/${productIdDelete}`)
            setProductNameDelete('')
            setIdNameDelete('')
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
    return (
        <Layout>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <div><h2>Product</h2></div>
                    <div className='lg:ml-40 ml-0 lg:space-x-8'>
                        <ButtonCreate setRefresh={setRefresh} />
                    </div>
                </div>
                <div className='page-content '>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <th colSpan={6}>Loading....</th>
                                </tr>
                            ) : product.length > 0 ? (
                                product.map((product, index) => (
                                    // <tr key={product.id}>
                                    //     <th scope="row">{index + 1}</th>
                                    //     <td>{product.productName}</td>
                                    //     <td>{product.ProductCategory ? `${product.ProductCategory.categoryName}` : 'Uncategorized'}</td>
                                    //     <td>{product.price}</td>
                                    //     <td>{product.stock}</td>
                                    //     <td>
                                    //         <FiEdit
                                    //             onClick={() => { }}
                                    //             size={20}
                                    //             className="text-blue-950 hover:text-slate-600 transition-all"
                                    //             cursor="pointer"
                                    //         />
                                    //         <FiTrash2
                                    //             onClick={handleOpenModalDelete}
                                    //             size={20}
                                    //             className="m text-blue-950 hover:text-slate-600 transition-all"
                                    //             cursor="pointer"
                                    //         />
                                    //         <Modal show={showModalDelete} onHide={handleCloseModalDelete} onSubmit={handleDelete}>
                                    //             <ModalDelete product={product} />
                                    //         </Modal>
                                    //     </td>
                                    // </tr>
                                    <DataList key={product.id} index={index} product={product} setRefresh={setRefresh} />
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
export default Product