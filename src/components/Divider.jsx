import React from "react";

const Divider = ({ width }) => {
  return (
    <div
      className="divider"
      style={{
        backgroundColor: "#E74040",
        height: "5px",
        width: width,
        margin: "15px 0 15px 0",
        borderRadius: "5px",
      }}
    ></div>
  );
};

export default Divider;
