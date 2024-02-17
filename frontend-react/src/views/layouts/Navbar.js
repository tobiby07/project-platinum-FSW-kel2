import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/navbar-logo.png'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,  AiOutlineUserAdd} from "react-icons/ai";

function CartBar() {
    return (
      <>
      </>
    )}

function Navbar() {
    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history('/');
    };

    return (
        <>
         <div className="main-navbar shadow-sm sticky-top">
  <div className="top-navbar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
          <h5 className="brand-name">
            <img
              style={{ width: "10rem" }}
              src={logo}
              alt=""
            />
          </h5>
        </div>
        <div className="col-md-5 my-auto">
          <form role="search">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search your product"
                className="form-control"
              />
              <button className="btn bg-white" type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5 my-auto">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-cart" /> Cart (0)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-heart" /> Wishlist (0)
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user" /> Username
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-user" /> Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa fa-list" /> My Orders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  <FiHeart className='nav-icons'/> My Wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  <AiOutlineShoppingCart className="nav-icons"/> My Cart
                  </a>
                </li>
                <li>
                  <a onClick={handleLogout} className="dropdown-item">
                    <i className="fa fa-sign-out" /> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a
        className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
        href="#"
      >
        CYBERSHOES.CO.ID
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              All Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              New Arrivals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Featured Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Electronics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Fashions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Accessories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Appliances
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

       
        </>
    );
}

export default Navbar;
