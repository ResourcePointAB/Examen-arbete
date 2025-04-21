import "../assets/styles/global.css";
import "../assets/styles/client.css";
import {Row,Col} from "react-bootstrap";

import ericsson from '../assets/images/ericsson.png';
import volvo from '../assets/images/volvo.png';
// import background from '../assets/images/black.jpg';
// import video from '../assets/images/groupw.mp4';

function Clients() {
  return (
    <div className="client-hero container-fluid">
      {/* client first section */}
      <section className="client-hero-section">
        <Row className="client-hero-row">
          <Col md={5} className="text-client">
            <h1 className="text-center">Clients</h1>
            <p>We exceed our client’s expectations. Here, you can find some of the clients we have worked with.</p>
            <p>You'll be in good company</p>
          </Col>
        </Row>
        <Row className="client-hero-row">
          <Col className="wave-client">
            <div className="stats-svg-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
            </div>
          </Col>
        </Row>
      </section>

      {/* <section>
        <Col md={5} className="video-client">
          <div className="video-container">
            <img src={background} alt="background" className="background-image"/>
            <video autoPlay loop muted playsInline className="service-video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </Col>
      </section> */}

      {/* client second section */}
      <section>
        <Row >
          <Col className="text-client-logo">
            <h1>Our Clients</h1>
            <p>We explore some of the latest trends and strategies</p>
          </Col>
        </Row>
        <Row className="client-logo-bilder">
          <Col className="client-logo">
          <img src={volvo} alt="volvo" />
          </Col>

          <Col className="client-logo">
          <img src={ericsson} alt="ericsson" />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Clients;
