import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Adoption.css";
import { Link } from "react-router-dom";
import logo from "./image5.svg";
import { useNavigate } from "react-router-dom";

const Adoption = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="adoption-container">
        <div className="adoption-header">
          <div className="adoption-content">
            <div className="adoption-inner">
              <img style={({ height: 1 }, { padding: 10 })} src={logo} />
              <h2>
                <Link to="/adopt">Back</Link>
              </h2>
            </div>

            <h1 className="adoption-title">Adoption Form</h1>
          </div>
        </div>

        <Form>
          <div className="adoption-form">
            <div class="form-row">
              <div class="form-group1 col-md-6">
                <label for="inputFirstName">First Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputFirstName"
                  placeholder="First Name"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputLastName">Last Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="inputAddress1">Address Line 1:</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress1"
                placeholder="Street name and number"
              />
            </div>

            <div class="form-group">
              <label for="inputAddress2">Address Line 2:</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Suite, apartment"
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputZip">Zip code:</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group1 col-md-6">
                <label for="inputFirstName">Phone number:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPhoneNumber"
                  placeholder="Phone number"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmailAddress">Email address:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmailAddress"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="status-form">
              <h3 className="title">Family status and daily routine</h3>
              <h4 className="title">Do you have children?</h4>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>

              <div class="form-group">
                <label for="text">
                  If you answered "Yes", please tell us a little bit about their
                  experience and confort level around animals.
                </label>
                <textarea class="form-control" id="text" rows="5"></textarea>
              </div>
            </div>

            <h4 className="title">Do you have pets at home?</h4>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>

            <div class="form-group">
              <label for="text">
                If you answered "Yes", please tell us a little bit about their
                experience and confort level around other animals.
              </label>
              <textarea class="form-control" id="text" rows="5"></textarea>
            </div>

            <div className="button">
              <button
                className="back"
                onClick={() => {
                  navigate("/adopt");
                }}
              >
                Back
              </button>
              <button
                className="submit"
                onClick={() => {
                  navigate("/adopt");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Adoption;
