import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-md-4 col-sm-6 ">
          <h6 class="Footers pl-5">Piroll Desgin, Inc</h6>
          <p class="Footer__Para pl-5">
            @2017 Piroll All Right reserved <br />
            Desgin By Priloo
          </p>
        </div>
        <div class="col-md-3 col-sm-6 ">
          <ul class="list-unstyled text-small">
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Hello@Prilo.com
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                +44635573665
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-6 ">
          <ul class="list-unstyled text-small">
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#" alt="">
                Project
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                About
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Services
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-1 col-sm-6 ">
          <ul class="list-unstyled text-small">
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                News
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Event
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Contact
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Legals
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-6">
          <ul class="list-unstyled text-small">
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Instagram
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Facebook
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Youtube
              </a>
            </li>
            <li class="Footers__Li">
              <a class="text-muted text-decoration-none" href="#">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
