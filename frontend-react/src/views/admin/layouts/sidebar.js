import React from 'react'
import { Link } from 'react-router-dom'

function sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                <span className="fs-4 position-relative">Admin</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link text-white">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">

                        Categories
                    </a>
                </li>
                <li>
                    <Link to="/admin/products" className="nav-link text-white">
                        Products
                    </Link>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">

                        Customers
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default sidebar