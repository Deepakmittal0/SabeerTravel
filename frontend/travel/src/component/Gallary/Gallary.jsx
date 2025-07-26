import React, { useState } from 'react';
import ImageModal from '../../pages/modal/GalleryModal';
import { FaCamera } from 'react-icons/fa';
import './Gallry.css';

const images = [
  '/images/honey1.jpg',
  '/images/honey2.jpg',
  '/images/honey3.jpg',
  '/images/honey4.jpg',
  '/images/fam3.avif',
  '/images/fam8.avif',
  '/images/honey8.jpg',
];

const GallerySection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setModalShow(true);
  };

  return (
    <div className="container my-5" id='gallery'>
      <h2 className="mb-3 fw-bold">Traveller Image Gallery</h2>
      <div className="row g-2 mt-4">
        {/* Left Large Image */}
        <div className="col-12 col-md-6">
          <div className="position-relative gallery-main" onClick={() => handleImageClick(0)} style={{ cursor: 'pointer' }}>
            <img src={images[0]} alt="" className="img-fluid w-100 rounded-3 gallery-main-img" />
            <button className="view-all-btn btn btn-dark position-absolute bottom-0 start-0 m-2 px-3 py-2">
              <FaCamera className="me-2" /> View All (58)
            </button>
          </div>
        </div>

        {/* Right 2x2 images */}
        <div className="col-12 col-md-6">
          <div className="row g-2">
            {images.slice(1).map((img, i) => (
              <div className="col-6" key={i + 1} onClick={() => handleImageClick(i + 1)} style={{ cursor: 'pointer' }}>
                <img src={img} alt="" className="img-fluid w-100 rounded-3 gallery-thumb" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Slider */}
      <ImageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        images={images}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default GallerySection;
