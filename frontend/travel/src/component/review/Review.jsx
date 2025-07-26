import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { FaStar } from 'react-icons/fa';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Review.css';

const reviews = [
  {
    name: 'Shreya Bhowmick',
    rating: 5,
    text: 'Kashmir – A Journey to Remember Made Perfect by the People Who Matter - This...',
    avatar: '/images/rev1.jpg',
    images: ['/images/rev1.jpg', '/images/rev2.jpg', '/images/rev3.jpg', '/images/rev4.jpg'],
  },
  {
    name: 'Molina Bose',
    rating: 4.5,
    text: 'The people of Kashmir and its breathtaking beauty just Worth visiting',
    avatar: '/images/rev2.jpg',
    images: ['/images/rev2.jpg', '/images/rev3.jpg', '/images/rev4.jpg', '/images/rev1.jpg'],
  },
  {
    name: 'Amit Verma',
    rating: 4,
    text: 'An unforgettable trip! The snow-covered mountains were stunning.',
    avatar: '/images/rev3.jpg',
    images: ['/images/rev3.jpg', '/images/rev4.jpg', '/images/rev4.jpg', '/images/rev1.jpg'],
  },
  {
    name: 'Sana Kapoor',
    rating: 4.3,
    text: 'Everything was perfect! The guide, the hotel, the views!',
    avatar: '/images/rev4.jpg',
    images: ['/images/rev1.jpg', '/images/rev2.jpg', '/images/rev4.jpg', '/images/rev3.jpg'],
  },
  {
    name: 'Rajeev Nair',
    rating: 4,
    text: 'Kashmir is heaven! Loved every bit of it.',
    avatar: '/images/rev4.jpg',
    images: ['/images/rev4.jpg', '/images/rev3.jpg', '/images/rev2.jpg', '/images/rev1.jpg'],
  }
];

const Testimonials = () => {
  return (
    <div className="container my-5">
<h3 className=" text-md-start text-center">
            People Love Our <span className="text-warning fw-bold">Kashmir</span> Tours
          </h3>
    
      <div className="row align-items-start ">
        {/* Left Column */}
        <div className="col-md-4 text-center text-md-start mt-5 mb-4 mb-md-0">
          <div className="mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={28} color="#00B26D" className="me-1" />
            ))}
          </div>
          <h2 className="text-success fw-bold display-4">4.5</h2>
          <p className="mb-1">
            <a href="#" className="text-success fw-semibold text-decoration-underline">
              10k+ Kashmir Reviews
            </a>
          </p>
          <p className="text-muted">by customers from <strong>20+ states</strong></p>
        </div>

        {/* Right Column */}
        <div className="col-md-8">
          
<div className="review-carousel">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={15}
            nav
            dots={true}
            autoplay
            autoplayTimeout={4000}
            responsive={{
              0: { items: 1 },
              768: { items: 2 }
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="card shadow-sm p-3 rounded-4">
                <div className="d-flex align-items-center mb-2">
                  <img src={review.avatar} alt="avatar" className="rounded-circle avtar me-2" style={{width:'75px',height:'72px'}}  height="40" />
                  <div>
                    <h6 className="mb-0 fw-bold">{review.name}</h6>
                    <span className="text-success fw-semibold">★ {review.rating}</span>
                  </div>
                </div>
                <p className="text-muted small">{review.text}</p>
                <div className="d-flex gap-2 mt-2">
                  {review.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`review-${i}`}
                      width={60}
                      height={60}
                      className="rounded"
                      style={{ objectFit: 'cover' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
