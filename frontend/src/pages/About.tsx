import "../assets/styles/about.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutHero from "../assets/images/about-hero.jpg";
import { useTranslation } from 'react-i18next';

type Props = {
  onApplyClick: (positionTitle?: string) => void;
};

function About({ onApplyClick }: Props) {
  const { t } = useTranslation()

  return (
    <div className="about-page">

      <section className="about-hero" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AboutHero})`,
          backgroundSize: "cover",
          height: "70vh",
          minHeight: "400px",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-content text-center">
          <h1 className="display-4">{t("about.title")}</h1>
          <p className="lead">
            {t("about.description")}
          </p>
        </div>
        <div className="stats-svg-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
        </div>
      </section>

      <section className="about-section py-5 bg-white">
        <Container>
          <Row className="align-items-center about-timeline">
            <Col md={5} className="mx-auto mb-4">
              <h2>Resource Point AB</h2>
              <p>
                {t("about.sectionTwoDescription")}
              </p>
              <p>
                {t("about.sectionTwoDescription2")}
              </p>

              <div className="circle-indicators">
                <h3 style={{textAlign:"left"}}> {t("about.internship")}</h3>
                <p>
                  {t("about.internshipDescription")}
                </p>
                <Button variant="primary" size="lg" className="text-dark apply-btn" onClick={() => onApplyClick("General Position")}>
              {t("about.sendCv")}
              </Button>
              </div>
            </Col>

            <Col md={5} className="offset-md-1 mx-auto mb-4">
              <ul className="timeline">
                <li>
                  <span className="year">1997</span>
                  <div className="timeline-content">
                    <h3> {t("about.timeline.title")}</h3>
                    <p>{t("about.timeline.event")} </p>
                  </div>
                </li>
                <li>
                  <span className="year">2000</span>
                  <div className="timeline-content">
                    <h3>{t("about.timeline.title1")} </h3>
                    <p>{t("about.timeline.event1")} </p>
                  </div>
                </li>
                <li>
                  <span className="year">2018</span>
                  <div className="timeline-content">
                    <h3>{t("about.timeline.title2")} </h3>
                    <p>{t("about.timeline.event2")} </p>
                  </div>
                </li>
                <li>
                  <span className="year">2023</span>
                  <div className="timeline-content">
                    <h3>{t("about.timeline.title3")} </h3>
                    <p>{t("about.timeline.event3")} </p>
                  </div>
                </li>
                <li>
                  <span className="year">2025</span>
                  <p>{t("about.timeline.event4")} </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
