import React from 'react';
import Home from '../pages/Home';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Home /> {/* Using the Home component */}
      <main>
        <section className="about-section">
          <h2>About Us</h2>
          <p>We are a trusted auto repair shop with over 25 years of experience in the industry. Our team of skilled technicians is dedicated to providing top-quality service to ensure your vehicle runs smoothly.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// const About = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <section className="about-section">
//           <h2>About Us</h2>
//           <p>We are a trusted auto repair shop with over 25 years of experience in the industry. Our team of skilled technicians is dedicated to providing top-quality service to ensure your vehicle runs smoothly.</p>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

export default About;
