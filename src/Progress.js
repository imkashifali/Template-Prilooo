import React from "react";
import "./Progress.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import gp from "./assests/gp.png";

const Progress = () => {
  return (
    <div class="container-fluid conatiners ">
      <div class="row">
        <div class="col pskill">
          <h5 class="heading">Professional Skills</h5>

          <p class="pargraph">UI/UX DESGIN 75%</p>
          <ProgressBar variant="success" now={75} class="prog" />
          <p class="pargraph">WEB DEVELOPMENT 90%</p>

          <ProgressBar variant="success" now={90} class="prog" />
          <p class="pargraph">MARKETING 65%</p>

          <ProgressBar variant="success" now={65} class="prog" />
        </div>

        <div class="col">
          <img src={gp} alt="" class="images" />
        </div>
      </div>
    </div>
  );
};

export default Progress;
