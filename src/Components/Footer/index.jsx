import React from 'react'
import './style.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='mainFooter'>
            <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-xl-3 col-lg-3 col-md-5 col-sm-6'>
                        <h1>G-SHOCK</h1>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-md-3 col-sm-5'>
                        <div className='footerTitle'>
                            <h4>PRODUCTS</h4>
                            <ul>
                                <li><Link>Products</Link></li>
                                <li><Link>Popular products</Link></li>
                                <li><Link>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-4 col-sm-7'>
                        <div className='footerTitle'>
                            <h4>New Products</h4>
                            <ul>
                                <li><Link>Woman Cloth</Link></li>
                                <li><Link>Fashion Accessories</Link></li>
                                <li><Link>Man Accessories</Link></li>
                                <li><Link>Rubber made Toys</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-5 col-sm-7'>
                        <div className='footerTitle'>
                            <h4>Support</h4>
                            <ul>
                                <li><Link>Frequently Asked Questions</Link></li>
                                <li><Link>Terms & Conditions</Link></li>
                                <li><Link>Privacy Policy</Link></li>
                                <li><Link>Report a Payment Issue</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='row align-items-center'>
                    <div className='col-xl-7 col-lg-8 col-md-7'>
                        <div className='footerCopyRight'>
                            <p>Copyright ©
                                <script>document.write(new Date().getFullYear());</script>
                                2023 All rights reserved | This template is made with
                                <i className='fa fa-heart'></i>
                                by
                                <a href="http://colorlib.com">G-SHOCK</a>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer