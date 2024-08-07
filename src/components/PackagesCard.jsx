import React from "react";
import { Button, Card } from "react-bootstrap";
import { ArrowRight, Download, StarFill } from "react-bootstrap-icons";

const PackagesCard = ({ width }) => {
  return (
    <Card style={{ width: width }} className="p-0">
      <Card.Img
        variant="top"
        src="../../public/images/product-cover-124 sec-.png"
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <h6 className="text-primary" style={{ fontWeight: "bold" }}>
            Welcome
          </h6>
          <div className="text-white bg-dark align-items-center d-flex rounded">
            <StarFill size={20} className="text-warning mx-1" />
            <span className="mx-1">4.5</span>
          </div>
        </div>
        <Card.Title style={{ fontWeight: "bold" }}>Training Courses</Card.Title>
        <Card.Text className="text-muted">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </Card.Text>
        <Card.Text>
          <Download size={20} />
          <span className="mx-1"> 15 sales</span>
        </Card.Text>
        <Card.Text>
          <span className="text-muted">$16.48</span>
          <span
            className="text-warning mx-2"
            style={{ fontWeight: "bold", fontSize: "125%" }}
          >
            $6.48
          </span>
        </Card.Text>
        <Button variant="outline-primary" className="p-1">
          Learn More <ArrowRight size={20} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PackagesCard;
