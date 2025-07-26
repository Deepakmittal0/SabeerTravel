import {React,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaHotel, FaBinoculars, FaUtensils, FaCar ,FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './Package.css';
import EnquiryModal from '../../pages/modal/FormModal';
import { Button } from 'react-bootstrap';

 // Make sure to define icon color and overlay here

const packages = [
  {
    id: 1,
    image: '/images/pack1.jpg',
    title: 'Romantic Escape To Kashmir | FREE Excursion To Gulmarg',
    rating: '4.5 (2.2k)',
    duration: '6 days & 5 nights',
    price: 'INR 21,000',
    oldPrice: 'INR 38,182',
    save: '38%',
    features: ['3D Srinagar', '1D Pahalgam', '2D Srinagar'],
    tag: '',
  },
  {
    id: 2,
    image: '/images/pack2.jpg',
    title: 'Best Of Kashmir | FREE Shikara Ride',
    rating: '4.4 (1.3k)',
    duration: '6 days & 5 nights',
    price: 'INR 17,500',
    oldPrice: 'INR 26,515',
    save: ' 30%',
    features: ['3D Srinagar', '1D Pahalgam', '2D Srinagar'],
    tag: '',
  },
  {
    id: 3,
    image: '/images/pack3.jpg',
    title: 'Highlights Of Kashmir | FREE Shikara Ride On Dal Lake',
    rating: '4.4 (2.4k)',
    duration: '6 days & 5 nights',
    price: 'INR 19,500',
    oldPrice: 'INR 31,452',
    save: '26%',
    features: ['3D Srinagar', '1D Pahalgam', '2D Srinagar'],
    tag: '150 booked in last 1 week',
  },
];

const StaffHandpicked = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="staff-handpicked container my-5" id='package'>
      <h3>
        Staff <span className="text-warning fw-bold">Handpicked ✨</span>
      </h3>
      <p className="text-muted">Curated with expertise</p>
<div className="review-carousel">
<OwlCarousel
  className="owl-theme"
  loop
  margin={20}
  nav
  autoplay
  autoplayTimeout={3000}
  autoplayHoverPause={true}
  dots={true}
  responsive={{
    0: { items: 1.2 },
    768: { items: 2 },
    992: { items: 3 },
  }}
>

        {packages.map((pkg) => (
          <div className="item" key={pkg.id}>
            <div className="card text-white rounded overflow-hidden position-relative">
              <img src={pkg.image} alt={pkg.title} className="card-img" />
              {pkg.tag && (
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
                  {pkg.tag}
                </span>
              )}
              <div className="card-img-overlay d-flex flex-column justify-content-end bg-gradient-dark p-3">
                <div className="d-flex justify-content-between small mb-1">
                  <div>{pkg.duration}</div>
                  <div>⭐ {pkg.rating}</div>
                </div>
                <h6 className="fw-semibold mb-2">{pkg.title}</h6>

                {/* Icons Row */}
                <div className="d-flex justify-content-around text-center mb-3 icon-white">
                  <div>
                    <FaHotel size={24} />
                    <div className="small">Hotel</div>
                  </div>
                  <div>
                    <FaBinoculars size={24} />
                    <div className="small">Sightseeing</div>
                  </div>
                  <div>
                    <FaUtensils size={24} />
                    <div className="small">Meal</div>
                  </div>
                  <div>
                    <FaCar size={24} />
                    <div className="small">Transfer</div>
                  </div>
                </div>

                <p className="small text-truncate mb-2">
                  {pkg.features.join(' • ')}
                </p>
                <div className="price mb-2">
                  <strong>On Demand</strong>{' '}
                  {/* <strong>{pkg.price}</strong>{' '} */}
                  {/* <span className="text-decoration-line-through small ms-2">{pkg.oldPrice}</span>{' '} */}
                  <span className="badge bg-light text-dark small ms-2">SAVE {pkg.save}</span>
                </div>
<div className="d-flex row g-2">
  {/* WhatsApp Button */}
  <div className="col-3">
    <Button
      variant="success"
      className="w-100 fw-semibold"
      onClick={() => window.open('https://wa.me/918650657538', '_blank')} // replace with your number
    >
      <FaWhatsapp className="me-1" style={{fontSize:'22px'}} /> 
    </Button>
  </div>

  {/* Call Button */}
  <div className="col-9" style={{backgroundColor:' #f37002',borderRadius:'5px 5px 5px 5px',color:'white'}}>
    <Button
      variant=""
      className="w-100 fw-semibold btn1" style={{Color:'white'}}
      onClick={() => setShowModal(true)} // replace with your number
    >
      <FaPhoneAlt className="me-2 " style={{Color:'white !important'}}  /> Request Callback
    </Button>
  </div>
</div>
              </div>
            </div>
          </div>
        ))}
    </OwlCarousel>
    </div>
        <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
          
    </div>
  );
};

export default StaffHandpicked;
