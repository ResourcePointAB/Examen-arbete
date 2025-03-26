import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AvailablePositions from '../components/AvailablePositions';

function Home() {
  const [show, setShow] = useState(false);
  const [showPositions, setShowPositions] = useState(false); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowPositions = () => {
    setShowPositions(!show); 
  };

  return (
    <div className="container">
      <section className="text-center py-5">
        <h1 className="display-4 fw-bold">Your Vision. Our Passion.</h1>
        <p className="lead">Resource Point har de IT-experter du behöver.</p>
      </section>

      <section className="bt_bb_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <header className="bt_bb_headline">
                <h2>Skilled and experienced consultants</h2>
                <p>We are a reputed consultant company in Gothenburg with experience of more than 25 years.</p>
              </header>
              <div className="bt_bb_separator"></div>
              <p>Our core strengths are in supplying skilled and experienced consultants at competitive prices. We provide everything from coders fresh out of school to experienced system architects for short or long-term contracts. If you need competence that is hard or impossible to find in Sweden, we can provide that through our partners in India, Romania, and Macedonia.</p>
              <div className="bt_bb_separator"></div>
              <ul>
                <li>Strategic IT Consulting</li>
                <li>Cloud Solutions</li>
                <li>Cybersecurity</li>
                <li>Managed IT Services</li>
                <li>Data Analytics</li>
              </ul>
              <a href="https://www.resourcepoint.se/services/" className="bt_bb_button">Explore Solutions</a>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="bt_bb_card_image">
                    <img src="https://usercontent.one/wp/www.resourcepoint.se/wp-content/uploads/2020/08/service_02-1280x960.jpg?media=1696856253" alt="IT Consultancy & Solutions" className="img-fluid" />
                    <div className="bt_bb_card_image_content">
                      <h3><a href="https://www.resourcepoint.se/services/">IT Consultancy & Solutions</a></h3>
                      <a href="https://www.resourcepoint.se/services/" className="bt_bb_button">READ MORE</a>
                    </div>
                  </div>
                  <div className="bt_bb_card_image">
                    <img src="https://usercontent.one/wp/www.resourcepoint.se/wp-content/uploads/2020/09/fluid_hero_08-1280x960.jpg?media=1696856253" alt="HR On-Demand Subscription" className="img-fluid" />
                    <div className="bt_bb_card_image_content">
                      <h3><a href="https://www.resourcepoint.se/services/">HR On-Demand Subscription</a></h3>
                      <a href="https://www.resourcepoint.se/services/" className="bt_bb_button">READ MORE</a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="bt_bb_card_image">
                    <img src="https://usercontent.one/wp/www.resourcepoint.se/wp-content/uploads/2020/08/service_04-1280x960.jpg?media=1696856253" alt="Training & Development" className="img-fluid" />
                    <div className="bt_bb_card_image_content">
                      <h3><a href="https://www.resourcepoint.se/services/">Training & Development</a></h3>
                      <a href="https://www.resourcepoint.se/services/" className="bt_bb_button">READ MORE</a>
                    </div>
                  </div>
                  <div className="bt_bb_card_image">
                    <img src="https://usercontent.one/wp/www.resourcepoint.se/wp-content/uploads/2020/08/service_05-1280x960.jpg?media=1696856253" alt="Additional Service" className="img-fluid" />
                    <div className="bt_bb_card_image_content">
                      <h3><a href="https://www.resourcepoint.se/services/">Additional Service</a></h3>
                      <a href="https://www.resourcepoint.se/services/" className="bt_bb_button">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-5 bg-light">
        <h2>Steps of Recruitment Process</h2>
        <p>We can help you with picking out the best people for your company.</p>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3 text-center">
              <img src="https://www.resourcepoint.se/wp-content/uploads/2020/08/icon_01.png" alt="Step 1" className="img-fluid mb-3" />
              <h5>Identify Job Opening:</h5>
            </div>
            <div className="col-md-3 text-center">
              <img src="https://www.resourcepoint.se/wp-content/uploads/2020/08/icon_02.png" alt="Step 2" className="img-fluid mb-3" />
              <h5>Recruit and Interview:</h5>
            </div>
            <div className="col-md-3 text-center">
              <img src="https://www.resourcepoint.se/wp-content/uploads/2020/08/icon_03.png" alt="Step 3" className="img-fluid mb-3" />
              <h5>Select Candidate:</h5>
            </div>
            <div className="col-md-3 text-center">
              <img src="https://www.resourcepoint.se/wp-content/uploads/2020/08/icon_04.png" alt="Step 4" className="img-fluid mb-3" />
              <h5>Onboard and Start:</h5>
            </div>
          </div>
        </div>
        <button className="btn btn-dark mt-4" onClick={handleShow}>
          Online application
        </button>
      </section>

      <section className="text-center py-5 bg-light">
        <h2>If you have the idea we will find the right way</h2>
        <p>We're here to inform which tactics need funding and which aredrain resources. Real-time will have multiple touchpoints.</p>
        <button className="btn btn-dark mt-4" onClick={handleShowPositions}>
          View all available positions
        </button>
        {showPositions && <AvailablePositions />}      
      </section>

      <section className="text-center py-5 bg-light">
        <h1>Our Clients</h1>
        <p>We explore some of the latest trends and strategies</p>
        <div>
          <img src="https://usercontent.one/wp/www.resourcepoint.se/wp-content/uploads/2023/10/3.png?media=1696856253" alt="" />
          <img src="https://usercontent.one/wp/www.resourcepoint.se/wp-content/uploads/2023/10/1.png?media=1696856253" alt="" />
        </div>
      </section>

      <section className="text-center py-5 bg-light">
        <h1>Be at the forefront of the new innovation</h1>
        <p>Your goals are individual. We believe business advice should be too, so we help your business thrive in this work environment.</p>
        <button className="btn btn-dark mt-4" onClick={handleShowPositions}>View all availablepositions</button>
        {showPositions && <AvailablePositions />}
      </section>

      {/* Modal för ansökan */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Online Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Upload CV *</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Förnamn *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Efternamn *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-post *</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bostadsort *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefonnummer *</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Erfarenheter</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Utbildning</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>LinkedIn / GitHub / Portfolio</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Meddelande</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Skicka Ansökan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;
