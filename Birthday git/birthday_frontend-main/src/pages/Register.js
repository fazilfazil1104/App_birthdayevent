import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/users/', { name, email, password });
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <animated.div style={fadeIn} className="register-container">
      <h2 className="text-center mb-4 funky-heading">Join the Party!</h2>
      <div className="form-wrapper">
        <form onSubmit={handleRegister}>
          <div className="mb-3 funky-input">
            <label className="form-label funky-label">Name</label>
            <input
              type="text"
              className="form-control funky-input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 funky-input">
            <label className="form-label funky-label">Email</label>
            <input
              type="email"
              className="form-control funky-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 funky-input">
            <label className="form-label funky-label">Password</label>
            <input
              type="password"
              className="form-control funky-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block funky-button">Register</button>
        </form>
      </div>
    </animated.div>
  );
};

export default Register;
