import React from "react";
import "./Services.scss";
import "../../../sass/global.scss";
import HeartEmoji from "../../../img/heartemoji.png";
import Card from "./Cards/Card";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span> Service</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Quibusdam vitae ad sequi debitis,
        </span>
        <div className="blur s-blur" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "10rem", top: "-4rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Booking"}
            detail={"............................."}
          />
        </div>
        <div style={{ left: "3rem", top: "12rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Doctor"}
            detail={"............................."}
          />
        </div>
        <div style={{ left: "19rem", top: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Patient"}
            detail={"............................."}
          />
        </div>
        <div style={{ left: "26rem", top: "-2rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Feedback"}
            detail={"............................."}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
