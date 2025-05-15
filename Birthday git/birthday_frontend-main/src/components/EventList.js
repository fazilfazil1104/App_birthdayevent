// src/components/EventList.js
import React from 'react';
import '../styles/EventList.css';

const events = [
  { id: 1, name: 'Birthday Bash', date: 'July 30, 2024', location: 'Central Park' },
  { id: 2, name: 'Summer Party', date: 'August 15, 2024', location: 'Beach Club' },
  { id: 3, name: 'Corporate Gala', date: 'September 10, 2024', location: 'Grand Hotel' },
];

const EventList = () => {
  return (
    <div className="event-list">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong><br />
            <span>{event.date}</span><br />
            <span>{event.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
