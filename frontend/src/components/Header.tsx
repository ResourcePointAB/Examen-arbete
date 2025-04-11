import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import LogoImage from '../assets/images/logo.png';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm py-2">
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

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/careers" className="text-white">Careers</Nav.Link>
            <Nav.Link as={Link} to="/clients" className="text-white">Clients</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
            <Nav.Link as={Link} to="/search" className="ms-3 text-white"><FaSearch size={18} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
