import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Adoption.css";
import { Link } from "react-router-dom";
import logo from "./images/image5.svg";
import { useNavigate } from "react-router-dom";

const Adoption = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  const Submit = (evt) => {
    evt.preventDefault();

    const form = {
      name: name,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      code: code,
      phoneNo: phoneNo,
      email: email,
    };
    props.transmit(form); //  Transmit form to Response.js

    setName("");
    setLastName("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setState("");
    setCode("");
    setPhoneNo("");
    setEmail("");
  };

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

        <Form onSubmit={Submit}>
          <div className="adoption-form">
            <div class="form-row">
              <div class="form-group1 col-md-6">
                <label>First Name:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div class="form-group col-md-6">
                <label>Last Name:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div class="form-group">
              <label>Address Line 1:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Street name and number"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label>Address Line 2:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Suite, apartment"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label>City</label>
                <input
                  type="text"
                  class="form-control"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
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
                <label>Phone number:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>

              <div class="form-group col-md-6">
                <label>Email address:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  navigate("/responses");
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
