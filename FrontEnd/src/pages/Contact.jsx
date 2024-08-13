import React from 'react';
import Home from './Home';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>For inquiries, please call us at (556) 345-5595 or email us at info@autorepairshop.com.</p>
          <p>Visit us at 123 Auto Repair Street, NY, USA.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;



// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <form>
//                 <input type="text" placeholder="Name" />
//                 <input type="email" placeholder="Email" />
//                 <textarea placeholder="Your message"></textarea>
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;
