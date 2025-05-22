import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from './components/Header';
import Footer from './components/Footer';
import SingleService from "./pages/SingleService"
import SearchPage from "./pages/Search";
import"./assets/styles/global.css"

import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";


function App() {
  const [show, setShow] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const handleShow = (positionTitle?: string) => {
    if (positionTitle) {
      setSelectedPosition(positionTitle);
    } else {
      setSelectedPosition(null);
    }
    setShow(true);
  };

  const handleClose = () => setShow(false);

    // Function to handle CV submit in the modal 
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      const formData = new FormData(e.target as HTMLFormElement);
      const formEntries = [...formData.entries()];
      console.log(formEntries);
  
      if (selectedPosition) {
        formData.append('positionTitle', selectedPosition);
      }
      console.log("Selected Position:", selectedPosition);
  
      const API_URL = typeof process !== 'undefined' && process.env.REACT_APP_API_URL
      ? process.env.REACT_APP_API_URL
      : "http://localhost:5000/api/apply";
      // :"https://resourcepoint.se/api/apply";
    
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          body: formData,
        });
  
        const result = await response.json();
        if (response.ok) {
          alert("Application submitted successfully!");
        } else {
          alert("Something went wrong: " + result.message);
        }
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          alert("Failed to submit application: " + err.message);
        } else {
          alert("An unknown error occurred.");
        }
      }
    }
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home onApplyClick={handleShow} />} />
        <Route path="/about" element={<About onApplyClick={handleShow} />}  />
        <Route path="/services" element={<Services onApplyClick={handleShow} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleService/:serviceId" element={<SingleService />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer/>

      {/* Modal för ansökan */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Online Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3">
              <Form.Label>Upload CV *</Form.Label>
              <Form.Control type="file" name="cv" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>firstName *</Form.Label>
              <Form.Control type="text" name="firstName" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>LastName *</Form.Label>
              <Form.Control type="text" name="lastName" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-post *</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City *</Form.Label>
              <Form.Control type="text" name="city" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone *</Form.Label>
              <Form.Control type="text" name="phone" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Experiences</Form.Label>
              <Form.Control as="textarea" name="experience" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control as="textarea"name="education"  rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>LinkedIn / GitHub / Portfolio</Form.Label>
              <Form.Control type="text" name="portfolio"/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Router> 
  );
}

export default App;
