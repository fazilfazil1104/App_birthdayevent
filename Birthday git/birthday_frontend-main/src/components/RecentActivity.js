import React from 'react';

const RecentActivity = ({ activities }) => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <p>{activity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
