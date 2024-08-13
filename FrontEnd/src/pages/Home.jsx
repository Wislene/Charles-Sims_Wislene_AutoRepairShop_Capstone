import React from "react";
import Service from "../components/Services";
import Footer from "../components/Footer";
import "./Home.css";


const Home = () => {
  return (
    <div>
      <header>
        <h1>Auto Repair Shop</h1>
        <h2>Your Trusted Auto Service Experts</h2>
        <nav aria-label="Main Navigation" role="navigation">
          <ul className="main-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Our Services</h2>
        <div className="services-container">
          <Service
            title="Engine Repair"
            image="/images/service-engine-repair.jpg"
            alt="Engine Repair"
            description="Top-notch engine repair services with a guarantee of quality."
          />
          <Service
            title="Oil Change"
            image="/images/service-oil-change.jpg"
            alt="Oil Change"
            description="Keep your engine running smoothly with our comprehensive oil change service."
          />
          <Service
            title="Brake Service"
            image="/images/service-brake-service.jpg"
            alt="Brake Service"
            description="Ensure your safety with our reliable brake inspection and repair services."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

// import React from 'react';
// import '../pages/'

// // import backgroundImage from '../assets/images/HomeBackground.jpeg';

// const Home = () => {

//     return (
//         <div>
//             <h1>Welcome to Auto Repair Shop</h1>

//         </div>
//     );
// };

// export default Home;
