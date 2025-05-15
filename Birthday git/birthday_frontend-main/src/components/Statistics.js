import React from 'react';

const Statistics = ({ stats }) => {
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <div className="stat-item">
        <p>Total Events: {stats.totalEvents}</p>
      </div>
      <div className="stat-item">
        <p>Total Attendees: {stats.totalAttendees}</p>
      </div>
      {/* Add more statistics as needed */}
    </div>
  );
};

export default Statistics;
