import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="success-page">
      <h2>Payment Successful!</h2>
      <p>Thank you for your payment. Your transaction was completed successfully.</p>
      <button className="home-button" onClick={handleHomeClick}>Go to Home</button>
    </div>
  );
};

export default SuccessPage;
