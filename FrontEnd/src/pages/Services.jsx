import React from 'react';
import Home from './Home';
import Service from '../components/Services'
import Footer from '../components/Footer'
import '../components/Styles/Services.css';

const Services = () => {
  return (
    <div>
      <Header />
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

export default Services;
