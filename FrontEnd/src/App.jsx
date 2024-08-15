import React, { useState } from "react";
import {
 
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment"; // This component will render the form

// import "./components/Styles/App.css"; // Global styles

function App() {
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [status, setStatus] = useState("Scheduled"); // Default to 'Scheduled'
  const [submissionMessage, setSubmissionMessage] = useState(""); // State to store submission message

  // Create appointment function
  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    try {
      await axios({
        url: "https://capstone-backend-1cje.onrender.com/appointments/create", // Replace with your actual endpoint
        method: "POST",
        data: { customerName, service, date, time, contactNumber, status },
      }).then((result) => {
        setSubmissionMessage("Appointment successfully submitted!"); // Set success message
        navigate("/appointments"); // Redirect to the appointments page after submission
      });
    } catch (error) {
      console.log(error);
      setSubmissionMessage("Failed to submit appointment. Please try again."); // Set error message
    }
  };

  return (
   
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/appointment"
              element={
                <Appointment
                  customerName={customerName}
                  setCustomerName={setCustomerName}
                  service={service}
                  setService={setService}
                  date={date}
                  setDate={setDate}
                  time={time}
                  setTime={setTime}
                  contactNumber={contactNumber}
                  setContactNumber={setContactNumber}
                  status={status}
                  setStatus={setStatus}
                  handleCreateAppointment={handleCreateAppointment}
                  submissionMessage={submissionMessage}
                />
              }
            />
          </Routes>
        </div>
      </div>
   
  );
}

export default App;


// old code: 

// import React from "react";
// const { useState, useEffect } = require('react');
// const axios = require('axios');
// const { useNavigate } = require('react-router-dom');
// const { Routes, Route } = require('react-router-dom');

// const { BrowserRouter: Router, Route, Routes } = require('react-router-dom');

// const Navbar = require('./components/Navbar');
// const Home = require('./pages/Home');
// const About = require('./pages/About');
// const Services = require('./pages/Services');
// const Contact = require('./pages/Contact');
// const Appointment = require('./pages/Appointment');

// require('./components/Styles/App.css'); // Global styles

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";

// import Contact from "./pages/Contact";

// import Appointment from "./pages/Appointment";
// import "./components/Styles/App.css"; // Global styles

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/appointment" element={<Appointment />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;
