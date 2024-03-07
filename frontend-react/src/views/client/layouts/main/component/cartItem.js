import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import axiosObject from "../../../../../services/axiosUrl";

const CartItem = ({ item, onDeleteCartItem, onUpdateCartItem }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [totalPrice, setTotalPrice] = useState(item.Product.price * item.quantity);
  
    useEffect(() => {
      setTotalPrice(item.Product.price * quantity);
    }, [quantity, item.Product.price]);
  
    const handleQuantityChange = async (type) => {
      let newQuantity;
      if (type === 'increment') {
        newQuantity = quantity + 1;
      } else {
        newQuantity = Math.max(1, quantity - 1);
      }
      setQuantity(newQuantity);
      await handleUpdateItem(newQuantity);
    };
  
    const handleRemoveItem = async () => {
      try {
        await axiosObject.delete(`/api/cartItem/${item.id}`);
        onDeleteCartItem(item.id);
      } catch (error) {
        console.error('Error deleting cart item:', error);
      }
    };
  
    const handleUpdateItem = async (newQuantity) => {
      try {
        await axiosObject.patch(`/api/cartItem/${item.id}`, { quantity: newQuantity });
        onUpdateCartItem(item.id, newQuantity); 
      } catch (error) {
        console.error('Error updating cart item:', error);
      }
    };
  
    return (
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div className="bg-image hover-overlay hover-zoom ripple rounded">
            <img src={`${process.env.REACT_APP_API_HOST}/images/${item.Product.productImage}`} className="w-100" alt={item.Product.productName} />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }} />
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p><strong>{item.Product.productName}</strong></p>
          <button className="btn btn-danger btn-sm mb-2" onClick={handleRemoveItem}>
            <FaRegTrashAlt size={20} /> Remove
          </button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
            <button className="btn btn-primary px-3 me-2" onClick={() => handleQuantityChange('decrement')}>
              <FaMinus size={15}/>
            </button>
            <div className="form-outline">
              <input
                min={1}
                name="quantity"
                value={quantity}
                type="number"
                className="form-control"
                readOnly
              />
            </div>
            <button className="btn btn-primary px-3 ms-2" onClick={() => handleQuantityChange('increment')}>
              <FaPlus size={15} />
            </button>
          </div>
          <p className="text-start text-md-center"><strong>Rp{totalPrice.toFixed(2)}</strong></p>
        </div>
      </div>
    );
  };

  export default CartItem