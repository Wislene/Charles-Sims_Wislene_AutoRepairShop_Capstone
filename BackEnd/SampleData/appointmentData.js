
const mongoose = require('mongoose');
const { Appointment } = require("../models/appointment.js");

const appointmentData = [

  {
    customerName: "Marsha P. Johnson",
    service: "Engine Repair",
    date: new Date("2024-08-10"),
    time: "09:00 AM",
    contactNumber: "555-1234",
    status: "Scheduled",
  },
  {
    customerName: "Harvey Milk",
    service: "Oil Change",
    date: new Date("2024-08-11"),
    time: "10:30 AM",
    contactNumber: "555-2345",
    status: "Completed",
  },
  {
    customerName: "Sylvia Rivera",
    service: "Brake Service",
    date: new Date("2024-08-12"),
    time: "01:00 PM",
    contactNumber: "555-3456",
    status: "Cancelled",
  },
  {
    customerName: "RuPaul Charles",
    service: "Tire Rotation",
    date: new Date("2024-08-13"),
    time: "02:15 PM",
    contactNumber: "555-4567",
    status: "Scheduled",
  },
  {
    customerName: "Ellen DeGeneres",
    service: "Battery Replacement",
    date: new Date("2024-08-14"),
    time: "03:00 PM",
    contactNumber: "555-5678",
    status: "Completed",
  },
  {
    customerName: "Gilbert Baker",
    service: "Air Conditioning Service",
    date: new Date("2024-08-15"),
    time: "11:00 AM",
    contactNumber: "555-6789",
    status: "Scheduled",
  },
  {
    customerName: "Christine Jorgensen",
    service: "Transmission Repair",
    date: new Date("2024-08-16"),
    time: "09:30 AM",
    contactNumber: "555-7890",
    status: "Cancelled",
  },
  {
    customerName: "James Baldwin",
    service: "Wheel Alignment",
    date: new Date("2024-08-17"),
    time: "01:45 PM",
    contactNumber: "555-8901",
    status: "Completed",
  },
  {
    customerName: "Billie Jean King",
    service: "Fuel System Cleaning",
    date: new Date("2024-08-18"),
    time: "08:00 AM",
    contactNumber: "555-9012",
    status: "Scheduled",
  },
  {
    customerName: "Bayard Rustin",
    service: "Exhaust Repair",
    date: new Date("2024-08-19"),
    time: "04:30 PM",
    contactNumber: "555-0123",
    status: "Completed",
  },
  {
    customerName: "Audre Lorde",
    service: "Engine Diagnostics",
    date: new Date("2024-08-20"),
    time: "12:00 PM",
    contactNumber: "555-1235",
    status: "Cancelled",
  },
  {
    customerName: "Laverne Cox",
    service: "Steering & Suspension",
    date: new Date("2024-08-21"),
    time: "10:00 AM",
    contactNumber: "555-2346",
    status: "Scheduled",
  },
  {
    customerName: "Alan Turing",
    service: "Engine Tune-Up",
    date: new Date("2024-08-22"),
    time: "11:30 AM",
    contactNumber: "555-3457",
    status: "Completed",
  },
  {
    customerName: "Frida Kahlo",
    service: "Electrical System Repair",
    date: new Date("2024-08-23"),
    time: "02:00 PM",
    contactNumber: "555-4568",
    status: "Cancelled",
  },
  {
    customerName: "Barbara Gittings",
    service: "Coolant Flush",
    date: new Date("2024-08-24"),
    time: "03:30 PM",
    contactNumber: "555-5679",
    status: "Scheduled",
  },
  {
    customerName: "Larry Kramer",
    service: "Drive Belt Inspection",
    date: new Date("2024-08-25"),
    time: "09:15 AM",
    contactNumber: "555-6780",
    status: "Completed",
  },
  {
    customerName: "Chaz Bono",
    service: "Radiator Repair",
    date: new Date("2024-08-26"),
    time: "10:45 AM",
    contactNumber: "555-7891",
    status: "Cancelled",
  },
  {
    customerName: "Lea DeLaria",
    service: "Muffler Repair",
    date: new Date("2024-08-27"),
    time: "01:30 PM",
    contactNumber: "555-8902",
    status: "Scheduled",
  },
  {
    customerName: "Stormé DeLarverie",
    service: "Headlight Replacement",
    date: new Date("2024-08-28"),
    time: "03:00 PM",
    contactNumber: "555-9013",
    status: "Completed",
  },
  {
    customerName: "Tammy Baldwin",
    service: "Windshield Wiper Replacement",
    date: new Date("2024-08-29"),
    time: "08:30 AM",
    contactNumber: "555-0124",
    status: "Scheduled",
  },
];

// const insertData = async () =>{
  
// }

module.exports = appointmentData;

// Service Explanation

// - Scheduled: For appointments that are still upcoming or have not yet been attended.
// - Completed: For appointments that have already been attended and completed.

// - Cancelled: For appointments that were scheduled but later cancelled