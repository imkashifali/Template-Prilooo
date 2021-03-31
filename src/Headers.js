import React from "react";
import "./Headers.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Headers = () => {
  return (
    <div>
      <Container fluid className="headers">
        <Row>
          <Col></Col>
          <Col>
            <h1 className="headers__heading">We Desgin And Develop</h1>
            <p className="headers__Paragraph">
              we are a new design studio based in USA.we Have over
              <br /> 20 years of combined experince and know a thing two
              <br />
              about desiging websites and mobile apps
              <br />
            </p>

            <button className="headers__Button">CONTACT US</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Headers;
