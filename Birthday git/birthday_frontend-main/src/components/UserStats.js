// src/components/UserStats.js
import React from 'react';
import '../styles/UserStats.css';

const userStats = {
  activeUsers: 120,
  newSignUps: 15,
  totalUsers: 350
};

const UserStats = () => {
  return (
    <div className="user-stats">
      <h3>User Statistics</h3>
      <div className="stats-item">
        <span>Active Users:</span>
        <strong>{userStats.activeUsers}</strong>
      </div>
      <div className="stats-item">
        <span>New Sign-Ups:</span>
        <strong>{userStats.newSignUps}</strong>
      </div>
      <div className="stats-item">
        <span>Total Users:</span>
        <strong>{userStats.totalUsers}</strong>
      </div>
    </div>
  );
};

export default UserStats;
