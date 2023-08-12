import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
