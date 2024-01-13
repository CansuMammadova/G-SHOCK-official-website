import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='mainHeader'>
            <div className='container'>
                <img src="./img/logo.png.webp" alt="" />
                <div className='navbar'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/details">Details</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header