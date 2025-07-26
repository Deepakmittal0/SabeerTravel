import React, { useState } from 'react';
import EnquiryModal from '../../pages/modal/FormModal';
import './Banner.css';

const BannerTwo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="banner-two my-5 container  conn d-flex align-items-center text-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Celebrate With Your Group in Style</h2>
        <p className="mb-4">Whether it’s a bachelor trip, office getaway, or a birthday – we plan it all.</p>
        <button
          className="btn btn-light text-orange fw-semibold px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Plan My Group Trip
        </button>
      </div>

      {/* Modal */}
      <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default BannerTwo;
