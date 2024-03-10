import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
function Navbar() {
    const history = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('name');
        localStorage.removeItem('username');
        history('/');
    };
    return (
        <div className="container-fluid">
            <div className='p-3 '>
                <h4>Cyber Shoes</h4>
            </div>
            <div className="dropdown">
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                        alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{localStorage.getItem('name')}</strong>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><button onClick={handleLogout} className="dropdown-item" href="#">Sign out</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar