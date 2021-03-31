import React from "react";
import "./Branding.css";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";

const Branding = () => {
  return (
    <Container fluid className="Branding">
      <Row>
        <Col>
          <Star
            height={62}
            width={62}
            color="white"
            className="branding__Icons"
          />
          <div className="divs">
            <p className="pa">548</p>
            <span>Project Completed</span>
          </div>
        </Col>

        <Col>Two</Col>
        <Col>Three</Col>

        <Col>Four</Col>
      </Row>
    </Container>
  );
};

export default Branding;
