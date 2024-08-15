
import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Home from "./Home";

const AboutPage = () => {
  return (
    <div>
      <Home />
      <main>
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            We are a trusted auto repair shop with over 25 years of experience
            in the industry. Our team of skilled technicians is dedicated to
            providing top-quality service to ensure your vehicle runs smoothly.
          </p>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
