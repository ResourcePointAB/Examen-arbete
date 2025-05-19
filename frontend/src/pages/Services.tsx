import "../assets/styles/service.css";
import { Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from 'react';


import "swiper/css";
import "swiper/css/navigation";

import img1 from '../assets/images/consulting.png'; 
import img2 from '../assets/images/businessSetup.png';
import img3 from '../assets/images/consulting (2).png';
import img4 from '../assets/images/management.png';
import img5 from '../assets/images/acquisitionsConsulting.png';
import img6 from '../assets/images/investment.png';
import services from '../assets/images/stats.png';
import serviceHero from '../assets/images/service-hero.jpg';

import ServiceImage from '../assets/images/service.jpg';
import TalantImage from '../assets/images/talant.jpg';
import WorkImage from '../assets/images/work.jpg';
import AvailablePositions from '../components/AvailablePositions'; 
import { useTranslation } from 'react-i18next';



function Services() {
  const [showPositions, setShowPositions] = useState(false);

  const handleShowPositions = () => {
    setShowPositions(!showPositions); 
  };

  const handleApplyClick = (title: string) => {
    console.log(`Ansökan för position: ${title}`);
  };

  const { t } = useTranslation();

  const serviceBoxes = [
    { id: 1, image: img1, title: "Strategic Consulting Services", description: t("services.sevicesList.architects"), link: "/services/1" },
    { id: 2, image: img2, title: "Service 2", description: t("services.sevicesList.it"), link: "/services/2" },
    { id: 3, image: img3, title: "Service 3", description: t("services.sevicesList.manager"), link: "/services/3" },
    { id: 4, image: img4, title: "Service 4", description: t("services.sevicesList.scrum"), link: "/services/4" },
    { id: 5, image: img5, title: "Service 5", description: t("services.sevicesList.quality"), link: "/services/5" },
    { id: 6, image: img6, title: "Service 6", description: t("services.sevicesList.owner"), link: "/services/6" }
  ];

  return (
    <div className="container service-container">
      {/* Andra sektionen */}
      <section >
        <Row className="text-center py-5 services-header-1" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${serviceHero})`,
          backgroundSize: "cover",
          position: "relative",
          height: "60vh",
          minHeight: "400px",
          backgroundPosition: "center 33%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          }}>
          <Col>
            <h1 style={{marginTop:"70px"}}>SERVICES</h1>
            <p>{t("services.description")}</p>
            <div className="service-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7f4f0" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
            </div>
          </Col>
        </Row>

        {/* <Row className="carousel-container">
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav-buttons text-center mt-3"></div>
          </Col>
        </Row> */}
      </section>

      {/* services*/}
      <section className="info-section">
        <Row className="text-center my-5">
          <Col>
            <h1>{t("services.experience")}</h1>
            <p>{t("services.Strategic")}</p>
          </Col>
        </Row>
        <Row className="info-boxes">
          <Col xs={12} sm={6} md={4} className="info-box">
            <img src={ServiceImage} alt="IT Consultancy & Solutions" className="service-image" /> 
            <h3>{t("services.itConsulting.title")}</h3>
            <p>{t("services.itConsulting.description")}</p>
            <Link to="/singleService/individuals">Read More</Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="info-box">
            <img src={TalantImage} alt="HR On-Demand Subscription" className="service-image" />
            <h3>{t("services.business.title")}</h3>
            <p>{t("services.business.description")}</p>
            <Link to="/singleService/business">Read More</Link>
          </Col>
          <Col xs={12} sm={6} md={4} className="info-box">
            <img src={WorkImage} alt="Training & Development" className="service-image" />
            <h3>{t("services.clients.title")}</h3>
            <p>{t("services.clients.description")}</p>
            <Link to="/singleService/corporate">Read More</Link>
          </Col>
        </Row>
      </section>

      {/* 4 sektionen*/}
      {/* <section>
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
      </section> */}

      {/* swiper section */}
      <section>
      <Row className="carousel-container">
          <Col>
            <h2 className="text-center">Our Expert Services</h2>
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav-buttons text-center mt-3"></div>
          </Col>
        </Row>
      </section>

      {/* CTA */}
      <section className="cta-section-container">
        <Row className="cta-svg" style={{ position: "relative", top: "0", left: "0", width: "100%", height: "100%", zIndex: "1" }}>
          <Col>
            <div className="stats-svg"  style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "2" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f7f4f0" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,42.7C384,21,480,11,576,32C672,53,768,107,864,117.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
            </div>
          </Col>
        </Row>
        <Row className="cta-section text-center ">
          <Col md={5}>
            <img src={services} alt="Business Stats" className="img-fluid service-cta-img" />
          </Col>
          <Col md={5} className="cta-text">
            <h2>{t("services.idea")}</h2>
            <Button className="cta-btn-service" variant="secondary" onClick={handleShowPositions}>{t("services.button")}</Button>
            {showPositions && <AvailablePositions onApplyClick={handleApplyClick} className="service-page-positions"/>}
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Services;
