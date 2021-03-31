import React from "react";
import "./Progress.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import gp from "./assests/gp.png";

const Progress = () => {
  return (
    <Container fluid className="conatiners">
      <Row>
        <Col className="pskill">
          <h5 className="heading">Professional Skills</h5>

          <p className="pargraph">UI/UX DESGIN 75%</p>
          <ProgressBar variant="success" now={75} className="prog" />
          <p className="pargraph">WEB DEVELOPMENT 90%</p>

          <ProgressBar variant="success" now={90} className="prog" />
          <p className="pargraph">MARKETING 65%</p>

          <ProgressBar variant="success" now={65} className="prog" />
        </Col>

        <Col>
          <img src={gp} alt="" className="images" />
        </Col>
      </Row>
    </Container>
  );
};

export default Progress;
