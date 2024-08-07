import React from "react";
import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import {
  EnvelopeFill,
  Facebook,
  GeoAlt,
  Instagram,
  Telephone,
  Twitter,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid className="bg-white text-dark p-5">
      <Row className="justify-content-center">
        <Col md={2}>
          <h5 style={{ fontWeight: "bold" }}>Company Info</h5>
          <Nav className="flex-column">
            <NavLink className="text-muted">About Us</NavLink>
            <NavLink className="text-muted">Carrier</NavLink>
            <NavLink className="text-muted">We are hiring</NavLink>
            <NavLink className="text-muted">Blog</NavLink>
          </Nav>
        </Col>
        <Col md={2}>
          <h5 style={{ fontWeight: "bold" }}>Legal</h5>
          <Nav className="flex-column">
            <NavLink className="text-muted">About Us</NavLink>
            <NavLink className="text-muted">Carrier</NavLink>
            <NavLink className="text-muted">We are hiring</NavLink>
            <NavLink className="text-muted">Blog</NavLink>
          </Nav>
        </Col>
        <Col md={2}>
          <h5 style={{ fontWeight: "bold" }}>Features</h5>
          <Nav className="flex-column">
            <NavLink className="text-muted">Business Marketing</NavLink>
            <NavLink className="text-muted">User Analytic</NavLink>
            <NavLink className="text-muted">Live Chat</NavLink>
            <NavLink className="text-muted">Unlimited Support</NavLink>
          </Nav>
        </Col>
        <Col md={2}>
          <h5 style={{ fontWeight: "bold" }}>Resources</h5>
          <Nav className="flex-column">
            <NavLink className="text-muted">iOS & Android</NavLink>
            <NavLink className="text-muted">Watch a Demo</NavLink>
            <NavLink className="text-muted">Customers</NavLink>
            <NavLink className="text-muted">API</NavLink>
          </Nav>
        </Col>
        <Col md={4}>
          <h5 style={{ fontWeight: "bold" }}>Get In Touch</h5>
          <div className="flex-column text-center">
            <p className="text-muted">
              <Telephone size={20} className="text-primary" /> (480) 555-0103
            </p>
            <p className="text-muted">
              <GeoAlt size={20} className="text-primary" /> 4517 Washington Ave.
              Manchester, Kentucky 39495
            </p>
            <p className="text-muted">
              <EnvelopeFill size={20} className="text-primary" />{" "}
              debra.holt@example.com
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <p className="text-muted">
            Made With Love By Figmaland All Right Reserved{" "}
          </p>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-center">
            <Facebook size={20} className="text-primary mx-3" />
            <Instagram size={20} className="text-primary mx-3" />
            <Twitter size={20} className="text-primary mx-3" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
