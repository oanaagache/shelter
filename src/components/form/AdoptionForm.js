import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdoptionForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountrySelector from "../countryselector/CountrySelector";
import userEvent from "@testing-library/user-event";

const AdoptionForm = (props) => {
  const [listResponses, setListResponses] = useState();
  //primesc prin props de la App.js functia setListResponses care realizeaza inserarea unui nou animal in lista
  const { name, isLoggedIn } = useParams();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [address1, setAddress1] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [routine, setRoutine] = useState("");
  let navigate = useNavigate();

  const Submit = (evt) => {
    evt.preventDefault();

    const form = {
      firstName: firstName,
      surname: surname,
      email: email,
      address1: address1,
      city: city,
      country: country,
      code: code,
      status: status,
      routine: routine,
    };

    props.setListResponses([...props.listResponses, form]); //  transmit obiectul form to App.js prin apelul functiei setListResponses,primit prin props de la App.js

    // console.log([...props.listResponses]);
    // console.log("props.listResponses");

    setFirstName("");
    setSurname("");
    setEmail("");
    setAddress1("");
    setCity("");
    setCountry("");
    setCode("");
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
                <Link to="/adopt" style={{ textDecoration: "none" }}>
                  Back
                </Link>
              </h2>
            </div>

            <h1 className="adoption-title" style={{ paddingRight: 100 }}>
              Adoption Form
            </h1>
          </div>
        </div>

        <Form onSubmit={Submit} style={{ paddingLeft: 300 }}>
          <div className="adoption-form">
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="inputSurname">Surname:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inpuSurname"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
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
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputAddress1">Address Line:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress1"
                  placeholder="Street name and number"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <div className="form-group col-md-2">
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

              <div className="form-group col-md-2">
                <label htmlFor="inputCountry">Country</label>

                <CountrySelector setCountry={setCountry} />
              </div>
              <div className="form-group col-md-1">
                <label htmlFor="inputZip">Zip code:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  placeholder="Zip code"
                />
              </div>
            </div>

            <div className="form-row"></div>

            <div className="status-form">
              <h3 className="title">Family status and daily routine</h3>
              <h4 className="title">Do you have children?</h4>

              <div className="form-group" style={{ paddingRight: 400 }}>
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

            <div className="form-group" style={{ paddingRight: 400 }}>
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

            <div className="button" style={{ paddingRight: 500 }}>
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
