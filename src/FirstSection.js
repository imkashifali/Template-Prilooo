import React from "react";
import "./FirstSection.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "./assests/bg.png";
const FirstSection = () => {
  return (
    <Container fluid>
      <Row>
        <img src={bg} alt="" />

        <div class="text-block">
          <h1 className="heading">We Desgin And Develop</h1>
          <p className="test">
            we are a new design studio based in USA.we Have over
            <br /> 20 years of combined experince and know a thing two
            <br />
            about desiging websites and mobile apps
            <br />
          </p>

          <button className="btn">CONTACT US</button>
        </div>
      </Row>
    </Container>
  );
};

export default FirstSection;
