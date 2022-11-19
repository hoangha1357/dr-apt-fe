import React from "react";
import "./Card-doctor.scss";

const CardDoctor = ({ emoji, heading, detail }) => {
  return (
    <div className="card__doctor">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default CardDoctor;
