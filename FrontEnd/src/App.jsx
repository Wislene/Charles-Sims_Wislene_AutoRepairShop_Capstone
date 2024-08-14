import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import Contact from "./pages/Contact";

import Appointment from "./pages/Appointment";
import "./components/Styles/App.css"; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

// import { useState } from 'react'

// import './App.css'

// function App() {

//   return (

//   )
// };

// export default App: can only use export default with mjs module. I received an error in my terminal.
// module.exports = App;
