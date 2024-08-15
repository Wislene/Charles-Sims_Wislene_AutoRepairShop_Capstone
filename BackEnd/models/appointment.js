const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    customerName: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    contactNumber: { type: String, required: true },
    status: { type: String, default: "Scheduled" }, // e.g., Scheduled, Completed, Cancelled
  },
  {
    timestamps: true,
  }
);

// indexes:

// appointmentSchema.index({ customerName: 1 }); // Single field index on scending customer by Name
// appointmentSchema.index({ date: -1 }); // Single field index based on descending date
// appointmentSchema.index({ service: 1, status: 1 }); // Compound index on ascending both service and status

const Appointment = mongoose.model("Appointment", appointmentSchema);

// Synchronize the indexes with the MongoDB database

// Appointment.syncIndexes()
//   .then(() => console.log("Indexes are synchronized with the database"))
//   .catch((err) => console.error("Error synchronizing indexes:", err));

module.exports = Appointment;
