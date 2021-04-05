import React from "react";
import "./Forms.css";
const Forms = () => {
  return (
    <div class="container-fluid containers">
      <div class=" Forms">
        <h3 class="Form__project">Need A Project?</h3>
        <div class="row">
          <div class="col-lg-12">
            <p class="Form__Paragraph ">
              Let us know what you're looking for in an agency.We 'll take a
              <br />
              look and see if this could be the start of something beatiful.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <form>
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    class="form-control master"
                    placeholder="Your Name"
                  />
                  <label class="form-label" for="form3Example1"></label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    class="form-control master"
                    placeholder="Your Email"
                  />
                  <label class="form-label" for="form3Example2"></label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input
                type="email"
                id="form3Example3"
                class="form-control master"
                placeholder="Your Email"
              />
              <label class="form-label" for="form3Example3"></label>
            </div>

            <div class="form-outline mb-4">
              <textarea
                type="password"
                id="form3Example4"
                class="form-control master"
                rows="5"
                placeholder="Your Comment"
              />
              <label class="form-label" for="form3Example4"></label>
            </div>
            <div>
              <button class=" Form__Button btn-block mb-4">
                SEND MESSAGE{" "}
              </button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default Forms;
