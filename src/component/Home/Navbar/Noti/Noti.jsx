import React from "react";
import {Data} from "./Data.jsx"
import "./Noti.scss"
// import "./style.scss"

function Noti(props) {
    return (props.trigger) ? (
        <div class="box-noti">
            <div class="border"></div>
            <div class="container-noti">
              <div class="title">
                <h1 class="text">Thông Báo</h1>
                <box-icon name='dots-horizontal-rounded' ></box-icon>
              </div>

              <div class="list-noti">
                <div class="title">
                  <span class="new">Mới</span>
                  <span class="all">Xem tất cả</span>
                </div>

                <ul class="list">
                  
                {Data.map((Data,index) => {
                    return(<li key= {index} >
                    <div class="day">
                      <span>{Data.Date}</span>
                      <span>{Data.Month}</span>
                    </div>
                    <div class="wall">
                      <div class="cirle"></div>
                      <div class="line"></div>
                    </div>
                    <ul class="content">
                      <li>
                        <h1 class="main-text">{Data.Title}</h1>
                        <span class="sub-text"> {Data.SubTitle}</span>
                        <span class="time">{Data.Time}</span>
                      </li>
                    </ul>
                  </li>);
                })}
                </ul>
              </div>
            </div>
          </div>
    ) : "";
}
export default Noti