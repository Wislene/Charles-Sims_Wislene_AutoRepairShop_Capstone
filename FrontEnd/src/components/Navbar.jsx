import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles/navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Auto Repair Shop</h1>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
