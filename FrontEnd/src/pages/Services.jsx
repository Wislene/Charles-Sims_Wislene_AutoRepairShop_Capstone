import React from "react";
import Service from "../components/Services";  // Ensure you import the correct component
import Footer from "../components/Footer";
import "../components/Styles/Services.css";

// Import images directly
import EngineRepairImage from "../assets/images/EngineRepair.jpg";
import OilChangeImage from "../assets/images/OilChange.jpg";
import BrakeImage from "../assets/images/BrakeService.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-8">
        <h1 className="service-title">Our Services</h1>
      </header>
      <main className="py-8">
        <div className="services-container">
          <Service
            title="Engine Repair"
            image={EngineRepairImage}  // Using the imported image
            alt="Engine Repair"
            description="Top-notch engine repair services with a guarantee of quality."
          />
          <Service
            title="Oil Change"
            image={OilChangeImage}  // Using the imported image
            alt="Oil Change"
            description="Keep your engine running smoothly with our comprehensive oil change service."
          />
          <Service
            title="Brake Service"
            image={BrakeImage}  // Using the imported image
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
