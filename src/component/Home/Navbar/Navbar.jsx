import React from "react";
import { useState } from "react";
// import Toggle from "../Toggle/Toggle";
import 'boxicons'
import "./Navbar.scss";
import "../../../sass/global.scss";
import Noti from "./Noti/Noti.jsx"
const Navbar = () => {
  const [buttonNoti,setButtonNoti] = useState(false)
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">FANAXON</div>
        {/* <Toggle /> */}
      </div>
      <div className="n-mid">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="n-right">
         <box-icon name='search' ></box-icon>
         <box-icon onClick={() => setButtonNoti(!buttonNoti)} name='bell' ></box-icon>
      </div>
      <Noti trigger={buttonNoti}></Noti>
    </div>
  );
};
export default Navbar;
