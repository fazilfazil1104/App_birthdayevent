import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const { plannerId } = useParams();
  const navigate = useNavigate();

  const [planner, setPlanner] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    details: ''
  });
  const [reviewData, setReviewData] = useState({
    reviewer: '',
    rating: '',
    comment: ''
  });

  useEffect(() => {
    const fetchPlannerDetails = async () => {
      try {
        const plannerResponse = await axios.get(`http://127.0.0.1:8000/api/planners/${plannerId}/`);
        setPlanner(plannerResponse.data);

        const reviewsResponse = await axios.get(`http://127.0.0.1:8000/api/reviews/?plannerId=${plannerId}`);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error('Error fetching planner details or reviews:', error);
      }
    };
    fetchPlannerDetails();
  }, [plannerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Form data before submission:", formData);
  
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.details) {
      alert('Please fill out all fields.');
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/bookings/', {
        ...formData,
        plannerId: plannerId
      });
  
      console.log("Response:", response);
  
      if (response.status === 201) {
        alert('Booking submitted successfully!');
        navigate(`/payment?plannerId=${plannerId}`);
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
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!reviewData.reviewer || !reviewData.rating || !reviewData.comment) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reviews/', {
        ...reviewData,
        planner: plannerId
      });

      if (response.status === 201) {
        alert('Review submitted successfully!');
        setReviews([...reviews, response.data]);
        setReviewData({
          reviewer: '',
          rating: '',
          comment: ''
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="booking-page">
      {planner && (
        <div className="planner-details">
          <img src={planner.image} alt={planner.name} />
          <h3>{planner.name}</h3>
          <p>{planner.title}</p>
          <p>{planner.description}</p>
          <div className="rating">Rating: {planner.rating} ⭐</div>
        </div>
      )}
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

      <h2>Submit a Review</h2>
      <form className="review-form" onSubmit={handleReviewSubmit}>
        <div className="form-group">
          <label htmlFor="reviewer">Name:</label>
          <input
            type="text"
            id="reviewer"
            name="reviewer"
            value={reviewData.reviewer}
            onChange={handleReviewChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={reviewData.rating}
            onChange={handleReviewChange}
            required
            min="1"
            max="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={reviewData.comment}
            onChange={handleReviewChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Review</button>
      </form>

      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <h4>{review.reviewer}</h4>
            <div className="rating">Rating: {review.rating} ⭐</div>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default BookingPage;
