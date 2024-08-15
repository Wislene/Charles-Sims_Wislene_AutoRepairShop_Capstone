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

