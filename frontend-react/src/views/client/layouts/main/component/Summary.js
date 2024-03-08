import React, { useState, useEffect } from 'react';
import axiosObject from "../../../../../services/axiosUrl";

const idUser = localStorage.getItem("id");

const Summary = ({ total, onCheckout, disabled }) => {
  const [address, setAddress] = useState()

  useEffect(() => {
    const fetchShippingAddress = async () => {
      try {
        const response = await axiosObject.get(`/api/users/${idUser}`);
        const userData = response.data;
        const address = userData.Address;
        setAddress(address);
      } catch (error) {
        console.error("Error fetching shipping address:", error);
      }
    };

    fetchShippingAddress();
  }, [idUser]);

  const handleCheckout = () => {
    if (address) {
      const addressString = `${address.province}, ${address.regency}, ${address.district}, ${address.village}`;
      onCheckout(addressString);
    } else {
      console.error("Shipping address is not available");
    }
  };

    return (
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>Rp.{total}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping Address
            {address && (
              <span>
                {address.province}, {address.regency}, {address.district}, {address.village}
              </span>
            )}
          </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong><p className="mb-0">(including VAT)</p></strong>
              </div>
              <span><strong>Rp.{total} </strong></span>
            </li>
          </ul>
          <button type="button" className="btn btn-danger btn-lg btn-block" onClick={handleCheckout} disabled={disabled} >
            Chekout
          </button>
        </div>
      </div>
    );
  };

  export default Summary