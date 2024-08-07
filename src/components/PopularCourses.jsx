import React from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Divider from "./Divider";
import { ArrowRight } from "react-bootstrap-icons";

const PopularCourses = () => {
  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Image src="/public/images/thumb-concept-16.png" alt="Hero" fluid />
        </Col>
        <Col md={5} className="d-flex justify-content-end">
          <div className="w-75">
            <Divider width="20%" />
            <h2 className="text-white mb-5 mt-5">Our Popular Courses</h2>
            <p className="text-white">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
            <NavLink href="#" className="text-primary">
              Learn more <ArrowRight size={20} />
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularCourses;
