import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./assests/logo.png";
import "./Navbars.css";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav.Link href="#home" className="NavLink_Active">
          HOME
        </Nav.Link>
        <Nav.Link href="#ABOUT" className="NavLink">
          ABOUT
        </Nav.Link>
        <Nav.Link href="#WORK" className="NavLink">
          WORK
        </Nav.Link>
        <Nav.Link href="#PROCESS" className="NavLink">
          PROCESS
        </Nav.Link>
        <Nav.Link href="#SERVICES" className="NavLink">
          SERVICES
        </Nav.Link>
        <Nav.Link href="#TESTIMONIALS" className="NavLink">
          TESTIMONIALS
        </Nav.Link>
        <Nav.Link href="#CONTACT" className="NavLink">
          CONTACT
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
