import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';
import './FormModal.css';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const EnquiryModal = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState('');
  const navigate = useNavigate();

  // Countdown Timer Logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown('Sale Ended');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/Sabeer/send',
        {
          firstName: name,
          phone,
          message,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      if (data.success) {
        toast.success(data.message || 'Enquiry submitted successfully!');
        setName('');
        setPhone('');
        setMessage('');
        handleClose(); // Close modal
        navigate('/success'); // Redirect
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

  return (
    <Modal
      className="text-white bg-dark bg-opacity-75" 
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      contentClassName="enquiry-modal"
    >
      {/* Countdown Banner */}
      <div className="countdown-banner d-flex justify-content-between align-items-center px-3 py-2" >
        <span className="fw-bold">Monsoon Sale is LIVE</span>
        <span className="text-end time-text">Ends in {countdown}</span>
      </div>

      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>
          Save up to <span style={{ color: '#f5a623' }}>40% OFF</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-3 text-muted" style={{ fontSize: '0.9rem' }}>
          We'll be needing some of your basic details to help you better with your trip.
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              type="text"
              placeholder="Full Name*"
              className="custom-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Control
              type="tel"
              placeholder="Your Phone*"
              className="custom-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Message..."
              className="custom-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <button
            type="submit"
            className="btn btn1 w-100 fw-bold"
            disabled={loading}
          >
            {loading ? 'Sending...' : <>SEND ENQUIRY <HiOutlineArrowNarrowRight /></>}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnquiryModal;
