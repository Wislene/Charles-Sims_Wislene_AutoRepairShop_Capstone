import React from 'react';
// import 'put cssfooter here';

const Footer = () => {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul className="footer-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <p>&copy; 2023 Auto Repair Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
