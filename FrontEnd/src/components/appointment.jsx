// src/components/Appointment.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    service: '',
    date: '',
    time: '',
    contactNumber: '',
    status: 'Scheduled',
  });

  const [loading, setLoading] = useState(false); // State for button loading
  const [message, setMessage] = useState(''); // State for success/error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show "Click" on button
    try {
      const response = await axios.post('/api/appointments/create', formData); // Replace with your real API endpoint
      setMessage('Appointment submitted successfully!');
      console.log('Appointment created:', response.data);
    } catch (error) {
      setMessage('Failed to submit appointment.');
      console.error('There was an error creating the appointment!', error);
    } finally {
      setLoading(false); // Reset button text
      setFormData({
        customerName: '',
        service: '',
        date: '',
        time: '',
        contactNumber: '',
        status: 'Scheduled',
      }); 
    }
  };

  return (
    <div id="appointment" className="appointment-section py-8">
      <h2 className="text-center text-3xl font-bold">Make an Appointment</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-gray-700">Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Service:</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="" disabled>Select Service</option>
            <option value="Engine Repair">Engine Repair</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Brake Service">Brake Service</option>
            {/* Add more service options as needed. will add an empty one in the future */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Contact Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Click' : 'Submit'}
        </button>
        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default Appointment;
