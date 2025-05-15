// src/components/EventCard.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EventCard.css'; // Ensure the path is correct

const EventCard = ({ title, date, description, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <h3 className="event-card-title">{title}</h3>
      <p className="event-card-date">{date}</p>
      <p className="event-card-description">{description}</p>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default EventCard;
