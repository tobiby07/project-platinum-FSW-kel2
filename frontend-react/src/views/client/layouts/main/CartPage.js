import React, { useState, useEffect } from 'react';
import axiosObject from '../../../../services/axiosUrl';
import CartItem from './component/cartItem';
import Summary from './component/Summary';
import { useNavigate } from 'react-router-dom';
import CheckoutSuccessModal from './chekoutSuccess';


const MainCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const idUser = localStorage.getItem('id');
  const [total, setTotal] = useState(0);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [formattedTotal, setFormattedTotal] = useState('');


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axiosObject.get(`/api/cartItem/${idUser}`);
        setCartItems(response.data);
        setIsCartEmpty(response.data.length === 0);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [idUser]);

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + (item.Product.price * item.quantity), 0).toFixed(2);
    setTotal(newTotal);
    setFormattedTotal(newTotal.toLocaleString('id-ID', { maximumFractionDigits: 2 }));
  }, [cartItems]);


  const handleDeleteCartItem = (deletedItemId) => {
    setCartItems(cartItems.filter(item => item.id !== deletedItemId));
  };

  const handleUpdateCartItem = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleCheckout = async (shippingAddress) => {
    const confirmCheckout = window.confirm('Apakah Anda Yakin akan melakukan Chekout ?');
    if (confirmCheckout) {
      try {
        await axiosObject.post(`/api/order`, {
          userId: idUser,
          totalPrice: total,
          shippingAddress: shippingAddress,
          orderStatus: "SUCCESS",
          orderDetails: cartItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.Product.price
          }))
        });
        console.log("Order successfully created!");
        setCartItems([]);
        setShowCheckoutModal(true);
      } catch (error) {
        console.error("Error during checkout:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false);
  };

  return (
    <div>
      <section className="">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                </div>
                <div className="card-body">
                  {cartItems.map((item, index) => (
                    <div key={index}>
                      <CartItem item={item} onDeleteCartItem={handleDeleteCartItem} onUpdateCartItem={handleUpdateCartItem} />
                      {index !== cartItems.length - 1 && <hr className="my-4" />}
                    </div>
                  ))}
                </div>
              </div>
              <Summary total={formattedTotal} onCheckout={handleCheckout} disabled={isCartEmpty} />
            </div>
          </div>
        </div>
      </section>
      <CheckoutSuccessModal show={showCheckoutModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default MainCartPage;