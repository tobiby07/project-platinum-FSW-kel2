import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import { Speedometer2, Boxes, People, BoxSeam, PersonCircle, XLg, Triangle, Bookmarks } from 'react-bootstrap-icons'
import { useAdminLayout } from '../adminLayoutContext';
function Sidebar() {
    // const [isOpen, setIsOpen] = useState(false);
    const { isSidebarOpen, toggleSidebar } = useAdminLayout();
    const menuItems = [
        {
            path: "/admin",
            name: "Dashboard",
            icon: <Speedometer2 />
        },
        {
            path: "/admin/categories",
            name: "Categories",
            icon: <Boxes />
        },
        {
            path: "/admin/brands",
            name: "Brands",
            icon: <Bookmarks />
        },
        {
            path: "/admin/products",
            name: "Products",
            icon: <BoxSeam />
        },
        {
            path: "/admin/customers",
            name: "Customers",
            icon: <People />
        },
        {
            path: "/admin/users",
            name: "Users",
            icon: <PersonCircle />
        }
    ]
    console.log("apakah Terbuka? ", isSidebarOpen)
    return (
        <div className={`sidebar-content d-flex justify-content-between flex-column flex-shrink-0 text-white bg-dark`} style={{ width: isSidebarOpen ? "280px" : "50px" }}>
            <div className='sidebar-logo' style={{ display: isSidebarOpen ? "none" : "block" }}>
                <Triangle onClick={toggleSidebar} />
            </div>
            <div className='sidebar-header' style={{ display: isSidebarOpen ? "block" : "none" }}>
                <div className='sidebar-title' >
                    <Link to="/admin" className="text-white text-decoration-none ">

                        <span className=" position-relative">Admin</span>
                    </Link>
                    <XLg onClick={toggleSidebar} className='sidebar-close-icon' />
                </div>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item, index) => (
                    <li key={index} className="sidebar-item ">
                        <Link to={item.path} className="sidebar-link text-white">
                            <div className='sidebar-icon'>{item.icon}</div>
                            <div className='sidebar-text' style={{ display: isSidebarOpen ? "inline" : "none" }}>{item.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar