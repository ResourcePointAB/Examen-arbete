import { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import LogoImage from '../assets/images/logo.png';
import SearchOverlay from "./SearchOverlay";

function Header() {
  // visning av sök-overlay
  const [showSearch, setShowSearch] = useState(false);
  // state för att hantera om navbaren är expanderad eller inte
  const [expanded, setExpanded] = useState(false);
  // referens för navbaren för klick utanför
  const navbarRef = useRef(null);
  // används för att stänga mobilmenyn när dman navigerar till en ny sida
  const location = useLocation(); 

  //Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !(navbarRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setExpanded(false);
  }, [location]);


  return (
    <>
    <Navbar ref={navbarRef} expand="lg" bg="dark" variant="dark" className="shadow-sm py-2" expanded={expanded}>
      <Container>
       
        <Navbar.Brand as={Link} to="/">
          <img
            src={LogoImage}
            alt="ResourcePoint Logo"
            width="150"
            height="auto"
            className="d-inline-block align-top logo-image"
          />
        </Navbar.Brand>

        <div className="d-lg-none me-2 text-white" onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }}>
          <FaSearch size={20} />
        </div>

        <Navbar.Toggle aria-controls="navbar-nav"  className=" mx-5" onClick={() => setExpanded(!expanded)}/>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center  mx-5">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/careers" className="text-white">Careers</Nav.Link>
            <Nav.Link as={Link} to="/clients" className="text-white">Clients</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>

            <div className="d-none d-lg-block ms-3 text-white" onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }}>
              <FaSearch size={18} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <SearchOverlay isOpen={showSearch} onClose={() => setShowSearch(false)} /> 
  </> 
);
}

export default Header;
