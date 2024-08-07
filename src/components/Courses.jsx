import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/style.css";
import WhiteBox from "./WhiteBox";
import { Book, Building } from "react-bootstrap-icons";

const Courses = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="justify-content-center align-items-center text-white text-center">
      <h6 className="text-primary" style={{ fontWeight: "bold" }}>
            Practice Advice
          </h6>
          <h2 className="text-white" style={{ fontWeight: "bold" }}>
            Most Popular Courses
          </h2>
          <p className="text-white w-50" style={{ fontWeight: "bold" }}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="justify-content-center mb-5">
          <WhiteBox
            image={<Building className="text-primary mb-3" size={64} />}
            title="Expert instruction"
            text="The gradual accumulation and small-scale.."
          />
        </Col>
        <Col md={4}>
          <WhiteBox
            image={<Book className="text-warning mb-3" size={64} />}
            title="2769 online courses"
            text="The gradual accumulation and small-scale.."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
