// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// const pug = require("pug");
// const errorHandler = require("./Middlewares/errorHandler.js");
// const logRequests = require("./Middlewares/logRequests.js");
// const morgan = require("morgan");
// const path = require("path");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const appointmentRoutes = require("./routes/appointmentRoutes.js");
// const appointmentModel = require("./models/appointment.js");

// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride("_method"));
// app.use(errorHandler);
// app.use(logRequests);
// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

// // CORS Setup
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Adjust this to match my frontend's URL and port
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

// app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "public")));

// // Routes
// app.use("/api", appointmentRoutes);

// // app.post('/api/appointments/create', (req, res) => {
// //   const newAppointment = new appointmentModel(req.body);
// //   newAppointment.save()
// //     .then(appointment => res.json({ message: 'Appointment created successfully', appointment }))
// //     .catch(error => res.status(400).json({ message: 'Failed to create appointment', error }));
// // });

// // Mongoose Database Connection
// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected successfully");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB Database", error);
//   }
// }

// connectDB();

// // Error handling for JSON parsing
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//     console.error("Bad JSON");
//     return res
//       .status(400)
//       .send({ status: 400, message: "JSON Parsing Not Working" });
//   }
//   next();
// });

// // Route to render the homepage with appointment model
// app.get("/", async (req, res) => {
//   try {
//     let appointments = await appointmentModel.find({});
//     res.send(appointments); // This will render the appointment model file
//   } catch (error) {
//     res.status(500).send({ message: "Error retrieving appointments", error });
//   }
// });

// // Start the Server
// let basePort = process.env.PORT || 5001;

// function startServer(port) {
//   app
//     .listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     })
//     .on("error", (err) => {
//       if (err.code === "EADDRINUSE") {
//         console.log(`Port ${port} is already in use, trying another port.`);
//         startServer(port + 1);
//       } else {
//         console.error("Error starting server:", err);
//       }
//     });
// }

// startServer(basePort);

// NPM Packages Installed

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const pug = require("pug");
const errorHandler = require("./Middlewares/errorHandler.js");
const logRequests = require("./Middlewares/logRequests.js");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { fileURLToPath } = require("url");
const appointmentRoutes = require("./routes/appointmentRoutes.js");
const appointmentModel = require("./models/appointment.js");

// const { router: appointmentRouter } = require('./routes/appointmentRoutes.js'); This code gave me an error of appointment router not define so I had to remove the curly brackets for it to work.

const router = express.Router();

require("dotenv").config();

const app = express();

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(errorHandler);
app.use(logRequests);
app.set("view engine", "pug");
// app.set("views", "./Views");
app.set("views", path.join(__dirname, "views"));

//Using Morgan for logging requests
app.use(morgan("dev"));

// app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend's URL
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // This allows the server to accept cookies from the frontend
//   allowedHeaders: 'Content-Type,Authorization',
//   optionsSuccessStatus: 200 // For legacy browsers that choke on 204
// }));

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
//   allowedHeaders: 'Content-Type,Authorization' // Specify allowed headers

// CORS middleware configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with my frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // This allows the server to accept cookies from the frontend
    allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
    optionsSuccessStatus: 200, // Some legacy browsers might not work  on 204
  })
);

app.options("*", cors()); // This will allow preflight requests for all routes

app.use("/api", appointmentRoutes);

// Original Cors Middleware

// app.use(cors({
//   origin: "*",
//   credentials: true
// }));

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static("public")); Having an error about path

// Mongoose Database Connection

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MonGoDB Connected successfully");
  } catch (error) {
    console.error("Failed to connect to MONGODB Database", error);
  }
}

connectDB();

// app.use("/api", appointmentRoute); delete this one to have a more specic route to appointments.

// Filename and --dirname

const _filename = __filename;
// const __dirname = path.dirname("./server.js");

// Error handling for JSON parsing
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("Bad JSON");
    return res
      .status(400)
      .send({ status: 400, message: "JSON Parsing Not Working" });
  }
  next();
});

// Route to render the homepage with appointment model

app.get("/", async (req, res) => {
  let appointments = await appointmentModel.find({});
  res.send(appointments); // This will render the appointment model file
});

app.post("/api/appointments/create", (req, res) => {
  res.json({ message: "Appointment created successfully" });
});

// app.get("/", (req, res) => {
//   res.render("index");
// });

// Start the Server:
// comment: added this error handler below because I kept getting "EADDRINUSE" and had to keep switching ports.

let basePort = process.env.PORT || 5001; // Start running server from this port

function startServer(port) {
  app
    .listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`Port ${port} is already in use, trying another port.`);
        startServer(port + 1); // try the next port
      } else {
        console.error("Error starting server:", err);
      }
    });
}

startServer(basePort);

// NPM Packages Installed

// const express = require ('express');
// const mongoose = require('mongoose');
// const methodOverride = require("method-override");
// const pug = require("pug");
// const errorHandler = require('./Middlewares/errorHandler.js');
// const logRequests = require('./Middlewares/logRequests.js');
// const morgan = require('morgan');
// const path = require('path');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const { fileURLToPath } = require('url');
// const appointmentRoutes = require('./routes/appointmentRoutes.js');

// const appointmentModel = require('./models/appointment.js');
// const appointmentData= require('./SampleData/appointmentData.js');
// const controllersAppointment= require('./controllers/Appointment.js');

// const { router: appointmentRouter } = require('./routes/appointmentRoutes.js'); This code gave me an error of appointment router not define so I had to remove the curly brackets for it to work.

// const router = express.Router();

// require('dotenv').config();

// const app = express();

// Middleware

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride("_method"));
// app.use(errorHandler);
// app.use(logRequests);
// app.set("view engine", "pug");
// // app.set("views", "./Views");
// app.set("views", path.join(__dirname, "views"));

// Middleware for Logging incoming requests

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
//   res.status(404).json({ message: 'Route not found' });
// });

// middleware for the routes: review again part 1

// Come back to this- part 2

// app.post('/api/appointments/create', (req, res) => {
//   res.json({ message: 'Appointment created successfully' });
// });

// original cors set-up- kept getting eror when sending data from front end to back-end server

// app.use(cors());

// old corns to allow front data to go to back-end data but did not work-
// app.use(cors)
// origin: "*",

//   credentials: true;
// }));

// app.use(cors());

// Old cors code did not work:

// app.use(cors({
//   origin: 'http://localhost:5173', // Replace with your frontend's URL
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // This allows the server to accept cookies from the frontend
//   allowedHeaders: 'Content-Type,Authorization',
//   optionsSuccessStatus: 200 // For legacy browsers that might not work on 204
// }));

//Using Morgan for logging requests
// app.use(morgan("dev"));

// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static("public")); Having an error about path

// Api middleware

// app.use('/api', appointmentRoutes);

// Mongoose Database Connection

// async function connectDB() {
//   try {

//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MonGoDB Connected successfully");
//   } catch (error) {
//     console.error("Failed to connect to MONGODB Database", error);
//   }
// }

// connectDB();

// Read/render the homepage with appointment model:
// use ​ http://localhost:5001/

// app.get('/', async (req, res) => {
//     try {
//         const appointments = await getAppointment();
//         res.json({ success: true, data: appointments });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Server Error', error: error.message });
//     }
// });

//   res.send(appointments); // This will render the appointment model file (code courtesy of Jeff)
// });

// app.use("/api", appointmentRoute); delete this one to have a more specic route to appointments.

// Filename and --dirname

// const _filename = __filename;
// // const __dirname = path.dirname("./server.js");

// // Error handling for JSON parsing
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//     console.error("Bad JSON");
//     return res
//       .status(400)
//       .send({ status: 400, message: "JSON Parsing Not Working" });
//   }
//   next();
// });

// Start the Server:
// comment: added this error handler below because I kept getting "EADDRINUSE" and had to keep switching ports.

// let basePort = process.env.PORT || 5001;  // Start running server from this port

// function startServer(port) {
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   }).on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//       console.log(`Port ${port} is already in use, trying another port.`);
//       startServer(port + 1);  // try the next port
//     } else {
//       console.error('Error starting server:', err);
//     }
//   });
// }

// startServer(basePort);
