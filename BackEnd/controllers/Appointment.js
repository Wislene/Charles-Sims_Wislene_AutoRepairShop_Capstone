const express = require("express");
const router = express.Router();


const appointmentData = require("../SampleData/appointmentData.js"); // Importing the data

const Appointment = require('../models/appointment.js');

// Render the form to list all appointments

const renderForm = async (req, res) => {
    try {
      const appointments = await Appointment.find({});
      res.render('form', { appointments, appointment: null });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


// Get All Appointment

const getAppointments = async (req, res) => {
    console.log("anything");
  try {
      const appointments = await Appointment.find({});
      res.json(appointments);
  } catch (error) {
      res.status(500).json({ message: 'Can not get all appointments' });
  }
};

// Get a Single Appointment by ID

const getAppointmentById = async (req, res) => {
  try {
      const appointment = await Appointment.findById(req.params.id);
      if (appointment) {
          res.json(appointment);
      } else {
          res.status(404).json({ message: 'Appointment not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Server Error' });
  }
};


// Create a new Appointment

const createAppointment = async (req, res) => {

// Log the incoming form data
//   console.log(req.body);

  const {customerName, service, date, time, contactNumber, status } = req.body;

  try {
      const newAppointment = new Appointment({
          customerName,
          service,
          date: new Date(date),
          time,
          contactNumber,
          status,

      });
   
      const createdAppointment = await newAppointment.save();
      res.status(201).json(createdAppointment);
  } catch (error) {
      res.status(400).json({ message: 'Error creating appointment',error: error.message });
  }
};

// Update an Appointment

const updateAppointment = async (req, res) => {
  const {customerName, service, date, time, contactNumber, status } = req.body;

  try {
      const appointment = await Appointment.findById(req.params.id);
    //   res.render('form', { appointment, appointments });

      if (appointment) {
          appointment.customerName = customerName || appointment.customerName;
          appointment.service = service || appointment.service;
          appointment.date = new Date(date) || appointment.date;
          appointment.time = time || appointment.time;
          appointment.contactNumber = contactNumber || appointment.contactNumber;
          appointment.status = status || appointment.status;

          const updatedAppointment = await appointment.save();
          res.json(updatedAppointment);
         
      } else {
          res.status(404).json({ message: 'Appointment not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Failed to update appointment', error: error.message });
  }
  return res.status(402).json(updatedAppointment);
};


//  Delele an Appointment

const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
       
        if (appointment) {
            await appointment.remove();
            res.json({ message: 'Appointment removed' });
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting appointment', error: error.message });
    }
  };

//   Seed the database with sample data

  const going = async (req, res)=>{
    console.log("going");
    try {
    await Appointment.deleteMany({}) // deletes all
    await Appointment.insertMany(appointmentData) // adds new ones from array
    res.json({ message: 'Database seeded with sample data' });
    }
    catch (error) {
        console.log("error");
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

  module.exports = {
    renderForm,
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    going
    
  };
