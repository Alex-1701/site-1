import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Login, Main } from "./pages";
import { adminPage, loginPage, mainPage } from "./services";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path={mainPage} element={<Main />} />
        <Route path={loginPage} element={<Login />} />
        <Route path={adminPage} element={<Main />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
