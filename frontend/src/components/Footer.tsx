import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="text-start mx-5">
          <Col md={3}>
            <h5>Resource Point</h5>
            <div>
              <h5 className="social-icone-footer">Social Media</h5>
              <div className="social-icons-footer d-flex text-start gap-3">
                <a href="https://resourcepoint.se" target="_blank" rel="noopener noreferrer" className="icons text-white">
                  <FaFacebookF />
                </a>
                <a href="https://resourcepoint.se" target="_blank" rel="noopener noreferrer" className="icons text-white">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/resourcepoint" target="_blank" rel="noopener noreferrer" className="icons text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Contact</h5>
            <p>Phone: +46 123 456 789</p>
            <p>Email: info@resourcepoint.se</p>
            <p>Address: Stora badhusgatan 18, 411 21, Gothenburg</p>
          </Col>
        </Row>

        <hr className="bg-white" />

        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Resource Point. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
