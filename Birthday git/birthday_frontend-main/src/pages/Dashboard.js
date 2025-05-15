// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [planners, setPlanners] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://127.0.0.1:8000/api/users/');
        setUsers(usersResponse.data);

        const plannersResponse = await axios.get('http://127.0.0.1:8000/api/planners/');
        setPlanners(plannersResponse.data);

        const bookingsResponse = await axios.get('http://127.0.0.1:8000/api/bookings/');
        setBookings(bookingsResponse.data);

        const paymentsResponse = await axios.get('http://127.0.0.1:8000/api/payments/');
        setPayments(paymentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Current Users</h3>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} ({user.email})</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Event Planners</h3>
          <ul>
            {planners.map(planner => (
              <li key={planner.id}>{planner.name}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Bookings</h3>
          <ul>
            {bookings.map(booking => (
              <li key={booking.id}>
                {booking.name} - {booking.date} ({booking.details})
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Payments</h3>
          <ul>
            {payments.map(payment => (
              <li key={payment.id}>
                {payment.amount} - {payment.success ? 'Success' : 'Failed'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
