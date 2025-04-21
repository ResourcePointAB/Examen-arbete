import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/styles/global.css";
import "../assets/styles/contact.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    const formPayload = new FormData();
    formPayload.append("access_key", "0984a5c4-eb6b-4bcf-8601-7b83fe4f470a");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();
      if (result.success) {
        alert("Formuläret har skickats!");
      } else {
        alert("Det uppstod ett problem när du skickade formuläret.");
      }
    } catch (error: any) {
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

  return (
    <Container fluid className="contact-hero">
      <section className="contactS1">
        <Row className="justify-content-center mb-4 text-center">
          <Col lg={8}>
            <h2 className=" py-5 text-white">Contact us</h2>
            <p className="contact-page fs-5 fw-semibold text-white">Leave us a little info, and we'll be in touch.</p>
            <svg
              className="wave"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#f8F9FA"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,272C672,267,768,213,864,197.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Col>
        </Row>
      </section>

      <section>
        <Row className="justify-content-center mb-4 text-center">
          <Col md={5} className="mb-2 text-start">
            <div>
              <h5>HOW CAN WE HELP YOU OUT?</h5>
              <p>Reach out to us in the nearest office.</p>
            </div>
            
            <div>
              <h5>Working hours:</h5>
              <p>
                Monday - Friday
              </p>
              <p>9 am to 4 pm EST</p>
            </div>
          </Col>

          <Col md={5} className="mb-2 text-start">
            <p>
              <i style={{ color: "#fc5633" }} className="fas fa-phone-alt me-2" /> +46 76 023 49 30
            </p>
            <p>
              <i style={{ color: "#fc5633" }} className="fas fa-envelope me-2" /> info@resourcepoint.se
            </p>
            <p>
              <i style={{ color: "#fc5633" }} className="fas fa-map-marker-alt me-2" />Storgatan 1, 411 38 Göteborg
            </p>
          </Col>
        </Row>
      </section>
      <section>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
              <input type="hidden" name="access_key" value="0984a5c4-eb6b-4bcf-8601-7b83fe4f470a" />

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>Name *</Form.Label>
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
                    <Form.Label>Email *</Form.Label>
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
                    <Form.Label>Phone</Form.Label>
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
                    <Form.Label>Subject</Form.Label>
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
                    <Form.Label>Message *</Form.Label>
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
                    Send message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>

      <section>
        <Row className="mt-5">
          <Col>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.728182484538!2d11.954548677186757!3d57.70408774003664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff368082e6509%3A0xad69b995cd02abd!2sResource%20Point%20AB!5e0!3m2!1ssv!2sse!4v1712242569889!5m2!1ssv!2sse"
                width="100%"
                height="450"
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

      <section>
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
      </section>

    </Container>
  );
};

export default Contact;