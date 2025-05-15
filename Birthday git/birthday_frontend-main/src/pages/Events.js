// src/pages/Events.js
import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../api'; // Import the API function
import '../styles/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const eventsData = await fetchEvents();
      setEvents(eventsData);
    };

    loadEvents();
  }, []);

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <ul className="events-list">
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index} className="event-item">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </li>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </ul>
    </div>
  );
};

export default Events;
