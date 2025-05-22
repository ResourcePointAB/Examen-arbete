import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="text-start mx-5">
          <Col md={3}>
            <div>
              <h5 className="social-icone-footer">{t("footer.socialMedia")}</h5>
              <div className="social-icons-footer d-flex text-start gap-3">
                <a href="https://www.linkedin.com/company/resource-point-ab" target="_blank" rel="noopener noreferrer" className="icons text-white border border-white rounded-circle w-10 h-10 px-1">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <h5>{t("footer.links")}</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none" style={{fontSize:"14px"}}>{t("footer.home")}</a></li>
              <li><a href="/about" className="text-white text-decoration-none" style={{fontSize:"14px"}}>{t("footer.about")}</a></li>
              <li><a href="/services" className="text-white text-decoration-none" style={{fontSize:"14px"}}>{t("footer.services")}</a></li>
              <li><a href="/contact" className="text-white text-decoration-none" style={{fontSize:"14px"}}>{t("footer.contact")}</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>{t("footer.contact")}</h5>
            <p style={{fontSize:"14px"}}><FaPhoneAlt size={13} style={{ marginRight: "8px" }} />Phone: +46 70 440 31 70</p>
            <p style={{fontSize:"14px"}}><FaEnvelope size={13} style={{ marginRight: "8px" }} />Email: info@resourcepoint.se</p>
            <p style={{fontSize:"14px"}}><FaMapMarkerAlt size={13} style={{ marginRight: "8px" }} />Address: Stora Badhusgatan 18, 411 21, Göteborg</p>
          </Col>
        </Row>

        <hr className="bg-white" />

        <Row className="text-center">
          <Col>
            <p className="mb-0" style={{fontSize:"14px"}}>&copy; {new Date().getFullYear()} Resource Point. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
