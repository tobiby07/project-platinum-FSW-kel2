import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './layouts/sidebar';
import Navbar from './layouts/navbar';
const Layout = ({ children }) => {
    return (
        <div className='admin-container'>
            <div className='admin-sidebar '>
                <Sidebar />
            </div>
            <div className='page-container'>
                <div className='admin-header bg-dark'>
                    <Navbar />
                </div>
                <div className='admin-content'>{children}</div>
                <div className='admin-footer'>Footer</div>
            </div>
        </div>
    )
}

export default Layout