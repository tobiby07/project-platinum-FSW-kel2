import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../../image/logo.png'

const CheckoutSuccessModal = ({ show, handleClose }) => {
  const history = useNavigate();

  const handleModalClose = () => {
    handleClose();
    history('/'); 
  };

  return (
    <Modal
      show={show}
      onHide={handleModalClose}
      size="lg" 
      centered 
    >
      <Modal.Header >
        <Modal.Title>Chekout Successs !!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={logo} alt="" style={{ maxWidth: '50%', marginBottom: '20px' }} /> {/* Menyesuaikan ukuran logo */}
          <h2 className='fw-bold'> TERIMAKASIH </h2>
          <h5>Sudah Berbelanja di Website Resmi Kami </h5>
          <h5>Lanjutkan Belanja dan Dapatkan Pilihan Menarik</h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='bg-danger' variant="secondary" onClick={handleModalClose}>
          Lanjutkan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutSuccessModal;
