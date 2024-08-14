import React, { useState } from "react";
import axios from "axios";

// import AppointmentForm from "../components/AppointmentForm";
import Footer from "../components/Footer";
// import "../styles/app.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    service: "",
    date: "",
    time: "",
    contactNumber: "",
    status: "Scheduled",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/appointments/create', formData);
      const response = await axios.post(
        "http://localhost:5001/api/appointments/create",
        formData
      );

      console.log("Appointment created:", response.data);
      // Reset the form or provide feedback to the user
      setFormData({
        customerName: "",
        service: "",
        date: "",
        time: "",
        contactNumber: "",
        status: "Scheduled",
      });
    } catch (error) {
      console.error("There was an error creating the appointment!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Customer Name:</label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Service:</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
