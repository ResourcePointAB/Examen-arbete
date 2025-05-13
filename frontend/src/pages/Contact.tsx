import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/styles/global.css";
import "../assets/styles/contact.css";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import contactImage from '../assets/images/contact-hero.jpg';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Formuläret har skickats!");
      } else {
        alert("Det uppstod ett problem när du skickade formuläret.");
      }
    } catch (error) {
      alert("Ett fel inträffade vid inskick.");
    }
  };
  
  
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.message
    );
  };

  const { t } = useTranslation();

  return (
    <Container fluid className="contact-hero">
      <section className="contactS1" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        height: "60vh",
        position: "relative",
        overflow: "hidden",
      }}> 
        <Row className="justify-content-center mb-4 text-center">
          <Col lg={8}>
            <h2 className="contact-title pt-5 text-white">{t("contact.title")}</h2>
            <p className="contact-page fs-6 text-white">{t("contact.description")}</p>
            <div className="stats-svg-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f4f0" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
            </div>
          </Col>
        </Row>
      </section>

      <section>
        <Row className="contact-info justify-content-center mb-4 text-center contact-info">
          <Col md={5} className="mb-2 text-start">
            <div>
              <h4>{t("contact.help")}</h4>
              <p>{t("contact.answer")}</p>
            </div>
            
            <div>
              <h4>{t("contact.titlehour")}</h4>
              <p>
                {t("contact.time")}
              </p>
              <p>
                9 am to 4 pm EST</p>
            </div>
          </Col>

          <Col md={5} className="contact-info-left mb-2 text-start">
            <p>
              <i style={{ color: "#fc5633" }} className="fas fa-phone-alt me-2" /> +46 70 440 31 70
            </p>
            <p>
              <i style={{ color: "#fc5633" }} className="fas fa-envelope me-2" /> info@resourcepoint.se
            </p>
            <p>
              <i style={{ color: "#fc5633" }} className="fas fa-map-marker-alt me-2" />Stora Badhusgatan 18, 411 21, Göteborg
            </p>
          </Col>
        </Row>
      </section>

      <section>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow form-contact">
              <input type="hidden" name="access_key" value="0984a5c4-eb6b-4bcf-8601-7b83fe4f470a" />

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>{t("contact.form.name")} *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="T.ex. Johan Johansson"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>{t("contact.form.email")} *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="T.ex. johan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label>{t("contact.form.phone")}</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="T.ex. 070 123 45 67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="subject">
                    <Form.Label>{t("contact.form.subject")}</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Ämne för ditt meddelande"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col>
                  <Form.Group controlId="message">
                    <Form.Label>{t("contact.form.message")} *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="text-center form-submit">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!isFormValid()}
                  >
                    {t("contact.form.submit")}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>

      <section className="map-section">
        <Row className="mt-5">
          <Col>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.728182484538!2d11.954548677186757!3d57.70408774003664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff368082e6509%3A0xad69b995cd02abd!2sResource%20Point%20AB!5e0!3m2!1ssv!2sse!4v1712242569889!5m2!1ssv!2sse"
                width="100%"
                height="auto"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </section>

      {/* <section>
        <Row>
          <Col className="text-center mt-4">
            <p className="social">Social Media</p>
            <div className="social-icons d-flex justify-content-center gap-3">
              <a href="https://resourcepoint.se" target="_blank" rel="noopener noreferrer" className="icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://resourcepoint.se" target="_blank" rel="noopener noreferrer" className="icon twitter">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/resourcepoint" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </section> */}

    </Container>
  );
};

export default Contact;