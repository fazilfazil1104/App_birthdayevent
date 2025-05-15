import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Ensure the path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users/');
      const users = response.data;
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        dispatch(setUser(user));
        navigate('/'); 
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <animated.div style={fadeIn} className="login-container">
      <h2 className="text-center mb-4 funky-heading">Welcome Back!</h2>
      <div className="form-wrapper">
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="btn btn-primary btn-block funky-button">Login</button>
        </form>
      </div>
    </animated.div>
  );
};

export default Login;
