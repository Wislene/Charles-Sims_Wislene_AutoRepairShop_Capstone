const express = require('express');
const {
    renderForm,
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    going
} = require('../controllers/appointment');

// Yay, all functions are properly imported
// console.log({ renderForm, getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment, going }); 




const router = express.Router();

router.get('/appointments', renderForm); // Render form with all appointments 

router.get('/appointments/list', getAppointments); // Get all appointments 

router.get('/appointments/:id', getAppointmentById); // Get a single appointment by ID 

router.post('/appointments/create', createAppointment); // Create a new appointment

router.put('/appointments/:id?_method=PUT', updateAppointment); // Update an appointment

router.delete('/appointments/:id?_method=DELETE', deleteAppointment); // Delete an appointment

router.get('/appointments/seed', going); // Seed the database with sample data


// Old router routes
// router.get('/seed', going)

// Route to get all appointments
// router.get('/', getAppointments);

// Route to get a single appointment by ID
// router.get('/:id', getAppointmentById);

// Route to create a new appointment
// router.post('/', createAppointment);

// Route to update an existing appointment
// router.put('/:id', updateAppointment);

// Route to delete an appointment
// router.delete('/:id', deleteAppointment);



module.exports = router;





