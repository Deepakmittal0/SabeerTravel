import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Hero.css';

const HeroWithForm = () => {
  const slides = [
    {
      image: '/images/slides5.avif',
      title: 'Delights of Kashmir | A Paradise on Earth',
      description: '6 days & 5 nights | 3D Srinagar 1D Pahalgam 2D Srinagar',
      price: 'INR 17,500 / Adult',
      oldPrice: 'INR 26,515'
    },
    {
      image: '/images/kashmir2.jpg',
      title: 'Highlights of Kashmir | FREE Shikara on Dal Lake',
      description: '5 days & 4 nights | 1D Pahalgam 4D Srinagar 3D  Shrinagar',
      price: 'INR 19,999 / Adult',
      oldPrice: 'INR 27,999'
    },
    {
      image: '/images/kashmir3.jpg',
      title: 'Heavenly Bliss | Kashmir Honeymoon Retreat',
      description: '6 days & 5 nights | 3D Srinagar 1D Pahalgam 2D Srinagar',
      price: 'INR 21,499 / Adult',
      oldPrice: 'INR 31,000'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/Sabeer/send',
        {
          firstName: name,
          phone,
          message
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (data.success) {
        toast.success(data.message || 'Registration successful');
        setName('');
        setPhone('');
        setMessage('');
        navigate('/success');
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  const FormComponent = (
    <div className="form-box p-4 rounded-4 form1 text-white bg-dark bg-opacity-75">
      <h4 className="mb-4 text-center">Save Up To 30% off</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="input-group mb-3">
          <span className="input-group-text bg-white">+91</span>
          <input
            type="text"
            className="form-control"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <textarea
          rows="3"
          className="form-control mb-3"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn1   w-100 fw-bold" disabled={loading}>
          {loading ? 'Sending...' : <>SUBMIT NOW <HiOutlineArrowNarrowRight /></>}
        </button>
      </form>
    </div>
  );

  return (
    <>
      <div className="hero-wrapper position-relative">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide position-relative">
              <img src={slide.image} alt={`Slide ${i}`} className="carousel-image" />

              <div className="carousel-overlay">
                <div className="hero-content container text-white d-flex flex-column flex-md-row align-items-center justify-content-between py-5">
                  <div className="hero-text mb-4 mb-md-0 col-md-6">
                    <h2 className="fw-bold display-5">{slide.title}</h2>
                    <p>{slide.description}</p>
                    <p className="price text-warning fs-4">
                      <del className="text-white me-2">{slide.oldPrice}</del> {slide.price}
                    </p>
                    <button className="btn btn1 w-100 p-2 px-4 fw-bold" onClick={() => window.location.href = 'tel:+918650657538'}>Connect With An Expert</button>
                  </div>
                  <div className="d-none d-md-block col-md-5">{FormComponent}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Form for Mobile - below banner */}
      <div className="container d-block d-md-none mt-4">{FormComponent}</div>
    </>
  );
};

export default HeroWithForm;
