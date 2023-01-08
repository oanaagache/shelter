import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdoptionForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountrySelector from "../countryselector/CountrySelector";

const AdoptionForm = (props) => {
  const { isLoggedIn } = props;
  const { name } = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState({});
  console.log(user);

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [routine, setRoutine] = useState("");

  //send newUser to DB
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFirstName("");
    setSurname("");
    setEmail("");
    setAddress("");
    setCity("");
    setCountry("");
    setCode("");
    setStatus("");
    setRoutine("");
    navigate(`/success/${name}`);

    const newUser = {
      firstName: user.firstName,
      surname: user.surname,
      email: user.email,
      address: address,
      city: city,
      country: country,
      code: code,
      status: status,
      routine: routine,
    };

    fetch("http://localhost:3001/record/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    //console.log(JSON.parse(localStorage.getItem("user")));
    //console.log("isLoggedIn Form: " + isLoggedIn);
  }, []);

  return (
    <>
      <div className="adoption-cont">
        <div className="adoption-inner">
          <img
            style={({ height: "10px" }, { width: "10px" })}
            src={logo}
            alt="Not found"
          />

          <Link
            className="adoption-arrow"
            to="/adopt"
            style={{ textDecoration: "none" }}
          >
            Back
          </Link>
        </div>

        <div className="adoption-title">Adoption Form</div>

        <Form onSubmit={handleSubmit}>
          <div className="adoption-form">
            <div className="form-row">
              {isLoggedIn ? (
                <div className="form-group col-md-3">
                  <label htmlFor="inputFirstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    value={user.firstName || ""}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              ) : (
                <div className="form-group col-md-3">
                  <label htmlFor="inputFirstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              )}

              {isLoggedIn ? (
                <div className="form-group col-md-3">
                  <label htmlFor="inputSurname">Surname:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSurname"
                    value={user.surname || ""}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              ) : (
                <div className="form-group col-md-3">
                  <label htmlFor="inputSurname">Surname:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSurname"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              )}

              {isLoggedIn ? (
                <div className="form-group col-md-3">
                  <label htmlFor="inputEmailAddress">Email address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmailAddress"
                    value={user.email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              ) : (
                <div className="form-group col-md-3">
                  <label htmlFor="inputEmailAddress">Email address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmailAddress"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="inputAddress">Address Line:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Street name and number"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
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
                  className="form-control"
                  id="inputZip"
                  placeholder="Zip code"
                />
              </div>
            </div>
            <div className="status-form">
              <h3 className="title">Family status and daily routine</h3>
              <h4 className="title">Do you have children?</h4>

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
            <div className="status-form">
              <h4 className="title">Do you have pets at home?</h4>
              <div className="form-group">
                <label htmlFor="text">
                  If your answer is "Yes", please tell us a little bit about
                  their experience and confort level around other animals.
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="5"
                  value={routine}
                  onChange={(e) => setRoutine(e.target.value)}
                ></textarea>
              </div>{" "}
            </div>{" "}
            <div className="adoption-button">
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
