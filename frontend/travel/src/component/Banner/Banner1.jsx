import React, { useState } from 'react';
import EnquiryModal from '../../pages/modal/FormModal';
import './Banner.css';

const BannerOne = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container my-5">
      <div className="banner-one d-flex rounded overflow-hidden">
        <div className="text-content text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3">Bigger Group? Get special offers up to <br /> 50% Off!</h2>
          <p className="mb-3">We create unforgettable adventures, customised for your group.</p>
          <button
            className="btn btn-light text-orange fw-semibold px-4 py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Get A Callback
          </button>
        </div>

      </div>

      {/* Modal */}
      <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default BannerOne;
