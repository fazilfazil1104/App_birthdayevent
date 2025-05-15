// src/components/ActivityFeed.js
import React from 'react';
import '../styles/ActivityFeed.css';

const activities = [
  { id: 1, text: "Event 'Birthday Bash' scheduled for July 30th." },
  { id: 2, text: "New user 'Alice' registered." },
  { id: 3, text: "Event 'Summer Party' was updated." },
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
