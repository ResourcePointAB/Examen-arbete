import "../assets/styles/about.css";
import "../assets/styles/global.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content text-center">
          <h1 className="display-4">About</h1>
          <p className="lead">
          Headquartered in Göteborg, the western gateway to Sweden, Resource Point AB is a 20+ year old firm, providing software solutions, services and resources to firms in Scandinavia.
          </p>
        </div>
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

      <section className="about-section py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Resource Point AB</h2>
              <p>
                Resource Point is a distinguished consulting company with its roots firmly planted in the vibrant city of Gothenburg, Sweden. Established in 1997, Resource Point has been a trusted partner for organizations seeking innovative solutions and expert guidance in a rapidly evolving business landscape. With over two decades of experience, the company has built a reputation for excellence in providing strategic insights, tailored recommendations, and practical implementation support across various industries.
              </p>
              <p>
                Resource Point AB is your trusted consulting partner, dedicated to helping you unlock your full potential and achieve sustainable growth. With a wealth of experience and a team of experts in various domains, we specialize in providing tailored solutions and strategic guidance to organizations across industries.
              </p>
              <div>
                <Row className="text-center">
                  <Col md={4}>
                    <h4>Modeling and Analytics</h4>
                    <ProgressBar now={99} label="99%" />
                  </Col>
                  <Col md={4}>
                    <h4>Customer-centric Analysis</h4>
                    <ProgressBar now={95} label="95%" />
                  </Col>
                  <Col md={4}>
                    <h4>Processing Result</h4>
                    <ProgressBar now={99} label="99%" />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={6}>
              <h4>Timeline</h4>
              <ul className="timeline">
                <li>
                  <span className="year">1997</span>
                  <p>Resource Point was established in Gothenburg, Sweden.</p>
                </li>
                <li>
                  <span className="year">2000</span>
                  <p>We began offering cutting-edge consulting services to local businesses.</p>
                </li>
                <li>
                  <span className="year">2018</span>
                  <p>Expanded our services to international clients with success.</p>
                </li>
                <li>
                  <span className="year">2023</span>
                  <p>Achieved significant growth and strengthened our position as an industry leader.</p>
                </li>
                <li>
                  <span className="year">MARCH 2023</span>
                  <p>We have more than 150 consultants helping clients worldwide.</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-section py-5 bg-white">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h2>
                The operational processes are what drives the business
                Apply for the position
              </h2>
              <Button variant="primary" size="lg" className="text-dark">
                Apply for the position
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
  }
  
  export default About;
  