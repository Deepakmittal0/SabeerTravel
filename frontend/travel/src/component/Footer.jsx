import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  // FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 px-4">
      <div className="container">
        <div className="row g-4">
          {/* About / Brand */}
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold mb-3">Sabeer Tour & Travel</h5>
            <p className="small">
              Your one-stop destination for all things tour and travelling Places , get exclusive offers, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#about" className="text-decoration-none text-light">About Us</a></li>
              <li><a href="#gallery" className="text-decoration-none text-light">Gallery</a></li>
              <li><a href="#honey" className="text-decoration-none text-light">Our Locations</a></li>
              <li><a href="#" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="mt-1" />  Bank atm, Saida Kadal Bridge, opposite Jammu and Kashmir, Karapura, Rainawari, Srinagar, Jammu and Kashmir 190003
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaPhoneAlt /> +9197 9737 3025

              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FaEnvelope /> info@sabeertravels25.com
              </li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-semibold mb-3">Follow Us</h6>
            <div className="d-flex gap-2 mb-3">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaYoutube />
              </a>
            </div>
            <p className="small mb-2">Subscribe for updates</p>
            {/* <div className="input-group input-group-sm">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div> */}
          </div>
        </div>

        {/* Bottom copyright */}
        <hr className="border-secondary my-4" />
<a href="/privacy" className="d-block text-center text-decoration-none text-light py-3 small hover-underline">
  Privacy Policy
</a>

        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} Sabeer Tour & Travel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
