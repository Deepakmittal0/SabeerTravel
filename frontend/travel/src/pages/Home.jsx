import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero/Hero';
import Review from '../component/review/Review';
import Banner1 from '../component/Banner/Banner1';
import Banner2 from '../component/Banner/Banner2';
import Package from '../component/Package/Package';
import Honey from '../component/Package/Honey';
import Family from '../component/Package/Family';
import Slide from '../component/Slide/Slide';
import WhyChoose from '../component/WhyChoose/WhyChoose';
import Footer from '../component/Footer';
import Faq from '../component/Faq/Faq';
import Gallary from '../component/Gallary/Gallary';
import EnquiryModal from '../pages/modal/FormModal'; // ✅ Don't change this path

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Auto show modal after 1 minute
    const showTimer = setTimeout(() => {
      setShowModal(true);

      // Auto close modal after 10 seconds
      // const hideTimer = setTimeout(() => {
      //   setShowModal(false);
      // }, 10000);

      return () => clearTimeout(hideTimer);
    }, 6000); // 60000 ms = 1 minute

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Banner1 />
      <Package />
      <Review />
      <Honey />
      <Banner2 />
      <Family />
      <WhyChoose />
      <Gallary />
      <Slide />
      <Faq/>
      <Footer />

      {/* Enquiry Modal */}
      <EnquiryModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        setShow={setShowModal}
      />
    </>
  );
}

export default Home;
