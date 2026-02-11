import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import "aos/dist/aos.css"; // If using AOS animations

// Initialize AOS if using
import AOS from "aos";
AOS.init({
  duration: 800,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
