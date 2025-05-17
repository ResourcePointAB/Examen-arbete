import { useParams } from "react-router-dom";
import "../assets/styles/singleService.css";

import ServiceImage from '../assets/images/service.jpg';
import TalantImage from '../assets/images/talant.jpg';
import WorkImage from '../assets/images/work.jpg';
import serviceHero from '../assets/images/service-hero.jpg';
import { useTranslation } from 'react-i18next';

function SingleService() {
  const { serviceId } = useParams();
  const { t } = useTranslation();

  // const serviceData: Record<string, { title: string; description: string; image: string; }> = {
  //   individuals: {
  //     title: "Private Individuals Products & Services",
  //     description:
  //       "We offer tailored digital solutions for individuals including financial planning, tech support and personal development tools.",
  //       image: ServiceImage
  //   },
  //   business: {
  //     title: "Small & Medium Business Clients Acquisition",
  //     description:
  //       "We support SMEs with customized software, CRM integration, and strategic consultancy to help scale sustainably.",
  //       image: TalantImage
  //   },
  //   corporate: {
  //     title: "Corporate Clients & Services",
  //     description:
  //       "Enterprise-level support for digital transformation, security, infrastructure optimization and training services.",
  //       image: WorkImage
  //   },
  // };
  const serviceData: Record<string, { title: string; description: string; image: string; }> = {
    individuals: {
      title: "servicesingle.individuals.title",
      description: "servicesingle.individuals.description",
      image: ServiceImage,
    },
    business: {
      title: "servicesingle.business.title",
      description: "servicesingle.business.description",
      image: TalantImage,
    },
    corporate: {
      title: "servicesingle.corporate.title",
      description: "servicesingle.corporate.description",
      image: WorkImage,
    },
  };
  

  const content = serviceData[serviceId || ""];

  if (!content) {
    return <p>Service not found</p>;
  }

  return (
    <div className="single-service container">
      <section className="text-center mb-4 service-single-header" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${serviceHero})`,
          backgroundSize: "cover",
          position: "relative",
          height: "60vh",
          backgroundPosition: "center 33%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          }}>
        <h1>{t(content.title)}</h1>
        <div className="service-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
        </div>
      </section>
      <section className="service-single-content d-flex align-items-start gap-4">
        <div className="w-50 text-start" style={{ textAlign: 'left' }}>
          <p className="fs-5">{t(content.description)}</p>
        </div>
        <div className="w-40">
          <img src={content.image} alt={content.title} className="img-fluid serviceImg" style={{ maxWidth: '100%', height: 'auto',maxHeight:'200px', objectFit: 'cover' }} 
 />
        </div>
      </section>
    </div>
  );
};

export default SingleService;

