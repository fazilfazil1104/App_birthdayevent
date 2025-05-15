import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';
import '../styles/AdminSignIn.css'; // Ensure the path is correct

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use axios to fetch data
      const response = await axios.get('http://127.0.0.1:8000/api/users/  ');
      const admins = response.data; // Use response.data directly
      const admin = admins.find((admin) => admin.email === email && admin.password === password);

      if (admin) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="admin-signin-container">
      <h1 className="admin-signin-title">Admin Sign-In</h1>
      <form className="admin-signin-form" onSubmit={handleSubmit}>
        <label className="admin-signin-label" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="admin-signin-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="admin-signin-label" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="admin-signin-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="admin-signin-error">{error}</p>}
        <button type="submit" className="admin-signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default AdminSignIn;
