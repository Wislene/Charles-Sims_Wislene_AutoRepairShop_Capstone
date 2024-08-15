import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';
import "../components/styles/App.css"; // Global styles


const Appointment = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Schedule an Appointment</h1>
      </header>
      <main className="py-8">
        <div className="max-w-xl mx-auto">
          <AppointmentForm />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-700 mt-4">For inquiries, please call us at <strong>(556) 345-5595</strong> or email us at <strong>info@autorepairshop.com</strong>.</p>
            <p className="text-gray-700">Visit us at 123 Auto Repair Street, NY, USA.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;



// import React from 'react';
// import Home from './Home';
// import Footer from '../components/Footer';

// const Contact = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <section className="contact-section">
//           <h2>Contact Us</h2>
//           <p>For inquiries, please call us at (556) 345-5595 or email us at info@autorepairshop.com.</p>
//           <p>Visit us at 123 Auto Repair Street, NY, USA.</p>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;



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
