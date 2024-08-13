const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    customerName: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    contactNumber: { type: String, required: true },
    status: { type: String, default: 'Scheduled' }, // e.g., Scheduled, Completed, Cancelled
}, {
    timestamps: true
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;



