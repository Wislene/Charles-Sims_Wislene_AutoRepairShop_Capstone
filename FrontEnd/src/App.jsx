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

