import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Divider from "./Divider";

const WhiteBox = ({ image, title, text }) => {
  return (
    <Card className="text-center bg-white p-4 align-items-center">
      {image}
      <h5 style={{ fontWeight: "bold" }}>{title}</h5>
      <Divider width="25%" />
      <p className="text-muted w-50">{text}</p>
    </Card>
  );
};

export default WhiteBox;
