import React from "react";
import "./Card.scss";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="#" className="c-button">
        show more
      </a>
    </div>
  );
};

export default Card;
