import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './layouts/sidebar';
import Navbar from './layouts/navbar';
import { useNavigate } from 'react-router-dom';
import AdminLayoutProvider from './adminLayoutContext';
const Layout = ({ children }) => {
    const history = useNavigate();
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history('/');
        } else {
            if (role !== 'admin') {
                history('/home');
            }
        }

    }, [token, role, history]);
    return (
        <div className='admin-container'>
            <AdminLayoutProvider>
                <div className='admin-sidebar '>
                    <Sidebar />
                </div>
                <div className='page-container'>
                    <div className='admin-header bg-dark'>
                        <Navbar />
                    </div>
                    <div className='admin-content'>{children}</div>
                    {/* <div className='admin-footer'>Footer</div> */}
                </div>
            </AdminLayoutProvider>
        </div>
    )
}

export default Layout