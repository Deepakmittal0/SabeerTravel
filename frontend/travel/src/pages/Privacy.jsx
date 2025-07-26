import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../component/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Container className="my-5" >
      <h3 className="text-center fw-bold mb-4">Privacy Policy</h3>
      <Row className="justify-content-center">
        <Col lg={10} md={12}>
          <Card className="shadow-sm p-4 rounded-3">
            <Card.Body>
              <h5 className="fw-bold">Sabeer Tour and Travels Privacy Policy</h5>
              <p>
                At Sabeer Tour and Travels, your privacy is important to us. This Privacy Policy explains how we collect, use,
                and protect your personal information when you visit our website or use our services.
              </p>

              <h6 className="fw-bold mt-4">1. Information We Collect</h6>
              <p>We may collect the following information:</p>
              <ul>
                <li><strong>1.1 Personal Information:</strong> Name, email address, phone number, travel preferences, passport details, and other information provided during booking or inquiry.</li>
                <li><strong>1.2 Usage Data:</strong> IP address, browser type, device information, and interaction data when you browse our website.</li>
                <li><strong>1.3 Payment Information:</strong> Billing details like credit/debit card numbers are collected and processed securely via trusted payment partners.</li>
              </ul>

              <h6 className="fw-bold mt-4">2. How We Use Your Information</h6>
              <p>We use your information to:</p>
              <ul>
                <li>2.1 Confirm bookings and deliver travel services.</li>
                <li>2.2 Respond to your inquiries and provide support.</li>
                <li>2.3 Improve our website, services, and user experience.</li>
                <li>2.4 Send updates, offers, and travel content (only if you've subscribed).</li>
              </ul>

              <h6 className="fw-bold mt-4">3. Sharing Your Information</h6>
              <p>We do not sell or rent your personal data. Your information may be shared with:</p>
              <ul>
                <li>3.1 Travel service providers (hotels, airlines, tour operators) for booking purposes.</li>
                <li>3.2 Technical and customer support partners.</li>
                <li>3.3 Legal authorities, when required by law.</li>
              </ul>

              <h6 className="fw-bold mt-4">4. Data Security</h6>
              <p>We use appropriate security measures to protect your data from unauthorized access, misuse, or disclosure.</p>

              <h6 className="fw-bold mt-4">5. Cookies</h6>
              <p>
                Our site uses cookies to personalize your experience and analyze site usage. You can disable cookies through your
                browser settings if preferred.
              </p>

              <h6 className="fw-bold mt-4">6. Your Rights</h6>
              <p>You have the right to:</p>
              <ul>
                <li>6.1 Access or correct your personal information.</li>
                <li>6.2 Request deletion of your data.</li>
                <li>6.3 Opt out of marketing communications anytime.</li>
              </ul>

              <h6 className="fw-bold mt-4">7. Changes to the Privacy Policy</h6>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with the revised date.</p>

              <h6 className="fw-bold mt-4">8. Contact Us</h6>
              <p>If you have questions or concerns about your privacy, feel free to contact us:</p>
              <ul className="list-unstyled">
                <li><FaEnvelope className="me-2 text-primary" /> <strong>Email:</strong> info@sabeertravels25.com</li>
                <li><FaPhoneAlt className="me-2 text-success" /> <strong>Phone:</strong> +91 9797373025</li>
                <li><FaMapMarkerAlt className="me-2 text-danger" /> <strong>Address:</strong> Bank atm, Saida Kadal Bridge, opposite Jammu and Kashmir, Karapura, Rainawari, Srinagar, Jammu and Kashmir 190003</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>



    <Footer/>
    </>
  )
};
export default PrivacyPolicy;
