import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const CustomNavbar = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* Top Contact Bar */}
      <div className=" top-bar d-flex justify-content-between align-items-center px-3 py-1">
        <div>
          <span className="me-3"><FaPhoneAlt /> +254 712 345 678</span>
          <span><FaEnvelope /> info@bloodconnect.com</span>
        </div>
        <div className="social-icons">
          <a href="#" className="me-2"><FaTwitter /></a>
          <a href="#" className="me-2"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="images/Donate1.png"
              alt="BloodConnect Logo"
              width="40"
              height="40"
              className="me-2"
            />
            <span className="fw-bold text-danger">BloodConnect</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign In</Nav.Link>
              <button className="btn btn-danger ms-2" onClick={()=>navigate('/addDrive')}>Host a bloodDrive </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
