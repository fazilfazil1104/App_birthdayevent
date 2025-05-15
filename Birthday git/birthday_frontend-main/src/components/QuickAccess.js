import React from 'react';
import { Link } from 'react-router-dom';

const QuickAccess = () => {
  return (
    <div className="quick-access">
      <h3>Quick Access</h3>
      <div className="quick-access-buttons">
        <Link to="/create-event" className="btn btn-primary">Create New Event</Link>
        <Link to="/manage-events" className="btn btn-secondary">Manage Events</Link>
      </div>
    </div>
  );
};

export default QuickAccess;
