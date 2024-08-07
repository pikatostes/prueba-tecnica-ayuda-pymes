import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const CardFAQ = () => {
  return (
    <Card
      className="bg-white p-4 align-items-center"
    >
      <Row>
        <Col xs={2}>
          <ArrowRight />
        </Col>
        <Col xs={10}>
          <h5 style={{ fontWeight: "bold" }}>the quick fox jumps over the lazy dog</h5>
          <h6>Things on a very small scale behave like nothing</h6>
        </Col>
      </Row>
    </Card>
  );
};

export default CardFAQ;
