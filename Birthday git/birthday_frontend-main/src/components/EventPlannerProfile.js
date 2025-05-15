import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Ensure the correct path

// Import required Swiper modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

const EventPlannerProfile = () => {
  const planners = [
    {
      name: 'John Doe',
      title: 'Event Planner',
      description: 'Specializing in birthday parties and corporate events.',
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Jane Smith',
      title: 'Event Coordinator',
      description: 'Expert in organizing large-scale celebrations and weddings.',
      image: 'https://via.placeholder.com/300'
    },
    // Add more planners as needed
  ];

  return (
    <section className="event-planner-profile">
      <h2 className="section-title">Event Planner Profiles</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {planners.map((planner, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="planner-card">
              <img src={planner.image} alt={planner.name} className="planner-image" />
              <h3 className="planner-name">{planner.name}</h3>
              <p className="planner-title">{planner.title}</p>
              <p className="planner-description">{planner.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EventPlannerProfile;
