// import icon
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../../image/logo.png'

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer className="mt-auto">

        { /* Widgets */ }
        <div className="bg-light py-3 py-xl-5 mt-4">
            <div className="container">
                <div className="row gy-3 align-items-sm-center">
                    <div className="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
                        <div className="footer-logo-wrapper text-center text-sm-start">
                            <a href="/home">
                            <img
                                src={logo}
                                alt="Cybershoes logo"
                                width={175}
                            />
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-xl-6 order-2 order-xl-1">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">Privacy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
                        <ul className="nav justify-content-center justify-content-sm-end">
                            <li className="nav-item">
                                <a className="nav-link link-dark px-3" href="https://www.facebook.com">
                                    <FaFacebook size={24} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-dark px-3" href="https://www.instagram.com">
                                    <FaInstagram size={24} />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-dark px-3" href="https://twitter.com">
                                    <FaXTwitter size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        { /* Credit */ }
        <div className="bg-dark py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="credits text-white text-center">
                        (2024) FSW 39 - Kelompok 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;