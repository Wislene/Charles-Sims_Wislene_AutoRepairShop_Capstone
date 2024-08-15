// import React from "react";
// import Service from "../components/Services";
// import Footer from "../components/Footer";
// import Appointment from "../components/appointment";
// import Contact from "../components/contact";
// import About from "../components/about";

// import "../components/styles/Home.css";

// // Images
// import HomeBackgroundImage from '../assets/images/HomeBackground.jpeg';
// import EngineRepairImage from '../assets/images/EngineRepair.jpg';
// import OilChangeImage from '../assets/images/OilChange.jpg';
// import BrakeImage from '../assets/images/BrakeService.jpg';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header
//         className="home-header"
//         style={{ backgroundImage: `url(${HomeBackgroundImage})` }}
//       >
//         <h1 className="home-heading">Auto Repair Shop</h1>
//         <h2 className="home-subheading">Your Trusted Auto Service Experts</h2>
//       </header>
//       <main className="py-8">
//         <section id="services">
//           <h2 className="text-center text-3xl font-bold">Our Services</h2>
//           <div className="services-container">
//             <Service
//               title="Engine Repair"
//               image={EngineRepairImage}
//               alt="Engine Repair"
//               description="Top-notch engine repair services with a guarantee of quality."
//             />
//             <Service
//               title="Oil Change"
//               image={OilChangeImage}
//               alt="Oil Change"
//               description="Keep your engine running smoothly with our comprehensive oil change service."
//             />
//             <Service
//               title="Brake Service"
//               image={BrakeImage}
//               alt="Brake Service"
//               description="Ensure your safety with our reliable brake inspection and repair services."
//             />
//           </div>
//         </section>
//         <About />
//         <Appointment />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Service from "../components/Services";
import Footer from "../components/Footer";
import Appointment from "../components/appointment";
import Contact from "../components/contact";
import About from "../components/About";

import "../components/styles/Home.css";

// Images

import HomeBackgroundImage from "../assets/images/HomeBackground.jpeg";
import EngineRepairImage from "../assets/images/EngineRepair.jpg";
import OilChangeImage from "../assets/images/OilChange.jpg";
import BrakeImage from "../assets/images/BrakeService.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header
        className="home-header"
        style={{ backgroundImage: `url(${HomeBackgroundImage})` }}
      >
        <h1 className="home-heading">Auto Repair Shop</h1>
        <h2 className="home-subheading">Your Trusted Auto Service Experts</h2>
        {/* <nav>
          <ul className="main-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#appointment">Appointment</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav> */}
      </header>
      <main className="py-8">
        <section id="services">
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
          <div className="services-container">
            <Service
              title="Engine Repair"
              image={EngineRepairImage}
              alt="Engine Repair"
              description="Top-notch engine repair services with a guarantee of quality."
            />
            <Service
              title="Oil Change"
              image={OilChangeImage}
              alt="Oil Change"
              description="Keep your engine running smoothly with our comprehensive oil change service."
            />
            <Service
              title="Brake Service"
              image={BrakeImage}
              alt="Brake Service"
              description="Ensure your safety with our reliable brake inspection and repair services."
            />
          </div>
        </section>
        <About />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
