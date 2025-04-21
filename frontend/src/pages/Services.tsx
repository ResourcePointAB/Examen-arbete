import "../assets/styles/service.css";
import { Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import img1 from '../assets/images/consulting.png'; 
import img2 from '../assets/images/businessSetup.png';
import img3 from '../assets/images/consulting (2).png';
import img4 from '../assets/images/management.png';
import img5 from '../assets/images/acquisitionsConsulting.png';
import img6 from '../assets/images/investment.png';
import services from '../assets/images/stats.png';

import ServiceImage from '../assets/images/service.jpg';
import TalantImage from '../assets/images/talant.jpg';
import WorkImage from '../assets/images/work.jpg';

const serviceBoxes = [
  { id: 1, image: img1, title: "Strategic Consulting Services", description: "Strategic Consulting Services", link: "/services/1" },
  { id: 2, image: img2, title: "Service 2", description: "Company & Business Setup", link: "/services/2" },
  { id: 3, image: img3, title: "Service 3", description: "Investment & Management", link: "/services/3" },
  { id: 4, image: img4, title: "Service 4", description: "Acquisitions Consulting", link: "/services/4" },
  { id: 5, image: img5, title: "Service 5", description: "Company Management", link: "/services/5" },
  { id: 6, image: img6, title: "Service 6", description: "Private Placement Consulting", link: "/services/6" }
];

function Services() {
  return (
    <div className="container service-container">
      {/* Första sektionen */}
      {/* <section>
        <Row className="service-header align-items-center">
          <Col md={5} >
            <h1 className="service-1">Services</h1>
          </Col>

          <Col md={5} className="service-bg">
            <h2 className="serviceHeader">Be at the front end of <br /><span className="highlight">Innovation</span></h2>
            <Button>Explore Solutions</Button>
          </Col>
        </Row>
      </section> */}

      {/* Andra sektionen */}
      <section>
        <Row className="text-center py-5">
          <Col>
            <h1>Our Services</h1>
            <p>We provide a wide range of services to help you achieve your business goals.</p>
          </Col>
        </Row>

        <Row className="carousel-container">
          <Col>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={1}
              navigation={true}
              loop={false}
              modules={[Navigation]}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {serviceBoxes.map(service => (
                <SwiperSlide key={service.id}>
                  <div className="service-box">
                    <img src={service.image} alt={service.title} className="img-fluid" />
                    <p>{service.description}</p>
                    {/* <a href={service.link}>Read More</a> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav-buttons text-center mt-3"></div>
          </Col>
        </Row>
      </section>

      {/* Tredje sektionen*/}
      <section className="info-section">
        <Row className="text-center my-5">
          <Col>
            <h1>Capitalizing on the Real World Experience</h1>
            <p>We explore some of the latest trends and strategies.</p>
          </Col>
        </Row>
        <Row className="info-boxes">
          <Col xs={12} sm={6} md={4} className="info-box">
            <img src={ServiceImage} alt="IT Consultancy & Solutions" className="service-image" /> 
            <h3>Private individuals products & services</h3>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews iterative indicators offline.</p>
            <Link to="/singleService/individuals">Read More</Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="info-box">
            <img src={TalantImage} alt="HR On-Demand Subscription" className="service-image" />
            <h3>Small & medium business clients aquisition</h3>
            <p>Organically grow the holistic world view of disruptive innovation via workplace diversity will have multiple.</p>
            <Link to="/singleService/business">Read More</Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="info-box">
            <img src={WorkImage} alt="Training & Development" className="service-image" />
            <h3>Corporate clients & services</h3>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</p>
            <Link to="/singleService/corporate">Read More</Link>
          </Col>
        </Row>
      </section>

      {/* 4 sektionen*/}
      <section>
        <Row className="stats-section d-flex align-items-center justify-content-center">
          <Col md={5} className="stats-text">
            <div className="stats-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f7f4f0" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,42.7C384,21,480,11,576,32C672,53,768,107,864,117.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
            </div>
            <h2>The operational processes of a business area. What drives the business itself.</h2>
            <div className="stat-bar-wrapper">
              <div className="stat-bar-fill" style={{ width: "90%" }}>Strategy Consulting 90%</div>
            </div>
            <div className="stat-bar-wrapper">
              <div className="stat-bar-fill" style={{ width: "50%" }}>Operations Carries 50%</div>
            </div>
            <div className="stat-bar-wrapper">
              <div className="stat-bar-fill" style={{ width: "80%" }}>Management Consulting 80%</div>
            </div>
            <div className="stats-svg-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
            </div>
          </Col>
        </Row>
      </section>

      {/* 5 sektionen: CTA */}
      <section className="cta-section-container">
        <Row className="cta-section text-center ">
          <Col md={5}>
            <img src={services} alt="Business Stats" className="img-fluid" />
          </Col>
          <Col md={5} className="cta-text">
            <h2>If you have the idea, we will find the right way</h2>
            <Button variant="secondary">View All Available Positions</Button>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Services;
