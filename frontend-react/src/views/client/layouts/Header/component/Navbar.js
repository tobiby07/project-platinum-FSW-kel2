import { useNavigate } from "react-router-dom";
import React, { useState , useEffect} from "react";
import logo from "../../../../image/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import axiosObject from "../../../../../services/axiosUrl";

const userName = localStorage.getItem("name");
const idUser = localStorage.getItem("id");

const TopNav = () => {
  const history = useNavigate();
  const [query, setQuery] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchCartItemCount = async () => {
      try {
        const response = await axiosObject.get(`/api/cartItem/${idUser}`); 
        const itemCount = response.data.length;
        setCartItemCount(itemCount);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItemCount(); 
  }, [idUser]);

  const handleSearch = (e) => {
    e.preventDefault();
    history(`/search/${query}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/");
  };

  return (
    <div className="top-navbar">
      <div className="">
        <div className="row">
          {/* logo */}
          <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
            <h5 className="brand-name">
              <a href="/home" className="mx-5">
                <img style={{ width: "60%" }} src={logo} alt="Logo" />
              </a>
            </h5>
          </div>
          {/* eng logo */}

          <div className="col-md-5 my-auto">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input type="search" placeholder="Search your product" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} required />
                <button className="btn bg-danger" type="submit">
                  <PiMagnifyingGlassBold size={20} color="white" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5 my-auto">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <AiOutlineShoppingCart size={25} className="mx-2" /> Cart ( {cartItemCount} )
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  " href={`/detail-user/${idUser}`} role="button">
                  <FaRegUser size={20} className="mx-2" /> {userName}
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>
                  Sign Out
                  <FiLogOut size={23} color="red" className="mx-2" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function Navbar() {
  return (
    <div className="main-navbar shadow-sm sticky-top">
      <TopNav />
    </div>
  );
}

export default Navbar;
