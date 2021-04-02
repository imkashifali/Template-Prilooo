import React from "react";
import "./Supports.css";
import {
  Star,
  Lightbulb,
  Bag,
  Terminal,
  Phone,
  Cast,
  App,
} from "react-bootstrap-icons";
const Supports = () => {
  return (
    <div class="container-fluid conatiners">
      <div class="row">
        <div class="col-md-3">
          <Bag height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">UI/UX DESGIN</p>
          <span class="Supports__span">
            Be set fourth land god darkness <br class="pa" />
            make it wherein own
          </span>
        </div>
        <div class="col-md-3">
          <Terminal height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">WEB DEVELOPMENT </p>
          <span class="Supports__span">
            A she'd them bring void moving third she'd kind fill
          </span>
        </div>
        <div class="col-md-3">
          <Phone height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">APP/MOBILE</p>
          <span class="Supports__span">
            Dominion man second spirit he earth they, are creeping.
          </span>
        </div>
        <div class="col-md-3">
          <Bag height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">Controller</p>
          <span class="Supports__span">
            Morning his saying moveth it multiple appear life be.
          </span>
        </div>
      </div>
      <div class="row">
      <div class="col-md-3">
          <Cast height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">SEO/MARKETING</p>
          <span class="Supports__span">
            Give won't after land fill creeping meat you may
          </span>
        </div>
        <div class="col-md-3">
          <Star height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">PHOTOGRAPH</p>
          <span class="Supports__span">
            Creepeth one seas cattle grass give moving saw give
          </span>
        </div>
        <div class="col-md-3">
          {" "}
          <Lightbulb height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">GRAPHIC DESGINER</p>
          <span class="Supports__span">
            Open great whales air rule for.Fourth life whale
          </span>
        </div>
        <div class="col-md-3">
          {" "}
          <App height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">ILLUSTRATIONS</p>
          <span class="Supports__span">
            Whales likness hath man kind for them air two won't
          </span>
        </div>
      </div>
    </div>
  );
};

export default Supports;
