import React from "react";
import "./Progress.css";
import { ProgressBar } from "react-bootstrap";
import gp from "./assests/gp.png";

const Progress = () => {
  return (
    <div class="container-fluid">
      <div class="row Progress__conatiners">
        <div class="col-md-6 col-sm-6  Progress__skill">
          <h5 class="Progress__Heading">Professional Skills</h5>

          <p class="Progress__pargraph">UI/UX DESGIN 75%</p>
          <ProgressBar variant="success" now={75} class="prog" />

          <p class="Progress__pargraph">WEB DEVELOPMENT 90%</p>
          <ProgressBar variant="success" now={90} class="prog" />

          <p class="Progress__pargraph">MARKETING 65%</p>
          <ProgressBar variant="success" now={65} class="prog" />
        </div>
        <div class="col-md-6 col-sm-6 Progress__skill">
          <img src={gp} class="img-fluid images" alt="Responsive image"></img>
        </div>
      </div>
    </div>
  );
};

export default Progress;
