import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';  // adjust path according to your folder structure

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img src={logo} alt="App Logo" />
      </div>
      <div className="navbar-buttons">
        <button className="nav-btn" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="nav-btn" onClick={() => navigate('/Learning')}>
          Practice
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
