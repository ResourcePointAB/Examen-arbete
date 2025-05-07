import "../assets/styles/about.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutHero from "../assets/images/about-hero.jpg";

type Props = {
  onApplyClick: (positionTitle?: string) => void;
};

function About({ onApplyClick }: Props) {
  return (
    <div className="about-page">

      <section className="about-hero" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${AboutHero})`,
          backgroundSize: "cover",
          height: "70vh",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-content text-center">
          <h1 className="display-4">ABOUT</h1>
          <p className="lead">
            Headquartered in Göteborg, the western gateway to Sweden, Resource Point AB is a 20+ year old firm, providing software solutions, services and resources to firms in Scandinavia.
          </p>
        </div>
        <div className="stats-svg-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
        </div>
      </section>

      <section className="about-section py-5 bg-white">
        <Container>
          <Row className="align-items-center about-timeline">
            <Col md={5}>
              <h2>Resource Point AB</h2>
              <p>
                Resource Point is a distinguished consulting company with its roots firmly planted in the vibrant city of Gothenburg, Sweden. Established in 1997, Resource Point has been a trusted partner for organizations seeking innovative solutions and expert guidance in a rapidly evolving business landscape. With over two decades of experience, the company has built a reputation for excellence in providing strategic insights, tailored recommendations, and practical implementation support across various industries.
              </p>
              <p>
                Resource Point AB is your trusted consulting partner, dedicated to helping you unlock your full potential and achieve sustainable growth. With a wealth of experience and a team of experts in various domains, we specialize in providing tailored solutions and strategic guidance to organizations across industries.
              </p>

              <div className="circle-indicators">
                <h3 style={{textAlign:"left"}}>Internship program</h3>
                <p>
                  We have a running collaboration with IT-Högskolan i Väst, where we take in a group of students and give them real assignments to build IT applications for their internship. That gives them real experience from worklife and we support them with expertise from our senior consultants at the same time as we are getting to know them personally. We also help them with what it takes to get assignments as consultants or their first job, when they graduate.
                </p>
                {/* <div className="circle" style={{['--circle-percent' as any]: 99,['--circle-color' as any]: '#bec4b5'}}>
                  <div className="circle-inner">
                    <div className="circle-value">99%</div>
                    <div className="circle-label">Modeling and Analytics</div>
                  </div>
                </div>

                <div className="circle" style={{['--circle-percent' as any]: 95,['--circle-color' as any]: '#bec4b5'}}>
                  <div className="circle-inner">
                    <div className="circle-value">95%</div>
                    <div className="circle-label">Customer-centric Analysis</div>
                  </div>
                </div>

                <div className="circle" style={{['--circle-percent' as any]: 99,['--circle-color' as any]: '#bec4b5'}}>
                  <div className="circle-inner">
                    <div className="circle-value">99%</div>
                    <div className="circle-label">Processing Result</div>
                  </div>
                </div> */}
              </div>
            </Col>

            <Col md={5} className="offset-md-1">
              <ul className="timeline">
                <li>
                  <span className="year">1997</span>
                  <div className="timeline-content">
                    <h3>Expertise:</h3>
                    <p>Our team of experienced consultants brings a wealth of knowledge and expertise to every project, ensuring successful outcomes.</p>
                  </div>
                </li>
                <li>
                  <span className="year">2000</span>
                  <div className="timeline-content">
                    <h3>Client-centric Approach:</h3>
                    <p>We prioritize your unique needs and business objectives, tailoring solutions that fit your organization perfectly.</p>
                  </div>
                </li>
                <li>
                  <span className="year">2018</span>
                  <div className="timeline-content">
                    <h3>Innovation:</h3>
                    <p>We stay at the forefront of technology trends to provide you with cutting-edge solutions that give you a competitive advantage.</p>
                  </div>
                </li>
                <li>
                  <span className="year">2023</span>
                  <div className="timeline-content">
                    <h3>Reliability</h3>
                    <p>Count on us for dependable, 24/7 support and proactive monitoring to keep your systems running smoothly.</p>
                  </div>
                </li>
                <li>
                  <span className="year">MARCH 2023</span>
                  <p>More than 150 Consultant</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <h2>The operational processes are what drives the business</h2>
              <Button variant="primary" size="lg" className="text-dark apply-btn" onClick={() => onApplyClick("General Position")}>
                Apply for the internship
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
