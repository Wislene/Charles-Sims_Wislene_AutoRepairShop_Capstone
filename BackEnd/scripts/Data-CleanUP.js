const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { Appointments } = require("../models/appointment");  // Require the Appointments model

const { appointmentData } = require("../SampleData/appointmentData");  // Require the appointment data


const cleanData = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  
  try {
    if (!MONGO_URI) {
      throw new Error(`MONGO_URI is missing in env file`);
    }
    
    await mongoose.connect(MONGO_URI);
    
    // Clear existing data from collections
    console.log(Appointments);
    await Appointments.deleteMany({})
      .then(() => {
        console.log('Appointments have been cleared');
      })
      .catch((error) => {
        console.log('Error deleting the appointments', error);
      });
    
    await Services.deleteMany({})
      .then(() => {
        console.log('Services have been cleared');
      })
      .catch((error) => {
        console.log('Error deleting the services', error);
      });
    
    await Customers.deleteMany({})
      .then(() => {
        console.log('Customers have been cleared');
      })
      .catch((error) => {
        console.log('Error deleting the customers', error);
      });
    
    // Insert new data into collections
    await Appointments.insertMany(appointmentData)
      .then(() => {
        console.log('Appointments have been saved');
      })
      .catch((error) => {
        console.log('Error saving appointments', error);
      });
    
    await Services.insertMany(serviceData)
      .then(() => {
        console.log('Services have been saved');
      })
      .catch((error) => {
        console.log('Error saving services', error);
      });
    
    await Customers.insertMany(customerData)
      .then(() => {
        console.log('Customers have been saved');
      })
      .catch((error) => {
        console.log('Error saving customers', error);
      });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

cleanData();


// this script was courtesy of nadir 