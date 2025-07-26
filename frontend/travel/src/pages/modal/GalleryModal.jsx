// components/ImageModal.jsx
import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';

const ImageModal = ({ show, onHide, images, activeIndex }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Body className="p-0">
        <Carousel interval={null} defaultActiveIndex={activeIndex}>
          {images.map((img, i) => (
            <Carousel.Item key={i}>
              <img
                src={img}
                className="d-block w-100"
                alt={`slide-${i}`}
                style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
