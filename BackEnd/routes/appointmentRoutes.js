const express = require('express');
const {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    going
} = require('../controllers/Appointment');

const router = express.Router();

router.get('/seed', going)

// Route to get all appointments
router.get('/', getAppointments);

// Route to get a single appointment by ID
router.get('/:id', getAppointmentById);

// Route to create a new appointment
router.post('/', createAppointment);

// Route to update an existing appointment
router.put('/:id', updateAppointment);

// Route to delete an appointment
router.delete('/:id', deleteAppointment);



module.exports = router;
