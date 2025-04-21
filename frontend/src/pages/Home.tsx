import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AvailablePositions from '../components/AvailablePositions';
import "../assets/styles/global.css";
import "../assets/styles/responsive.css";
import "../assets/styles/home.css";

import ServiceImage from '../assets/images/service.jpg';
import TalantImage from '../assets/images/talant.jpg';
import WorkImage from '../assets/images/work.jpg';
import DevelopmentImage from '../assets/images/development.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../assets/images/1.jpg'; 
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import ericsson from '../assets/images/ericsson.png';
import volvo from '../assets/images/volvo.png';

function Home() {
  const [show, setShow] = useState(false);
  const [showPositions, setShowPositions] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowPositions = () => {
    setShowPositions(!show); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    }
  };

  

  return (
    <div className="container">
      
       {/*section 1*/}
      <section className="text-center py-5 background-section">
        <h1 className="display-4 fw-bold">Your Vision.<span> Our Passion.</span></h1>
        <p className="lead">Resource Point has the IT experts you need.</p>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,272C672,267,768,213,864,197.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/*section 2 */}  
      <section className="bt_bb_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <header className="bt_bb_headline">
                <h2>Skilled and experienced consultants</h2>
                <p>We are a reputed consultant company in Gothenburg with experience of more than 25 years.</p>
              </header>
              <div className="bt_bb_separator"></div>
              <p>Our core strengths are in supplying skilled and experienced consultants at competitive prices. We provide everything from coders fresh out of school to experienced system architects for short or long-term contracts. If you need competence that is hard or impossible to find in Sweden, we can provide that through our partners in India, Romania, and Macedonia.</p>
              <div className="bt_bb_separator"></div>
              <ul className="list-home">
                <li>Strategic IT Consulting</li>
                <li>Cloud Solutions</li>
                <li>Cybersecurity</li>
                <li>Managed IT Services</li>
                <li>Data Analytics</li>
              </ul>
              <a href="/services" className="bt_bb_button">Explore Solutions</a>
            </div>

            <div className="col-md-6">
              <div className="row talent-cart">
                <div className="col-md-5 mb-4">
                  <div className="service-card">
                    <img src={ServiceImage} alt="IT Consultancy & Solutions" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">IT Consultancy & Solutions</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-4">
                  <div className="service-card">
                    <img src={TalantImage} alt="HR On-Demand Subscription" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">HR On-Demand Subscription</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-4">
                  <div className="service-card">
                    <img src={WorkImage} alt="Training & Development" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">Training & Development</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-4">
                  <div className="service-card">
                    <img src={DevelopmentImage} alt="Additional Service" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">Additional Service</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3*/}
      <section className="recruitment-process text-center py-5 bg-whiite">
        <h1 className="fw-bold fs-1">Steps of Recruitment Process</h1>
        <p>We guide you through every step to find the best talent.</p>
        <div className="container justify-content-center">
          <div className="row justify-content-center">

            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-1">
                <div className="process-icon">
                  <img src={img1} alt="Identify Job Opening" className="icon-img" />
                </div>
                <h2>Identify Job Opening</h2>
              </div>
            </div>

            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-2">
                <div className="process-icon">
                  <img src={img2} alt="Recruit and Interview" className="icon-img" />
                </div>
                <h2>Recruit and Interview</h2>
              </div>
            </div>

            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-3">
                <div className="process-icon">
                  <img src={img3} alt="Select Candidate" className="icon-img" />
                </div>
                <h2>Select Candidate</h2>
              </div>
            </div>

            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-4">
                <div className="process-icon">
                  <img src={img4} alt="Onboard and Start" className="icon-img" />
                </div>
                <h2>Onboard and Start</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-dark mt-4" onClick={handleShow}>
          Online Application
        </button>
      </section>

      {/* section 4*/}
      <section className="hero-section text-center py-5" style={{ height: '100vh', position: 'relative' }}>
        <div className="hero-content">
          <h2>If you have the idea, we will find the right way</h2>
          <p>We're here to inform which tactics need funding and which are drain resources. Real-time will have multiple touchpoints.</p>
        </div>

        <div className="available-positions">
          <h3>Available Job Positions</h3>
          <AvailablePositions /> 
        </div>
      </section>

      {/*section 5 */}
      <section className="text-center py-5 clients-section">
        <h1>Our Clients</h1>
        <p>We explore some of the latest trends and strategies</p>
        <div>
          <img src={ericsson} alt="partner" />
          <img src={volvo} alt="partner" />
        </div>
      </section>

      {/*section 6*/}
      <section className="text-center py-5 hero-section-overlay">
        <div className="hero-content">
          <h1>Be at the forefront of the new innovation</h1>
          <p>Your goals are individual. We believe business advice should be too, so we help your business thrive in this work environment.</p>
          <button className="btn btn-dark mt-4" onClick={handleShowPositions}>View all available positions</button>
          {showPositions && <AvailablePositions />}
        </div>
        <div className="overlay"></div>
      </section>

      {/* Modal för ansökan */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Online Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3">
              <Form.Label>Upload CV *</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>firstName *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>LastName *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-post *</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Experiences</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>LinkedIn / GitHub / Portfolio</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;
