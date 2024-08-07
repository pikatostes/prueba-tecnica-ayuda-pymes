import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackagesCard from "./PackagesCard";

const ApprodablePackages = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="justify-content-center align-items-center text-white text-center">
        <h6 style={{ fontWeight: "bold" }} className="text-primary">
          Practice Advice
        </h6>
        <h2 style={{ fontWeight: "bold" }}>Approdable Packages</h2>
        <p className="w-50">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </Row>
      <Row className="d-flex justify-content-center align-items-center w-100">
        <Col xs={12} md={3} className="mb-5">
          <PackagesCard />
        </Col>
        <Col xs={12} md={3}>
          <PackagesCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ApprodablePackages;
