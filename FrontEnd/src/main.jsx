// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import './pages/'

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
