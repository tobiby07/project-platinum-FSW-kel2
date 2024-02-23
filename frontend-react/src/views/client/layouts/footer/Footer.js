// import icon
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../../image/logo.png'

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <footer>

        { /* Widgets */ }
        <div class="bg-light py-3 py-xl-5 mt-4">
            <div class="container">
                <div class="row gy-3 align-items-sm-center">
                    <div class="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
                        <div class="footer-logo-wrapper text-center text-sm-start">
                            <a href="/home">
                            <img
                                src={logo}
                                alt="Cybershoes logo"
                                width={175}
                            />
                            </a>
                        </div>
                    </div>

                    <div class="col-xs-12 col-xl-6 order-2 order-xl-1">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">Terms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-secondary px-2 px-md-3 fw-medium" href="#!">Privacy</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
                        <ul class="nav justify-content-center justify-content-sm-end">
                            <li class="nav-item">
                                <a class="nav-link link-dark px-3" href="https://www.facebook.com">
                                    <FaFacebook size={24} />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-dark px-3" href="https://www.instagram.com">
                                    <FaInstagram size={24} />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-dark px-3" href="https://twitter.com">
                                    <FaXTwitter size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        { /* Credit */ }
        <div class="bg-dark py-3">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="credits text-white text-center">
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