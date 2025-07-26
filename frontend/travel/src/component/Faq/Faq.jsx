import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Faq.css'

const faqData = [
  {
    question: "What is the best time to visit Kashmir?",
    answer: "March to October is ideal for scenic beauty, while December to February is perfect for snow lovers."
  },
  {
    question: "Are there any good honeymoon packages?",
    answer: "Yes, we offer customized honeymoon packages for Kashmir, Himachal, and Kerala with private stays and sightseeing."
  },
  {
    question: "Do you provide international travel packages?",
    answer: "Absolutely! We offer packages for Europe, Dubai, Bali, and more with flights, hotels, and visa assistance."
  },
  {
    question: "Is flight cost included in the package?",
    answer: "Yes, most of our packages include return airfare. It will be clearly mentioned at the time of booking."
  },
  {
    question: "How can I book a tour?",
    answer: "Just fill out our enquiry form or call our travel experts, and we'll assist you with bookings, payments, and itinerary planning."
  }
];

const FaqSection = () => {
  return (
    <section className="container py-5">
      <h2 className=" fw-bold mb-5">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
        {faqData.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
