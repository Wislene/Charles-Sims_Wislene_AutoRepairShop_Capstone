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

router.post('/appointments/:id?_method=PUT', updateAppointment); // Update an appointment

router.post('/appointments/:id?_method=DELETE', deleteAppointment); // Delete an appointment

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







// const express = require('express');
// const {
//     renderForm,
//     getAppointments,
//     getAppointmentById,
//     createAppointment,
//     updateAppointment,
//     deleteAppointment,
//     going
// } = require('../controllers/Appointment');

// const router = express.Router();

// Read/render the homepage with appointment model:
// use ​ http://localhost:5001/
 
    // router.get('/', async (req, res) => {
    //     try {
    //         const appointments = await getAppointments();
    //         res.json({ success: true, data: appointments });
    //     } catch (error) {
    //         res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    //     }
    // });

//   res.send(appointments); // This will render the appointment model file (code courtesy of Jeff)
// });

// Create new appointment/Save Data to MongoDB
// use http://localhost:5001/api/appointments/create

// Sample DataModel to use in postman/vscode-thunderclient:
// {customerName: jon smith,
//   service: brake not working,
//   date: 07/15/2024,
//   time: { 10:10am },
//   contactNumber: 890-786-5466,
//   status: Scheduled}


    // router.post('/api/appointments/create', async (req, res) => {
    //     try {
    //         const newAppointment = await createAppointment(req);
    //         res.status(201).json({ success: true, message: "Data saved successfully", data: newAppointment });
    //     } catch (error) {
    //         res.status(400).json({ success: false, message: 'Error saving appointment', error: error.message });
    //     }
    // });

 // Update an existing appointment
//http://localhost:5001/api/appointments/update/id

    // router.put('/api/appointments/:id', async (req, res) => {
    //     try {
    //         const updatedAppointment = await updateAppointment(req.params.id, req.body);
    //         if (!updatedAppointment) {
    //             return res.status(404).json({ success: false, message: 'Appointment not found' });
    //         }
    //         res.json({ success: true, message: "Data updated successfully", data: updatedAppointment });
    //     } catch (error) {
    //         res.status(400).json({ success: false, message: 'Error updating appointment', error: error.message });
    //     }
    // });


// delete an appointment: 
// http://localhost:5001/api/appointments/delete/id
   
    // router.delete('/api/appointments/:id', async (req, res) => {
    //     try {
    //         const deletedAppointment = await deleteAppointment(req.params.id);
    //         if (!deletedAppointment) {
    //             return res.status(404).json({ success: false, message: 'Appointment not found' });
    //         }
    //         res.json({ success: true, message: "Data deleted successfully", data: deletedAppointment });
    //     } catch (error) {
    //         res.status(400).json({ success: false, message: 'Error deleting appointment', error: error.message });
    //     }
    // });

// Seed the database with sample data
//  http://localhost:5001/api/appointments/seed

//     router.get('/api/appointments/seed', async (req, res) => {
//         try {
//             await going();
//             res.json({ message: 'Database seeded with sample data' });
//         } catch (error) {
//             res.status(500).json({ message: 'Server Error', error: error.message });
//         }
//     });


// module.exports = router;




// const express = require('express');
// const {
//     renderForm,
//     getAppointments,
//     getAppointmentById,
//     createAppointment,
//     updateAppointment,
//     deleteAppointment,
//     going
// } = require('../controllers/Appointment');

// Yay, all functions are properly imported
// console.log({ renderForm, getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment, going }); 

// Model set-up example to use in localhost: http://localhost:5001/api/appointments/create
// {
//     "customerName": "Jane Doe",
//     "service": "Oil Change",
//     "date": "2024-08-22",
//     "time": "11:00 AM",
//     "contactNumber": "987-654-3210",
//     "status": "Completed"
// }

// const router = express.Router();

// router.get('/appointments', renderForm); // Render form with all appointments 

// router.get('/appointments/list', getAppointments); // Get all appointments 

// router.get('/appointments/:id', getAppointmentById); // Get a single appointment by ID 

// router.post('/appointments/create', createAppointment); // Create a new appointment


// router.put('/appointments/:id', updateAppointment);

// Old update-did-not work
// router.post('/appointments/:id?_method=PUT', updateAppointment); // Update an appointment

// router.delete('/appointments/:id', deleteAppointment); // Delete an appointment

// Old delete route
// router.post('/appointments/:id?_method=DELETE', deleteAppointment); // Delete an appointment

// router.get('/appointments/seed', going); // Seed the database with sample data

// module.exports = router;

