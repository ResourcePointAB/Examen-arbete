import "../assets/styles/global.css";
import "../assets/styles/careers.css";

// import career1 from '../assets/images/service-head (3).jpg';
import career2 from '../assets/images/career2.png';

import { Row, Col, Button } from "react-bootstrap";

function Careers() {
  return (
    <div className="careers-page">

      {/* First section*/}
      <section className="careers-hero">
          <Row className="text-container text-center justify-content-center align-items-center">
            <Col md={8}>
              <h1>Careers</h1>
              <p>Resource Point AB team is a diverse network of consultants and industry professionals.</p>
              <Button>View all available positions</Button>
              <div className="stats-svg-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
              </div>
            </Col>
          </Row>
      </section>

      {/* Second section*/}
      <section className="careers-consulting py-5">
        <Row className="career-work align-items-center container mx-auto">
          <Col md={5} className="mb-4 mb-md-0">
            <img src={career2} alt="career" className="img-fluid rounded" />
          </Col>
          <Col md={5} className="career-work-text text-center text-md-start">
            <h2>Let’s work together</h2>
            <p>The Best Financial Consulting Firm You Can Count On!</p>
          </Col>
        </Row>
      </section>

      {/* Third section*/}
      <section className="careersIdea py-5">
        <Row className="careersWork align-items-center container mx-auto">
          <Col md={9} className="career-idea">
          <h1>If you have the idea we will find the right way</h1>
          <p>We're here to inform which tactics need funding and which aredrain resources. Real-time will have multiple touchpoints.
          </p>
          </Col>
        </Row>
      </section>

    </div>
  );
}

export default Careers;
