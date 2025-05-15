// src/components/Notifications.js
import React from 'react';
import '../styles/Notifications.css';

const notifications = [
  { id: 1, message: 'Event scheduling has been updated.' },
  { id: 2, message: 'New feature added to the platform.' },
  { id: 3, message: 'System maintenance scheduled for August 5.' },
];

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
