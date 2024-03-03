import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import EditUser from "./component/EditUser";
import Button from "../../../auth/components/button";
import profilePic from "../../../image/profile-pic.png";
import axiosObject from "../../../../services/axiosUrl";

const UserDetail = () => {
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idUser = localStorage.getItem("id");
        const response = await axiosObject.get(`/api/users/${idUser}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {userData ? (
        <div className="user-detail">
          <h2 className="mt-4 text-center fw-semibold">User Detail</h2>
          <div
            className="card my-4 mx-auto"
            style={{ maxWidth: 540 }}
          >
            <div className="row g-0">
              <div className="col-6">
                <img
                  src={profilePic}
                  className="img-fluid p-3 p-md-4"
                  alt="profile"
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Nama</h5>
                  <p className="card-text">{userData.name}</p>
                  <h5 className="card-title fw-semibold">Email</h5>
                  <p className="card-text">{userData.email}</p>
                  <h5 className="card-title fw-semibold">Phone Number</h5>
                  <p className="card-text">{userData.phoneNumber}</p>

                  {userData.Address && (
                    <div className="mb-1">
                      <h5 className="card-title fw-semibold">Province</h5>
                      <p className="card-text">{userData.Address.province}</p>
                      <h5 className="card-title fw-semibold">Regency</h5>
                      <p className="card-text">{userData.Address.regency}</p>
                      <h5 className="card-title fw-semibold">District</h5>
                      <p className="card-text">{userData.Address.district}</p>
                      <h5 className="card-title fw-semibold">Village</h5>
                      <p className="card-text">{userData.Address.village}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="card-footer text-body-secondary">
              <div className="py-2 px-0 text-end">
                <button
                  className="btn bg-dark text-white"
                  onClick={openModal}
                >
                  Edit User
                </button>
                <Modal show={showModal} onHide={closeModal} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ maxHeight: "800vh" }}>
                    <EditUser userData={userData} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={closeModal} conten={"Close"} />
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetail;
