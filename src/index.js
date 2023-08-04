import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav/Nav';
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Main/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);
