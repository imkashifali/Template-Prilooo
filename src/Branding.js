import React from "react";
import "./Branding.css";
import { Star, Alarm, Bag, Heart } from "react-bootstrap-icons";

const Branding = () => {
  return (
    <div class="container" className="Branding">
      <div class="row">
        <div class="col-sm">
          <Bag
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">548</p>
            <span className="branding__pa">Project Completed</span>
          </div>
        </div>

        <div class="col-sm">
          <Alarm
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">1465</p>
            <span className="branding__pa">Working Hours</span>
          </div>
        </div >
        <div class="col-sm">
          {" "}
          <Star
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">612</p>
            <span className="branding__pa">Positive FeedBack</span>
          </div>
        </div>

        <div class="col-sm">
          {" "}
          <Heart
            height={42}
            width={32}
            color="white"
            className="branding__Icons"
          />
          <div className="branding__divs">
            <p className="branding__pa">548</p>
            <span className="branding__pa">Happy Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
