import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardFAQ from "./CardFAQ";

const FAQ = ({ numberOfFAQs }) => {
  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column justify-content-center"
    >
      <Row className="justify-content-center align-items-center text-white text-center mb-4">
        <Col>
          <h2 style={{ fontWeight: "bold" }}>FAQ</h2>
          <p className="w-50 mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </Col>
      </Row>
      <Row className="mx-5">
        {Array.from({ length: numberOfFAQs }, (_, index) => (
          <Col key={index} md={4} className="mb-3">
            <CardFAQ />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FAQ;
