import "../assets/styles/global.css";
import "../assets/styles/careers.css";
import { Button } from "react-bootstrap";

function Careers() {
  return (
    <>
    <div className="careers-hero container">
      <section>
        <h1>Careers</h1>
        <p>Resource Point AB team is a diverse network of consultants and industry professionals.</p>
        <Button>View all available positions</Button>
      </section>

      <section>
        <h1>Let’s work together</h1>
        <p>The Best Financial Consulting Firm You Can Count On!</p>
        <h4>Please install and activate Contact Form 7 plugin.</h4>
      </section>
      
      <section>
        <h1>If you have the idea we will find the right way</h1>
        <p>We're here to inform which tactics need funding and which aredrain resources. Real-time will have multiple touchpoints.</p>
        <Button>View all available positions</Button>
      </section>
    </div>
    </>
  );
}

export default Careers;
