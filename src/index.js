import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddProduct from "./components/addProduct";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import { Error404 } from "./components/Error404";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/addProduct" element={<AddProduct />} />
      {/* <Route exact path="/listProduct" element={<Table />} /> */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
