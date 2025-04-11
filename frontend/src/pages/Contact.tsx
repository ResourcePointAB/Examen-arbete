import React, { useState } from "react";
import "../assets/styles/global.css";
import "../assets/styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }  

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    // Spara data i localStorage
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  
    // Skicka e-post via Web3Forms API
    const formPayload = new FormData();
    formPayload.append("access_key", "0984a5c4-eb6b-4bcf-8601-7b83fe4f470a");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Formuläret har skickats!");
      } else {
        alert("Det uppstod ett problem när du skickade formuläret.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error sending form data:", error.message); 
        alert("Det uppstod ett problem vid inskick.");
      } else {
        console.error("An unknown error occurred");
        alert("Det uppstod ett okänt problem vid inskick.");
      }
    }
  }  

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.message
    );
  };

  return (
    <div className="contact-hero container">
      <section className="contact">
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
            <div className="section_heading mb_25 d-flex flex-row align-items-center">
              <h2 className="mx-auto" style={{ width: "fit-content" }}>
                Kontakta oss
              </h2>
            </div>
            <p className="text-center fs-4 fw-bolder">
              Kontakta oss om frågor och intresseanmälan för skräddarsydda tjänster!
            </p>
            <div className="d-flex flex-row gap-5 justify-content-center pt-4">
              <p>
                <i style={{ color: "#fc5633" }} className="fas fa-envelope me-2"></i>
                info@Resourcepoint.se
              </p>
              <p>
                <i style={{ color: "#fc5633" }} className="fas fa-phone-alt me-2"></i>
                +46 76 023 49 30
              </p>
            </div>
            <div className="contact_form_area">
              <div className="col-xl-8 col-md-6 col-lg-7 mx-auto">
                <form
                  id="contact-form"
                  className="contact_form text-center"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <input
                        type="hidden"
                        name="access_key"
                        value="0984a5c4-eb6b-4bcf-8601-7b83fe4f470a"
                      />
                      <div className="form-group d-flex flex-column mb-3">
                        <label htmlFor="name">Namn *</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="T.ex. Johan Johansson"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group d-flex flex-column">
                        <label htmlFor="email">E-postadress *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="T.ex. Johan.johansson@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group d-flex flex-column">
                        <label htmlFor="phone">Telefonnummer *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="T.ex. 070 123 45 67"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group d-flex flex-column mb-3">
                      <label htmlFor="subject">Ämne</label>
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        placeholder="T.ex. Johan Johansson"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-12">
                      <div className="mb-3 d-flex flex-column">
                        <label htmlFor="message" className="form-label">
                          Meddelande *
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button
                        className="common_btn btn"
                        type="submit"
                        disabled={!isFormValid()} 
                      >
                        Skicka meddelande
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact_map_area">
            <div className="row mt_100 xs_mt_70">
              <div className="col-12">
                <div className="contact_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.728182484538!2d11.954548677186757!3d57.70408774003664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff368082e6509%3A0xad69b995cd02abd!2sResource%20Point%20AB!5e0!3m2!1ssv!2sse!4v1712242569889!5m2!1ssv!2sse"
                    style={{ border: "0", width: "100%", height: "500px" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <section>
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
