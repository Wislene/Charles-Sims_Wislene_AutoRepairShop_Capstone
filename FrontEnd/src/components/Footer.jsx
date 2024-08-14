import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
            <nav aria-label="Footer Navigation">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:underline">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointment" className="hover:underline">
                            Appointment
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="mt-4">&copy; {currentYear} Auto Repair Shop. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
