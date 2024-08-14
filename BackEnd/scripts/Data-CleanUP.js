const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Appointment = require("../models/appointment");  // Require the Appointments model

const appointmentData = require("../SampleData/appointmentData");  // Require the appointment data


const cleanData = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  
  try {
    if (!MONGO_URI) {
      throw new Error(`MONGO_URI is missing in env file`);
    }
    
    await mongoose.connect(MONGO_URI);
    
    // Clear existing data from collections
    console.log(Appointment);
    await Appointment.deleteMany({})
      
    
    await Appointment.deleteMany({})
    
    console.log('Services have been cleared');
    
  
    await Appointment.insertMany(appointmentData)
      
     
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

cleanData();


// this script was courtesy of nadir 