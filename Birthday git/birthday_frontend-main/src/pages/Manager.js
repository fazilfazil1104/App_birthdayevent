// src/pages/Manager.js
import React, { useState, useEffect } from 'react';
import { fetchStatistics } from '../api'; // Import the API function
import '../styles/Manager.css';

const Manager = () => {
  const [stats, setStats] = useState({ totalEvents: 0, totalUsers: 0 });

  useEffect(() => {
    const loadStatistics = async () => {
      const statsData = await fetchStatistics();
      setStats(statsData);
    };

    loadStatistics();
  }, []);

  return (
    <div className="manager-container">
      <h2>Manager Dashboard</h2>
      <p>Welcome to the Manager Dashboard. Here you can manage various aspects of the event planning.</p>
      <div className="manager-stats">
        <p>Total Events: {stats.totalEvents}</p>
        <p>Total Users: {stats.totalUsers}</p>
      </div>
      <div className="manager-actions">
        <button className="manager-btn">View Reports</button>
        <button className="manager-btn">Update Settings</button>
      </div>
    </div>
  );
};

export default Manager;
