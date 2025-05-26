import AvailablePositions from '../components/AvailablePositions';
import "../assets/styles/global.css";
import "../assets/styles/responsive.css";
import "../assets/styles/home.css";
import { useTranslation } from 'react-i18next';

import ServiceImage from '../assets/images/service.jpg';
import TalantImage from '../assets/images/talant.jpg';
import WorkImage from '../assets/images/work.jpg';
import DevelopmentImage from '../assets/images/development.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../assets/images/1.jpg'; 
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import ideaHeroImage from '../assets/images/idea-hero.jpg';

type Props = {
  onApplyClick: (positionTitle?: string) => void;
};

function Home({ onApplyClick }: Props) {
  const { t } = useTranslation()

  return (
    <div className="container">
      
       {/*section header*/}
      <section className="text-center py-5 background-section" style={{ minHeight: "500px"}}>
        <h1 className="display-4 fw-bold">
          {t("home.vision")}<span> {t("home.passion")}</span>
        </h1>
        <p className="lead">{t("home.lead")}</p>
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

      {/*section Resource point */}  
      <section className="bt_bb_section">
        <div className="container">
          <div className="row justify-content-center skilled-home">
            <div className="col-md-4 text-cart-home">
              <header className="bt_bb_headline">
                <h2>{t("home.skilledTitle")}</h2>
                <p>{t("home.skilledIntro")}</p>
              </header>
              <div className="bt_bb_separator"></div>
              <p>{t("home.skilledDescription")}</p>
              <div className="bt_bb_separator"></div>
              <ul className="list-home">
                <li>{t("home.services.Strategic")}</li>
                <li>{t("home.services.Strategic1")}</li>
                <li>{t("home.services.Strategic2")}</li>
                <li>{t("home.services.Strategic3")}</li>
                <li>{t("home.services.Strategic4")}</li>
              </ul>
              <a href="/services" className="bt_bb_button">Explore Solutions</a>
            </div>

            <div className="col-md-6 carts-home">
              <div className="row talent-cart">
                <div className="col-md-5 mb-1">
                  <div className="service-card">
                    <img src={ServiceImage} alt="IT Consultancy & Solutions" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">{t("home.servicesList.it")}</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-1">
                  <div className="service-card mt-4">
                    <img src={TalantImage} alt="HR On-Demand Subscription" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">{t("home.servicesList.hr")}</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-1">
                  <div className="service-card" style={{ marginTop: "-20px" }}>
                    <img src={WorkImage} alt="Training & Development" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">{t("home.servicesList.training")}</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-1">
                  <div className="service-card">
                    <img src={DevelopmentImage} alt="Additional Service" className="service-image" />
                    <div className="service-content">
                      <h3><a href="/services">{t("home.servicesList.additional")}</a></h3>
                      <a href="/services" className="btn-read-more">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section Recruitment Process*/}
      <section className="recruitment-process text-center py-5 bg-whiite">
        <h1 className="fw-bold fs-2">{t("home.stepsTitle")}</h1>
        <p>{t("home.stepsIntro")}</p>
        <div className="container justify-content-center">
          <div className="row justify-content-center steps-home">

            {/* step1 */}
            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-1" style={{ marginTop: "-10px" }}>
                <div className="process-icon">
                  <img src={img1} alt="Identify Job Opening" className="icon-img" />
                </div>
                <h2>{t("home.steps.step1")}</h2>
              </div>
            </div>

            {/* step2 */}
            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-2">
                <div className="process-icon">
                  <img src={img2} alt="Recruit and Interview" className="icon-img" />
                </div>
                <h2>{t("home.steps.step2")}</h2>
              </div>
            </div>

            {/* step3 */}
            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-3">
                <div className="process-icon">
                  <img src={img3} alt="Select Candidate" className="icon-img" />
                </div>
                <h2>{t("home.steps.step3")}</h2>
              </div>
            </div>

            {/* step4 */}
            <div className="col-md-2 col-sm-5 col-5">
              <div className="process-step step-4" style={{ marginTop: "-10px" }}>
                <div className="process-icon">
                  <img src={img4} alt="Onboard and Start" className="icon-img" />
                </div>
                <h2>{t("home.steps.step4")}</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="home-btn-apply" onClick={() => onApplyClick("Developer")}>
          {t("home.cta")}
        </button>
      </section>

      {/* section Available Job Positions*/}
      <section className="hero-section text-center idea-home-section" style={{
          height: '100%',
          minHeight: '60vh',
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ideaHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff', 
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
        }}>
          <path fill="#fff" fillOpacity="1" d="M0,128L48,112C96,96,192,64,288,42.7C384,21,480,11,576,32C672,53,768,107,864,117.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <div className="hero-content idea-content" style={{ position: 'relative', zIndex: 2, width: '80%', maxWidth: '700px', margin: '0px 50px', padding: '20px', textAlign: 'left', marginRight: 'auto', height: '100%', minHeight:'500px', overflowY: 'auto'}}>
          <h2 style={{color:'#fff'}}>{t("home.ideaTitle")}</h2>
          <p style={{color:'#fff'}}>{t("home.ideaText")}</p>
        </div>

        {/* <div className="available-positions">
          <h3>Available Job Positions</h3>
          <AvailablePositions /> 
        </div> */}
         <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 1,
          }}
        >
          <path
            fill="#f7f4f0"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,272C672,267,768,213,864,197.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/*section available positions*/}
      <section className="text-center py-5 hero-section-overlay"  style={{
        display: 'flex',          
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '100%',          
        position: 'relative', 
        minHeight: '60vh',
      }}>
        <div className="hero-content positions-div" style={{ textAlign: 'center', zIndex: 2, height: '100%', overflow: 'hidden'}}>
          <h1 style={{ fontSize: '23px'}}>{t("home.positionsTitle")}</h1>
          <p className="POSITION-HERO">{t("home.positionsText")}</p>
          <AvailablePositions onApplyClick={onApplyClick} />

        </div>
        <div className="overlay"  style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}></div>
      </section>

    </div>
  );
}

export default Home;
