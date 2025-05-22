import { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import LogoImage from '../assets/images/logo.png';
import SearchOverlay from "./SearchOverlay";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const { t} = useTranslation();
  const [showSearch, setShowSearch] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // referens för navbaren för klick utanför
  const navbarRef = useRef(null);
  // används för att stänga mobilmenyn när man navigerar till en ny sida
  const location = useLocation(); 

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
    <Navbar ref={navbarRef} expand="lg"  fixed="top" style={{ backgroundColor: '#f7f4f0' }}
    variant="dark" className="shadow-sm py-2" expanded={expanded}>
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

        <div className="d-lg-none me-2 text-black" onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }}>
          <FaSearch size={20} />
        </div>

        <Navbar.Toggle aria-controls="navbar-nav" className="mx-5" style={{ backgroundColor: 'black', borderColor: 'black' }} onClick={() => setExpanded(!expanded)}/>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center mx-5">
          <Nav.Link as={Link} to="/" className="text-black">{t('header.home')}</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-black">{t('header.about')}</Nav.Link>
          <Nav.Link as={Link} to="/services" className="text-black">{t('header.services')}</Nav.Link>
          <Nav.Link as={Link} to="/blog" className="text-black">{t('header.blog')}</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-black">{t('header.contact')}</Nav.Link>
          <LanguageSwitcher />
          <div className="d-none d-lg-block ms-3 text-black" onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }}>
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
