import React from "react";
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyle: 'none',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ccc',
  margin: 0
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'background-color 0.2s ease-in-out'
};

const Navbar = () => {
        {/* Navigation Bar */}
    return(
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
          <li>
            <Link to="/services" style={linkStyle}>Services</Link>
          </li>
          <li>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </li>
        </ul>
      </nav>);
};

export default Navbar;