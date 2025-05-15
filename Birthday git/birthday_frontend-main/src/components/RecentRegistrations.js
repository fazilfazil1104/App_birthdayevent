// src/components/RecentRegistrations.js
import React from 'react';
import '../styles/RecentRegistrations.css';

const registrations = [
  { id: 1, name: 'Alice Johnson', date: 'July 20, 2024' },
  { id: 2, name: 'Bob Smith', date: 'July 22, 2024' },
  { id: 3, name: 'Carol Williams', date: 'July 24, 2024' },
];

const RecentRegistrations = () => {
  return (
    <div className="recent-registrations">
      <h3>Recent Registrations</h3>
      <ul>
        {registrations.map(reg => (
          <li key={reg.id}>
            <strong>{reg.name}</strong><br />
            <span>{reg.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentRegistrations;
