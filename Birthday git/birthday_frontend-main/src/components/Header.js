import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaUserShield } from 'react-icons/fa';
import '../styles/Header.css'; 

const Header = ({ setSearchTerm }) => { 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <FaHome className="logo-icon" />
          <span className="logo-text">Birthday Event Planner</span>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/login" className="nav-link">
          <FaSignInAlt className="nav-icon" />
          <span className="nav-text">Login</span>
        </Link>
        <Link to="/admin-login" className="nav-link">
          <FaUserShield className="nav-icon" />
          <span className="nav-text">Admin Login</span>
        </Link>
        <Link to="/register" className="nav-link">
          <FaUserPlus className="nav-icon" />
          <span className="nav-text">Register</span>
        </Link>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search planners..."
            className="search-input"
            onChange={handleSearchChange} // Trigger on input change
          />
          <button className="search-button">Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
