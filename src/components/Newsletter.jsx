import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center"
      style={{ height: "70vh" }}
    >
      <Row className="justify-content-center align-items-center text-white text-center mb-4">
        <Col>
          <h6 style={{ fontWeight: "bold" }} className="text-primary">
            Newsletter
          </h6>
          <h2 style={{ fontWeight: "bold" }}>Get Quality Education</h2>
          <p className="w-50 mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <InputGroup style={{ height: "75px",}}>
            <Form.Control
              placeholder="Your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">Subscribe</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
