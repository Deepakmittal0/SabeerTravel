import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import sucess from '../../public/images/sucess.jpeg';

function Success() {
  return (
    <>
      <Navbar  />

      <section className="d-flex align-items-center justify-content-center py-5 " style={{ minHeight: '80vh' ,backgroundColor:''}}>
        <div className="container text-center">
          <img src={sucess} alt="Success" className="img-fluid mb-4" style={{ maxWidth: '430px' }} />
          <h2 className="mb-3 text-success fw-bold">Reservation Successful!</h2>
          <p className="mb-4">Thank you for your reservation. We’ll get in touch with you shortly.</p>
          <Link to="/" className="btn btn-warning fw-bold">
            Back to Home <HiOutlineArrowCircleRight className="ms-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Success;
