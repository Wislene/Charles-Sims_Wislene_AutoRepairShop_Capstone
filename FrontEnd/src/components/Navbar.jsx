import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Navbar.css'; 

const Navbar = () => {
return (
    <nav className="navbar bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 flex justify-between items-center">
        <div className="navbar-left text-white text-xl font-bold">
            Auto Repair Shop
        </div>
        <div className="navbar-right">
            <ul className="flex space-x-4">
                <li><Link className="text-white hover:bg-gray-700 px-3 py-2 rounded" to="/">Home</Link></li>
                <li><Link className="text-white hover:bg-gray-700 px-3 py-2 rounded" to="/about">About</Link></li>
                <li><Link className="text-white hover:bg-gray-700 px-3 py-2 rounded" to="/services">Services</Link></li>
                <li><Link className="text-white hover:bg-gray-700 px-3 py-2 rounded" to="/appointment">Appointment</Link></li> 

                {/* <li><Link className="text-white hover:bg-gray-700 px-3 py-2 rounded" to="/contact">Contact Us</Link></li> */}
            </ul>
        </div>
    </nav>
);
};


export default Navbar;