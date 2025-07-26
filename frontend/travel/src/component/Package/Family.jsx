import {React,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaWhatsapp} from 'react-icons/fa';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Honey.css';
import EnquiryModal from '../../pages/modal/FormModal';
// import { useState } from 'react';
// 
// const features = [
//   { label: 'Hotel', icon: '🏨' },
//   { label: 'Meal', icon: '🍽️' },
//   { label: 'Transfer', icon: '🚗' },
// ];

const StarRating = ({ rating, reviews }) => (
  
  <span className="text-warning">
    {'★'.repeat(Math.floor(rating))} <span className="text-muted">({reviews})</span>
  </span>
);

const imageCarouselOptions = {
  items: 1,
  loop: true,
  autoplay: false,
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
    images: [
'/images/fam1.avif',
'/images/fam2.avif',
'/images/fam3.avif'
    ],
    days: 6,
    nights: 5,
    rating: 4.9,
    reviews: 261,
    locations: '3D Srinagar • 1D Pahalgam • 2D Srinagar',
    price: 20000,
    original: 28996,
    save: 30
  },
  {
    id: 2,
    title: 'Heavenly Bliss | Kashmir Honeymoon Retreat',
    images: [
'/images/fam4.avif',
'/images/fam5.avif',
'/images/fam6.avif'
    ],
    days: 5,
    nights: 4,
    rating: 4.3,
    reviews: 737,
    locations: '1D Pahalgam • 4D Srinagar',
    price: 18000,
    original: 27692,
    save: 38
  },

    {
    id: 2,
    title: 'Heavenly Bliss | Kashmir Honeymoon Retreat',
    images: [
'/images/fam7.avif',
'/images/fam8.avif',
'/images/fam9.avif'
    ],
    days: 5,
    nights: 4,
    rating: 4.3,
    reviews: 737,
    locations: '1D Pahalgam • 4D Srinagar',
    price: 18000,
    original: 27692,
    save: 35,
    
  },
];

const PackageCard = ({ pkg , onCallClick }) => (
  <Card className="honeymoon-card mb-4 mr-2">
    <div className="carousel-wrapper">
      <OwlCarousel className="owl-theme" {...imageCarouselOptions}>
        {pkg.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={pkg.title}
            className="card-img-top"
          />
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
      <Row className="text-center ">
        {/* {features.map((f, i) => (
          <Col key={i}>
            <div className="fs-4">{f.icon}</div>
            <small>{f.label}</small>
          </Col>
        ))} */}
      </Row>
      <div className="mb-3 fw-bold">Price
 <span className="fw-bold fs-5  ">: ₹ On Demand</span>{' '}
        {/* <span className="text-decoration-line-through text-muted">₹{pkg.original.toLocaleString()}</span>{' '} */}
        <span className="text-success coupon-badge small ">Save {pkg.save}%</span>
      </div>



<div className="d-flex row g-2">
  {/* WhatsApp Button */}
  <div className="col-3 align-item-center">
    <Button
      variant="success"
      className="w-100 fw-semibold" 
      onClick={() => window.open('https://wa.me/918650657538', '_blank')} // replace with your number
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

const HoneymoonSpecial = () => {
  const [showModal, setShowModal] = useState(false);
return(
  <section className="py-3 bg-light">
    <Container>
      <div className=" mb-4">
        <h2 className="fw-bold">Family Special</h2>
        <p className="text-muted">Tailor-Made Family Just For You</p>
      </div>
<Row className="g-4">
  {packages.map(pkg => (
    <Col key={pkg.id} md={6} lg={4}>
 <PackageCard pkg={pkg} onCallClick={() => setShowModal(true)} />
    </Col>
  ))}
</Row>

    </Container>
      <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
  </section>
)
};

export default HoneymoonSpecial;
