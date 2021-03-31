import React from "react";
import "./Work.css";
import ab from "./assests/ab.png";
import cd from "./assests/cd.png";
const Work = () => {
  return (
    <div class="container-fluid">
      <div class="row row-cols-4">
        <div class="col ims ">
          <img src={ab} alt="" />
        </div>
        <div class="col ims">
          <img src={cd} alt="" />
        </div>
        <div class="col ims">
          <img src={ab} alt="" />
        </div>
        <div class="col ims">
          <img src={cd} alt="" />
        </div>

        <div class="col ims">
          <img src={cd} alt="" />
        </div>
        <div class="col ims">
          <img src={ab} alt="" />
        </div>
        <div class="col ims">
          <img src={cd} alt="" />
        </div>
        <div class="col ims">
          <img src={ab} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
