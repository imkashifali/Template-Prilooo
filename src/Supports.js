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
    <div class="container-fluid  Supports__conatiner">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <Bag height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">UI/UX DESGIN</p>
          <span class="Supports__span">
            Be set fourth land god darkness <br class="pa" />
            make wherein own
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
          <Terminal height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">WEB DEVELOPMENT </p>
          <span class="Supports__span">
            A she'd them bring void moving<br class="pa" /> third she'd kind fill
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
          <Phone height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">APP/MOBILE</p>
          <span class="Supports__span">
            Dominion man second spirit<br class="pa" /> he earth they, are creeping.
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
          <Bag height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">Controller Master</p>
          <span class="Supports__span">
            Morning his saying moveth it<br class="pa" /> multiple appear life be.
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <Cast height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">SEO/MARKETING</p>
          <span class="Supports__span">
            Give won't after land fill creeping <br class="pa" />meat you may
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
          <Star height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">PHOTOGRAPH</p>
          <span class="Supports__span">
            Creepeth one seas cattle grass <br class="pa" />give moving saw give
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
          {" "}
          <Lightbulb height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">GRAPHIC DESGINER</p>
          <span class="Supports__span">
            Open great whales air rule for.<br class="pa" />Fourth life whale
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
          {" "}
          <App height={100} width={90} color="black" class="Supports" />
          <p class="Supports__para">ILLUSTRATIONS</p>
          <span class="Supports__span">
            Whales likness hath man<br class="pa" /> kind for them air two won't
          </span>
        </div>
      </div>
    </div>
  );
};

export default Supports;
