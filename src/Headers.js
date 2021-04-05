import React from "react";
import "./Headers.css";

const Headers = () => {
  return (
    <div class="container-fluid headers">
      <div class="row">
        <div class="col-md-6 col-sm-6"></div>
        <div class="col-md-6 col-sm-6">
          <h1 class="headers__heading">We Desgin And Develop</h1>
          <p class="headers__Paragraph">
            we are a new design studio based in USA.we Have over
            <br /> 20 years of combined experince and know a thing two
            <br />
            about desiging websites and mobile apps
            <br />
          </p>

          <button class="headers__Button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
