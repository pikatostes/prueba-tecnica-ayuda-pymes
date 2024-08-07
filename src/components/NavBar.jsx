import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import '../css/style.css';  // Importa el archivo CSS personalizado
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar vh-10">
      <Navbar.Brand as={Link} to="/" className="mx-3">BrandName</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
          <Nav.Link as={Link} to="#" className="mx-2">Product</Nav.Link>
          <Nav.Link as={Link} to="#" className="mx-2">Pricing</Nav.Link>
          <Nav.Link as={Link} to="#" className="mx-2">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-light" as={Link} to="#" className="custom-login-button mx-2">
            Login
          </Button>
          <Button variant="primary" as={Link} to="#" className="custom-joinus-button ml-3">
            JOIN US →
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
