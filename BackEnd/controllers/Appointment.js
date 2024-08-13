// const express = require("express");
// const router = express.Router();

// const { Appointments } = require("./models/appointment.js");
const appointmentData = require("../SampleData/appointmentData.js"); // Importing the data

const Appointment = require('../models/appointment');

// const Appointments = require("../models/appointment.js");


// Get All Appointment

const getAppointments = async (req, res) => {
  try {
      const appointments = await Appointment.find({});
      res.json(appointments);
  } catch (error) {
      res.status(500).json({ message: 'Server Error' });
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
  const { customerName, service, date, time, contactNumber, status } = req.body;

  try {
      const appointment = new Appointment({
          customerName,
          service,
          date,
          time,
          contactNumber,
          status,

      });

      const createdAppointment = await appointment.save();
      res.status(201).json(createdAppointment);
  } catch (error) {
      res.status(400).json({ message: 'Error creating appointment' });
  }
};

// Update an Appointment

const updateAppointment = async (req, res) => {
  const { customerName, service, date, time, contactNumber, status } = req.body;

  try {
      const appointment = await Appointment.findById(req.params.id);

      if (appointment) {
          appointment.customerName = customerName || appointment.customerName;
          appointment.service = service || appointment.service;
          appointment.date = date || appointment.date;
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
        const appointment = await Appointment.findById(req.params.id);
  
        if (appointment) {
            await appointment.remove();
            res.json({ message: 'Appointment removed' });
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
  };
  
  module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
  };

//   OLD Controller CODE-do not use

// old create appointment
// app.post("/api/appointment", async (req, res) => {
//   try {
//     const { name, email, service, date } = req.body;
//     const newAppointment = new Appointment({ name, email, service, date });
//     await newAppointment.save();
//     res.status(201).json({ new_appointment: newAppointment });
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         message: "Failed to create new appointment",
//         error: error.message,
//       });
//   }
// });



// Create Appointment

// router.post("/create", async (req, res) => {
//   try {
// const {name, quantity} = req.body
// const newAppointment = new Item ({name, quantity})
// await newAppointment.save()
// res.status(201).json({new_item: newItem,})
//   } catch(error) {
//   res.status(500).json({message: 'Failed to create new item', error: error.message})
// }
// })

// old Get New Appointment

// app.get("/appointment", async (req, res) => {
//   try {
//     const appointment = await Appointment.find();
//     res.status(200).json(appointment);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to get new appointment", error: error.message });
//   }
// });

// Get New Item

// router.get("/get", async (req, res) => {
//   try {
//     const item = await .find()
//     res.status(200).json(items)
//   } catch(error) {
//     res.status(500).json({message: 'Failed to get new item', error: error.message})
//   }

// })

// app.get("/api/appointment", async (req, res) => {
//   try {
//     const appointment = await appointment.find().sort({ date: 1 });
//     res.json(appointment);
//   } catch (error) {
//     console.error("Error fetching appointment:", error);
//     res.status(500).json({ message: "Error fetching appointment" });
//   }
// });


// OLD Update

// router.put("/update", async (req, res) => {
//   try {
//     const updatedItem = await Item.findByIdAndUpdate(req.body.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedItem) {
//       return res.status(404).json({ message: "Updated Item not found" });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to update item", error: error.message });
//   }
//   return res.status(404).json(updatedItem);
// });

// Delete appointment



// module.exports = Appointments;


// old Delete Item

// router.delete("/delete", async (req, res) => {
//   try {
//     const deletedItem = await Item.findByIdAndDelete(req.body.id);
//     if (!deletedItem) {
//       return res.status(404).json({ message: "Item not found" });
//     }
//     res.status(200).json({ message: "Item deleted" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to delete item", error: error.message });
//   }
// });

// module.exports = router;
