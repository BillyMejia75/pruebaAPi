import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import { CrearProducto } from "./pages/producto/CrearProducto";
import EditarProducto from "./pages/producto/EditarProducto";
import NavBar from "./components/NavBar";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/addProduct" element={<CrearProducto />} />
      <Route path="/editProduct/:id" element={<EditarProducto />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
