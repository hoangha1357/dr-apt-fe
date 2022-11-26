import React from "react";
import "./Staff.scss";
import CardDoctor from "./Cards/Card-doctor.jsx";
import HeartEmoji from "../../../img/heartemoji.png";
import "../../../sass/global.scss";

const Staff = () => {
  return (
    <div className="List__Staff">
      <div className="List__title">
        <h2 className="Title">Medical Staff</h2>
        <a className="show-all">all doctor</a>
      </div>
      <div className="Container__staff">
        <CardDoctor
          emoji={HeartEmoji}
          heading={"Booking"}
          detail={"................"}
        />

        <CardDoctor
          emoji={HeartEmoji}
          heading={"Booking"}
          detail={"..................."}
        />

        <CardDoctor
          emoji={HeartEmoji}
          heading={"Booking"}
          detail={"..................."}
        />

        <CardDoctor
          emoji={HeartEmoji}
          heading={"Booking"}
          detail={".................."}
        />
      </div>
    </div>
  );
};

export default Staff;
