// src/components/EventCount.js
import React from 'react';
import PropTypes from 'prop-types'; // Add PropTypes for type checking

const EventCount = ({ data }) => {
  // Default values if data is not available
  const { totalEvents = 1350, upcomingEvents = 20, completedEvents = 1330} = data || {};

  return (
    <div className="card event-count">
      <h3 className="card-title">Event Count</h3>
      <p>Total Events: {totalEvents}</p>
      <p>Upcoming Events: {upcomingEvents}</p>
      <p>Completed Events: {completedEvents}</p>
    </div>
  );
};

// Type-checking for the props
EventCount.propTypes = {
  data: PropTypes.shape({
    totalEvents: PropTypes.number,
    upcomingEvents: PropTypes.number,
    completedEvents: PropTypes.number
  })
};

export default EventCount;
