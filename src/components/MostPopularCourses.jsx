import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhiteBox from "./WhiteBox";
import Testimony from "./Testimony";

const MostPopularCourses = () => {
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
          <Testimony
            image="../../public/images/testimonial-user-cover-103.png"
            rating={4}
            text="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
          />
        </Col>
        <Col md={4}>
          <Testimony
            image="../../public/images/testimonial-user-cover-104.png"
            rating={4}
            text="Slate helps you see  how many more days you need to work to reach your financial goal for the month and year."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MostPopularCourses;
