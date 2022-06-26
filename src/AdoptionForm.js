import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdoptionForm.css";
import { Link } from "react-router-dom";
import logo from "./images/image5.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountrySelector from "./CountrySelector";

const AdoptionForm = (props) => {
  const [listResponses, setListResponses] = useState();
  //primesc prin props de la App.js functia setListResponses care realizeaza inserarea unui nou animal in lista

  console.log("listResponses");
  console.log(listResponses);

  const { name } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [routine, setRoutine] = useState("");
  let navigate = useNavigate();

  const Submit = (evt) => {
    evt.preventDefault();

    const form = {
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      country: country,
      code: code,
      phoneNo: phoneNo,
      email: email,
      status: status,
      routine: routine,
    };

    props.setListResponses([...props.listResponses, form]); //  transmit obiectul form to App.js prin apelul functiei setListResponses,primit prin props de la App.js

    console.log([...props.listResponses]);
    console.log("props.listResponses");

    setFirstName("");
    setLastName("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setCountry("");
    setCode("");
    setPhoneNo("");
    setEmail("");
    setStatus("");
    setRoutine("");
    navigate(`/success/${name}`);
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
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputCountry">Country</label>
                {/* <select id="inputCountry" className="form-control"> 
                  <option value>Choose</option>
                  
                 </select>  */}
                <CountrySelector setCountry={setCountry} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputZip">Zip code:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  placeholder="Zip code"
                />
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

              {/* <div className="form-check form-check-inline">
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
              </div> */}

              <div className="form-group">
                <label htmlFor="text">
                  If your answer is "Yes", please tell us a little bit about
                  their experience and confort level around animals.
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="5"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                ></textarea>
              </div>
            </div>

            <h4 className="title">Do you have pets at home?</h4>

            {/* <div className="form-check form-check-inline">
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
            </div> */}

            <div className="form-group">
              <label htmlFor="text">
                If your answer is "Yes", please tell us a little bit about their
                experience and confort level around other animals.
              </label>
              <textarea
                className="form-control"
                id="text"
                rows="5"
                value={routine}
                onChange={(e) => setRoutine(e.target.value)}
              ></textarea>
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
