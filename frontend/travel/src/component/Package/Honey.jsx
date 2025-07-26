import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import EnquiryModal from '../../pages/modal/FormModal';
import './Honey.css';

const StarRating = ({ rating, reviews }) => (
  <span className="text-warning">
    {'★'.repeat(Math.floor(rating))}{' '}
    <span className="text-muted">({reviews})</span>
  </span>
);

// Owl Carousel settings
const imageCarouselOptions = {
  items: 1,
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  dots: false,
  navText: [
    '<span class="carousel-nav left">&#10094;</span>',
    '<span class="carousel-nav right">&#10095;</span>',
  ],
};

const packages = [
  {
    id: 1,
    title: 'Kashmir Retreat | Romantic Escape To Doodhpathri',
    images: ['/images/honey5.jpg', '/images/honey8.jpg', '/images/honey9.jpg'],
    days: 6,
    nights: 5,
    rating: 4.9,
    reviews: 261,
    locations: '3D Srinagar • 1D Pahalgam • 2D Srinagar',
    price: 20000,
    original: 28996,
    save: 35
  },
  {
    id: 2,
    title: 'Heavenly Bliss | Kashmir Honeymoon Retreat',
    images: ['/images/honey1.jpg', '/images/honey4.jpg', '/images/honey5.jpg'],
    days: 5,
    nights: 4,
    rating: 4.3,
    reviews: 737,
    locations: '1D Pahalgam • 4D Srinagar',
    price: 18000,
    original: 27692,
    save: 36
  },
  {
    id: 3,
    title: 'Snowy Escape | Winter Romance in Gulmarg',
    images: ['/images/honey2.jpg', '/images/honey6.jpg', '/images/honey9.jpg'],
    days: 5,
    nights: 4,
    rating: 4.3,
    reviews: 737,
    locations: '2D Gulmarg • 3D Srinagar',
    price: 18000,
    original: 27692,
    save: 30
  },
];

// Package Card
const PackageCard = ({ pkg, onCallClick }) => (
  <Card className="honeymoon-card mb-4 mr-2" id='honey'>
    <div className="carousel-wrapper">
      <OwlCarousel className="owl-theme" {...imageCarouselOptions}>
        {pkg.images.map((src, index) => (
          <img key={index} src={src} alt={pkg.title} className="card-img-top" />
        ))}
      </OwlCarousel>
    </div>
    <Card.Body>
      <div className="d-flex justify-content-between text-muted small mb-2">
        <span>{pkg.days} Days & {pkg.nights} Nights</span>
        <StarRating rating={pkg.rating} reviews={pkg.reviews} />
      </div>
      <Card.Title className="fw-bold text-dark">{pkg.title}</Card.Title>
      <Card.Text className="text-muted small">{pkg.locations}</Card.Text>

      <div className="mb-3 fw-bold">Price
        {/* <span className="fw-bold fs-5 text-dark">Price: ₹{pkg.price.toLocaleString()}</span>{' '} */}
        <span className="fw-bold fs-5  ">: ₹ On Demand</span>{' '}
        {/* <span className="text-decoration-line-through text-muted">₹{pkg.original.toLocaleString()}</span>{' '} */}
        <span className="text-success coupon-badge small">Save {pkg.save}%</span>
      </div>

      <div className="d-flex row g-2">
        {/* WhatsApp Button */}
        <div className="col-3">
          <Button
            variant="success"
            className="w-100 fw-semibold"
            onClick={() => window.open('https://wa.me/918650657538', '_blank')}
          >
            <FaWhatsapp className="me-1" style={{fontSize:'22px'}} />
          </Button>
        </div>

        {/* Call Button */}
        <div className="col-9 text-light btn1" style={{ backgroundColor: '#f37002', borderRadius: '5px' }}>
          <Button
            className="w-100 btn1 fw-semibold" 
            style={{ color: 'white',border:'none' }}
            onClick={onCallClick}
          >
            Request Callback
          </Button>
        </div>
      </div>
    </Card.Body>
  </Card>
);

// Main Component
const HoneymoonSpecial = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="mb-5">
          <h2 className="fw-bold">Honeymoon Special</h2>
          <p className="text-muted">Tailor-Made Honeymoons Just For You</p>
        </div>

        <Row className="g-4">
          {packages.map(pkg => (
            <Col key={pkg.id} xs={12} sm={6} md={4}>
              <PackageCard pkg={pkg} onCallClick={() => setShowModal(true)} />
            </Col>
          ))}
        </Row>
      </Container>

      <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default HoneymoonSpecial;
