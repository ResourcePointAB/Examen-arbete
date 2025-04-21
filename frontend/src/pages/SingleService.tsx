import { useParams } from "react-router-dom";
import "../assets/styles/singleService.css";

import ServiceImage from '../assets/images/service.jpg';
import TalantImage from '../assets/images/talant.jpg';
import WorkImage from '../assets/images/work.jpg';

function SingleService() {
  const { serviceId } = useParams();

  const serviceData: Record<string, { title: string; description: string; image: string; }> = {
    individuals: {
      title: "Private Individuals Products & Services",
      description:
        "We offer tailored digital solutions for individuals including financial planning, tech support and personal development tools.",
        image: ServiceImage
    },
    business: {
      title: "Small & Medium Business Clients Acquisition",
      description:
        "We support SMEs with customized software, CRM integration, and strategic consultancy to help scale sustainably.",
        image: TalantImage
    },
    corporate: {
      title: "Corporate Clients & Services",
      description:
        "Enterprise-level support for digital transformation, security, infrastructure optimization and training services.",
        image: WorkImage
    },
  };

  const content = serviceData[serviceId || ""];

  if (!content) {
    return <p>Service not found</p>;
  }

  return (
    <div className="single-service container">
      <section className="text-center mb-4 service-single-header">
        <h1>{content.title}</h1>
        <div className="single-servie-hero">
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
        </div>
      </section>
      <section>
        <p className="fs-5">{content.description}</p>
        <img src={content.image} alt={content.title} className="img-fluid serviceImg mt-3" />
      </section>
    </div>
  );
};

export default SingleService;

