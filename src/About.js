import React from "react";
import "./About.css";
import signature from './assests/signature.png'
const About = () => {
  return (
    <div class="container-fluid">
    <div class="jumbotron text-center">
      <h1 class="heading">ABOUT US</h1>
      <p class="para">
        The fundamental principles by which Wikipedia operates are the five
        pillars
        <br /> developed many policies and guidelines to improve the
        encyclopedia; however
        <br /> requirement to be familiar with .
      </p>
      <img src={signature} class="img-fluid" alt="..."/>
    </div>
    </div>
  );
};

export default About;
