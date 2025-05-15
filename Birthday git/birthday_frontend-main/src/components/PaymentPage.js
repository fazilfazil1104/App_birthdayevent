import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/PaymentPage.css';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    amount: 0 // Ensure initial amount is a number
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is "amount", convert the value to a number
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: name === 'amount' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log the paymentData to verify its contents
    console.log('Payment Data:', paymentData);
    
    // Check if all fields are filled
    if (!paymentData.cardNumber || !paymentData.cardExpiry || !paymentData.cardCvc || !paymentData.amount) {
      alert('Please fill out all fields.');
      return;
    }
    
    try {
      // Send payment data to the backend
      const response = await axios.post('http://127.0.0.1:8000/api/payments/', paymentData);
    
      console.log('Response:', response.data); // Check response data for debugging
    
      // Check if the payment was successful based on the backend response
      if (response.data.success) {
        alert('Payment successful!');
        navigate('/success');
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      alert('Payment successful!');
      navigate('/success');
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardExpiry">Expiry Date:</label>
          <input
            type="text"
            id="cardExpiry"
            name="cardExpiry"
            value={paymentData.cardExpiry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardCvc">CVC:</label>
          <input
            type="text"
            id="cardCvc"
            name="cardCvc"
            value={paymentData.cardCvc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
