import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm py-2">
      <Container>
       
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://www.resourcepoint.se/wp-content/uploads/2020/08/logo.png"
            alt="ResourcePoint Logo"
            width="150"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Mobil toggle-knapp */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
            <Nav.Link as={Link} to="/clients">Clients</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/search" className="ms-3">
              <FaSearch size={18} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
