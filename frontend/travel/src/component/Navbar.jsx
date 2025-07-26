import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import './Navbar.css';
import logo from '../../public/images/logo.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  // Close nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHideNavbar(window.scrollY > 0);
      setShowNav(false); // Close menu on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-transparent px-4 ${
          hideNavbar ? 'hide-navbar' : ''
        }`}
      >
        <a
          className="navbar-brand text-white logo fw-bold fs-4"
          style={{ marginLeft: '30px' }}
          href="#"
        >
          <img src={logo} alt="Logo" />
        </a>

        <button
          className="btn text-white ms-auto"
          onClick={() => setShowNav(true)}
          aria-label="Toggle Navigation"
        >
          <GiHamburgerMenu size={26} />
        </button>
      </nav>

      {/* Fullscreen Nav Overlay */}
      {showNav && (
        <div className="nav-overlay">
          <button
            className="close-btn"
            onClick={() => setShowNav(false)}
            aria-label="Close Navigation"
          >
            <IoMdClose size={36} />
          </button>

<div className="nav-content text-center">
  <a href="#home" onClick={() => setShowNav(false)}>Home</a>
  <a href="#package" onClick={() => setShowNav(false)}>Package</a>
  <a href="#gallery" onClick={() => setShowNav(false)}>Gallery</a>
  <a href="#about" onClick={() => setShowNav(false)}>About</a>
</div>

        </div>
      )}
    </>
  );
};

export default Navbar;
