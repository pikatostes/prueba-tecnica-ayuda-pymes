import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "../css/style.css"; // Importa el archivo CSS personalizado

const Home = () => {
  return (
    <Container fluid className="background-image">
      <Container className="hero-section vh-100" fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-white">
            <div className="w-75">
              <h5>Join Us</h5>
              <h1>25K+ STUDENTS TRUST US</h1>
              <h4>
                Every day brings with it a fresh set of learning possibilities.
              </h4>
              <div>
                <Button variant="primary" className="p-3">
                  Join Us
                </Button>
                <Button variant="outline-light" className="p-3">
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Image src="/public/images/landing.png" alt="Hero" fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
