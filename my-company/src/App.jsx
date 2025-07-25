import React from 'react'
import {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    //  BrowserRouter wraps your entire routing application
    <Router>
      {/* Include the Navbar component here so it appears on all pages */}
      <Navbar />

      <div style={{ padding: '20px' }}>
        {/* Routes defines your routing logic */}
        <Routes>
          {/* Define Route for each of the four pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

