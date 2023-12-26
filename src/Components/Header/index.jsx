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
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>Shop</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <li>
                            <Link>Details</Link>
                        </li>
                        <li>
                            <Link>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header