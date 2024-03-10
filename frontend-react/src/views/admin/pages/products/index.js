import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../..'
import axiosObject from "../../../../services/axiosUrl";
import ButtonCreate from '../../components/Product/BtnCreate';
import DataList from '../../components/Product/DataList';
function Product() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const getProduct = useCallback(async () => {
        try {
            const response = await axiosObject.get('/api/products')
            setProduct(response.data)
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
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <th colSpan={7}>Loading....</th>
                                </tr>
                            ) : product.length > 0 ? (
                                product.map((product, index) => (
                                    <DataList key={product.id} index={index} product={product} setRefresh={setRefresh} />
                                ))
                            ) : (<tr>
                                <th colSpan={7}>No Data Found</th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div >
        </Layout >
    )
}
export default Product