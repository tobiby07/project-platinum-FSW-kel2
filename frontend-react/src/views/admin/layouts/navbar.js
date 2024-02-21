import { useNavigate } from 'react-router-dom';
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
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                        alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{localStorage.getItem('name')}</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><button onClick={handleLogout} className="dropdown-item" href="#">Sign out</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar