import React from "react";
import { Card, Image } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const Testimony = ({ image, text, rating }) => {
  return (
    <Card className="text-center bg-white p-4 align-items-center">
      <Image src={image} roundedCircle height={100} />
      <p className="text-muted w-50 mt-3">{text}</p>
      {/* for loop to show stars depending on variable */}
      <div className="d-flex justify-content-center mb-3">
        {Array.from({ length: rating }, (_, index) => (
          <StarFill key={index} className="text-warning" />
        ))}
      </div>

      <h5 style={{ fontWeight: "bold" }}>Regina Miles</h5>
      <span className="text-muted">Designer</span>
    </Card>
  );
};

export default Testimony;
