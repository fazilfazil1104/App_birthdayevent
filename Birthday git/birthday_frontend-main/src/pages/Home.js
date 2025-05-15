// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import FindTopEventPlanners from '../components/FindTopEventPlanners';

const Home = ({ searchTerm }) => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Birthday Event Planner</h1>
        <p className="hero-subtitle">Your one-stop solution for organizing unforgettable birthday parties!</p>
        <div className="hero-buttons">
          <a href="/register" className="hero-cta-button">Get Started</a>
          {/* Removed Dashboard and Admin Sign-In buttons */}
        </div>
      </section>

      <FindTopEventPlanners searchTerm={searchTerm} /> {/* Pass searchTerm here */}

      {/* Other sections... */}
    </div>
  );
};

export default Home;
