import React from 'react';
import './Slide.css'; // CSS moved to a separate file

const TourismBoardAlliances = () => {
  const logos = [
    { id: 1, src: "/images/slide1.avif", alt: "France Tourism" },
    { id: 2, src: "/images/slide2.avif", alt: "Experience Abu Dhabi" },
    { id: 3, src: "/images/slide3.avif" , alt: "Jordan Tourism" },
    { id: 4, src: "/images/slides.avif", alt: "Saudi Tourism" },
    { id: 5, src: "/images/slide2.avif", alt: "Saudi Tourism" },
    { id: 6, src: "/images/slide3.avif", alt: "Saudi Tourism" },

  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold">Tourism Board Alliances</h2>
        </div>

        <div className="logo-scroller-wrapper overflow-hidden py-3">
          <div className="logo-scroller d-flex">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-item d-flex justify-content-center align-items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/150x75/E0E0E0/333333?text=Logo+Error";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismBoardAlliances;
