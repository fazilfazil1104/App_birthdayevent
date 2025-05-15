import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const { plannerId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.details) {
      alert('Please fill out all fields.');
      return;
    }
    alert(formData.email)
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/bookings/', {
        ...formData,
        plannerId: plannerId // Ensure this matches the field name in your Django model
      });

      console.log('Response:', response);

      if (response.status === 201) {
        alert('Booking submitted successfully!');
        navigate('/payment');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          details: ''
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again.');
    }
};


  return (
    <div className="booking-page">
      <h2>Book Your Event Planner</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Event Details:</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;
