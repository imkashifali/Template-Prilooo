import React from "react";
import "./Work.css";
import ab from "./assests/ab.png";
import cd from "./assests/cd.png";
const Work = () => {
  return (
    <div class="container-fluid ">
      <div class="row counts">
        <div class="col-md-3 col-sm-6 ">
          <img src={ab} alt="" class="img-thumbnail ims" />
        </div>
        <div class="col-md-3 col-sm-6">
          <img src={cd} alt="" class="img-thumbnail ims" />
        </div>
        <div class="col-md-3 col-sm-6 ">
          <img src={ab} alt="" class="img-thumbnail ims" />
        </div>
        <div class="col-md-3  col-sm-6 ">
          <img src={cd} alt="" class="img-thumbnail ims" />
        </div>
      </div>

      <div class="row counts">
        <div class="col-md-3  ">
          <img src={cd} alt="" class="img-thumbnail ims" />
        </div>
        <div class="col-md-3 ">
          <img src={ab} alt="" class="img-thumbnail ims" />
        </div>
        <div class="col-md-3 ">
          <img src={cd} alt="" class="img-thumbnail ims" />
        </div>
        <div class="col-md-3 ">
          <img src={ab} alt="" class="img-thumbnail ims" />
        </div>
      </div>
    </div>
  );
};

export default Work;
