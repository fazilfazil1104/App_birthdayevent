import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/FindTopEventPlanners.css';
import { Link } from 'react-router-dom';

const FindTopEventPlanners = ({ searchTerm }) => {
  const [planners] = useState([
    { id: 1, name: 'Seo-Jin', title: 'Event Planner', description: 'Specializing in birthday parties and corporate events.', image: '/image/seo.jpg' },
    { id: 2, name: 'Rajesh', title: 'Event Coordinator', description: 'Expert in organizing large-scale celebrations and weddings.', image: '/image/jaya.jpg' },
    { id: 3, name: 'Tate A', title: 'Birthday Specialist', description: 'Creative and detailed-oriented birthday event planner.', image: '/image/baba.jpg' },
    { id: 4, name: 'Leo', title: 'Event Consultant', description: 'Provides expert advice and planning services for diverse events.', image: '/image/doop.jpg' },
    { id: 5, name: 'Sarah Wilson', title: 'Celebration Organizer', description: 'Focuses on creating personalized and memorable celebrations.', image: '/image/business-conference_c46de6e6-3916-11e6-9ae1-15e7618d0e32.jpg' },
    { id: 6, name: 'David Lee', title: 'Event Designer', description: 'Specializes in designing unique and stylish events.', image: '/image/brad_pitt.jpg' },
    { id: 7, name: 'Ananthan', title: 'Party Planner', description: 'Experienced in organizing fun and engaging birthday parties.', image: '/image/ananth.jpg' },
    { id: 8, name: 'Tripti', title: 'Event Coordinator', description: 'Ensures smooth execution of events with a keen eye for detail.', image: '/image/tripti.jpg' }
  ]);

  const filteredPlanners = planners.filter(planner => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      (planner.name && planner.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (planner.title && planner.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
      (planner.description && planner.description.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="find-top-event-planners">
      <h2 className="section-title">Find Top Event Planners</h2>
      <p className="section-description">
        Discover a curated selection of highly skilled event planners who specialize in creating memorable birthday celebrations. Our platform allows you to browse through detailed profiles of event planners that include their qualifications, past work, areas of expertise, and client reviews. View their portfolios to see examples of their previous events and ensure you choose a planner who perfectly matches your vision and requirements.
      </p>
      <Slider {...settings}>
        {filteredPlanners.map((planner) => (
          <div key={planner.id} className="planner-card">
            <img src={planner.image} alt={planner.name} className="planner-image" />
            <h3 className="planner-name">{planner.name}</h3>
            <p className="planner-title">{planner.title}</p>
            <p className="planner-description">{planner.description}</p>
            <Link to={`/booking/${planner.id}`}>
              <button className="book-button">Book Now</button>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FindTopEventPlanners;
