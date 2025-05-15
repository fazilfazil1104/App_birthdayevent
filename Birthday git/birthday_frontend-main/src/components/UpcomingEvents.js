import React from 'react';

const UpcomingEvents = ({ events }) => {
  return (
    <div className="upcoming-events">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h4>{event.title}</h4>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
