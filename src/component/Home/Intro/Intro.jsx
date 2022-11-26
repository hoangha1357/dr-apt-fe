import React from "react";
import "./Intro.scss";
import "../../../sass/global.scss";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Layer4.png";
import thumbup from "../../../img/thumbup.png";
import Crown from "../../../img/crown.png";
import glassesimoji from "../../../img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv/FloatingDiv";
// import { HiArrowDown } from "react-icons/hi";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello!</span>
          <span>I am Doctor</span>
          <span>
            lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit
            amet, consectetur adip,lorem ipsum dolor sit amet, consectetur
            adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor
            sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur
            adip,lorem ipsum dolor sit amet, consectetur adip
          </span>
        </div>
        <div className="box-button">
          <button className="button i-button">Say Hi</button>
          <button className="button-Opposition i-button">
            Discovery our services
          </button>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={glassesimoji} alt="" />
        <div className="" style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="..." txt2="..." />
        </div>
        <div className="" style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="..." txt2="..." />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
