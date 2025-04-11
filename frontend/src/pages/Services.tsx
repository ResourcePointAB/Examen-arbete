import "../assets/styles/global.css";
import "../assets/styles/service.css";
import {Container, Row, Col, Button,Carousel} from "react-bootstrap";
import { useEffect, useState } from "react";

const serviceBoxes = [
  { id: 1, image: "/images/service1.jpg", title: "Service 1", description: "Description 1", link: "/services/1" },
  { id: 2, image: "/images/service2.jpg", title: "Service 2", description: "Description 2", link: "/services/2" },
  { id: 3, image: "/images/service3.jpg", title: "Service 3", description: "Description 3", link: "/services/3" },
  { id: 4, image: "/images/service4.jpg", title: "Service 4", description: "Description 4", link: "/services/4" },
  { id: 5, image: "/images/service5.jpg", title: "Service 5", description: "Description 5", link: "/services/5" },
  { id: 6, image: "/images/service6.jpg", title: "Service 6", description: "Description 6", link: "/services/6" }
];

function Services() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="service-hero">
      {/* Första sektionen */}
      <section>
        <Row className="service-header align-items-center">
          <Col md={6}>
            <h1 className="service-1">Services</h1>
          </Col>
          <Col md={6} className="service-bg">
            <h2>Be at the front end of <br /><span className="highlight">Innovation</span></h2>
            <Button>Explore Solutions</Button>
          </Col>
        </Row>
      </section>
      {/* Andra sektionen */}
      <section>
        <Row className="carousel-container">
          <Col>
          <Carousel indicators={false} activeIndex={index} controls={false}>
              {[0, 1].map(i => (
                <Carousel.Item key={i}>
                  <Row>
                    {serviceBoxes.slice(i * 3, i * 3 + 3).map(service => (
                      <Col key={service.id} md={4} className="service-box">
                        <img src={service.image} alt={service.title} className="img-fluid" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href={service.link}>Read More</a>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </section>
      {/* Tredje sektionen */}
      <section>
        <Row className="text-center my-5">
          <Col>
            <h1>Capitalizing on the Real World Experience</h1>
            <p>We explore some of the latest trends and strategies.</p>
          </Col>
        </Row>

        <Row>
          {[1, 2, 3].map(i => (
            <Col key={i} md={4} className="info-box">
              <img src={`/images/info${i}.jpg`} alt={`Info ${i}`} className="img-fluid" />
              <h3>Box {i} Title</h3>
              <p>Short description about this section.</p>
              <a href="/readmore">Read More</a>
            </Col>
          ))}
        </Row>
      </section>
      {/* Fjärde sektionen */}
      <section>
        <Row className="cta-section text-center my-5">
          <Col>
            <h2>If you have the idea, we will find the right way</h2>
            <Button variant="secondary">View All Available Positions</Button>
          </Col>
        </Row>
      </section>
      {/* Femte sektionen */}
      <section>
        <Row className="stats-section">
          <Col md={6}>
            <img src="/images/stats.jpg" alt="Business Stats" className="img-fluid" />
          </Col>
          <Col md={6} className="stats-text">
            <h2>The operational processes of a business area. What drives the business itself.</h2>
            <div className="stat-bar"><span>Strategy Consulting 90%</span></div>
            <div className="stat-bar"><span>Operations Carries 50%</span></div>
            <div className="stat-bar"><span>Management Consulting 80%</span></div>
          </Col>
        </Row>
      </section>
    </Container>
    );
}
  
export default Services;
  