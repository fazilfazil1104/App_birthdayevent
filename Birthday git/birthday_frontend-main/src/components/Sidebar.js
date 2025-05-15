import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-dark p-3" style={{ width: '250px' }}>
      <h4 className="text-center">Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/events">
            <FaCalendarAlt /> Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/managers">
            <FaUsers /> Managers
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
