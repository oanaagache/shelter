import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdoptionForm.css";
import { Link } from "react-router-dom";
import logo from "./images/image5.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AdoptionForm = (props) => {
  const { name } = useParams();
  const [firstName, setFirstName] = useState("");
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
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      code: code,
      phoneNo: phoneNo,
      email: email,
    };
    props.setListResponses([...props.listResponses, form]); //  Transmit obiectul form to Responses.js
    console.log([...props.listResponses, form]);
    setFirstName("");
    setLastName("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setState("");
    setCode("");
    setPhoneNo("");
    setEmail("");
    navigate(`/success/${name}`);
  };

  const [click, handleClick] = useState(false);

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
            <div className="form-row">
              <div className="form-group1 col-md-6">
                <label htmlFor="inputFirstName">First Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputFirstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="inputLastName">Last Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress1">Address Line 1:</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress1"
                placeholder="Street name and number"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress2">Address Line 2:</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Suite, apartment"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <label>City</label>
                <input
                  type="text"
                  class="form-control"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option value>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputZip">Zip code:</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group1 col-md-6">
                <label htmlFor="inputPhoneNumber">Phone number:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPhoneNumber"
                  placeholder="Phone number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="inputEmailAddress">Email address:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmailAddress"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="status-form">
              <h3 className="title">Family status and daily routine</h3>
              <h4 className="title">Do you have children?</h4>

              <div className="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Yes
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  No
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="text">
                  If you answered "Yes", please tell us a little bit about their
                  experience and confort level around animals.
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <h4 className="title">Do you have pets at home?</h4>

            <div className="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Yes
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                No
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="text">
                If you answered "Yes", please tell us a little bit about their
                experience and confort level around other animals.
              </label>
              <textarea className="form-control" id="text" rows="5"></textarea>
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

              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdoptionForm;
