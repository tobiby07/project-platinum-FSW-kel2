import React from 'react';
import register1 from '../image/register-pic1.png'
import register2 from '../image/register-pic2.png'
import RegisterUserForm from './layouts/RegisterUserForm';
import { RegisterProvider } from '../../context/RegisterContext';


const AddUser = () => {

  return (
    <RegisterProvider>
      <section className="vh-100 ">
        <div className="container py-5 h-1 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <RegisterUserForm />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={register1}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                    <img
                      src={register2}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </RegisterProvider>
  );
};

export default AddUser;
