import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-sm-4">
          <h6 class="Footers pl-5">Piroll Desgin, Inc</h6>
          <p class="Footer__Para pl-5">
            @2017 Piroll All Right reserved <br />
            Desgin By Priloo
          </p>
        </div>
        <div class="col-sm-3">
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted text-decoration-none" href="#">
                hello@Prilo.com
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                +44635573665
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-2">
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Project
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                About
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Services
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-1">
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted text-decoration-none" href="#">
                News
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Event
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Contact
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Legals
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-2 col-md">
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Youtube
              </a>
            </li>
            <li>
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
