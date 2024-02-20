import React, { useCallback, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
const ModalEdit = ({ ...props }) => {
    const [category, setCategory] = useState([]);
    const [showModalEdit, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(props.product.categoryId)
    const [productName, setProductName] = useState(props.product.productName)
    const [description, setDescription] = useState(props.product.productDescription)
    const [price, setPrice] = useState(props.product.price)
    const [stock, setStock] = useState(props.product.stock)
    const [productImage, setProductImage] = useState(null)
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModalEdit = () => {
        props.handleCloseModalEdit();
        setShowModal(false);
    };

    const getCategory = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/categories')
            setCategory(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }, [])
    console.log(props)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3001/api/products/${props.product.id}`, {
                productName: productName,
                productDescription: description,
                price: price,
                stock: stock,
                productImage: productImage,
                categoryId: categoryId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'role': localStorage.getItem('role')
                }
            })
            props.setRefresh(true);
            props.handleCloseModalEdit();
            setShowModal(false);
        } catch (error) {
            setShowModal(false);
            console.log(error);
        }
    }
    useEffect(() => {
        getCategory()
    }, [getCategory])

    useEffect(() => {
        if (props.showModalEdit === true) {
            handleOpenModal()
        } else {
            handleCloseModalEdit()
        }
    }, [handleOpenModal, props.showModalEdit])
    return (
        <Modal show={showModalEdit} onHide={handleCloseModalEdit} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(() => { })}>
                    <div className="w-full max-w-lg mx-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Category
                            </label>
                            <select
                                name='categoryId'
                                className="form-select"
                                required={true}
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}>
                                <option value={""}>Select </option>
                                {category.length > 0 && category.map((item, index) => (
                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Product Name
                            </label>
                            <input
                                name="productName"
                                required={true}
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                type={"text"}
                                placeholder={""}
                                className={`form-control`}
                            />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                required={true}
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder={""}
                                className={`form-control`}

                            />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Price
                            </label>
                            <input
                                id="price"
                                name="price"
                                required={true}
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                                type={"number"}
                                placeholder={""}
                                className={`form-control`}
                            />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <label className="form-label" htmlFor="name">
                                Stock
                            </label>
                            <input
                                id="stock"
                                name="stock"
                                required={true}
                                value={stock}
                                onChange={(e) => { setStock(e.target.value) }}
                                type={"number"}
                                placeholder={""}
                                className={`form-control`}
                            />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEdit