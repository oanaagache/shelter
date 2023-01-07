import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdoptionForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountrySelector from "../countryselector/CountrySelector";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    email: "",
    address1: "",
    city: "",
    country: "",
    code: "",
    status: "",
    routine: "",
    users: [],
  });

  useEffect(() => {
    async function fetchData() {
      const id = params.id;
      const response = await fetch(`http://localhost:3001/users/${params.id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const user = await response.json();
      if (!user) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(user);
      console.log(user);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const editedUser = {
      firstName: form.firstName,
      surname: form.surname,
      email: form.email,
      address1: form.address1,
      city: form.city,
      country: form.country,
      code: form.code,
      status: form.status,
      routine: form.routine,
    };

    // This will send a post request to update the data in the database.
    fetch(`http://localhost:3001/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <>
      <div className="adoption-cont">
        <div className="adoption-inner">
          <img style={({ height: "10px" }, { width: "10px" })} src={logo} />
          <h2>
            <Link
              className="arrow"
              to="/adopt"
              style={{ textDecoration: "none" }}
            >
              Back
            </Link>
          </h2>
        </div>

        <div className="adoption-title">Edit Adoption Form</div>

        <Form onSubmit={handleSubmit}>
          <div className="adoption-form">
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="inputFirstName">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  value={form.firstName}
                  onChange={(e) => updateForm({ firstName: e.target.value })}
                />
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="inputSurname">Surname:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSurname"
                  value={form.surname}
                  onChange={(e) => updateForm({ surname: e.target.value })}
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="inputEmailAddress">Email address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmailAddress"
                  value={form.email}
                  onChange={(e) => updateForm({ email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="inputAddress1">Address Line:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress1"
                  placeholder="Street name and number"
                  value={form.address1}
                  onChange={(e) => updateForm({ address1: e.target.value })}
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => updateForm({ city: e.target.value })}
                />
              </div>

              {/* <div className="form-group col-md-2">
                <label htmlFor="inputCountry">Country</label>
                <CountrySelector updateForm={setCountry} />
              </div> */}

              <div className="form-group col-md-1">
                <label htmlFor="inputZip">Zip code:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="Zip code"
                  value={form.code}
                  onChange={(e) => updateForm({ city: e.target.value })}
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
                  value={form.status}
                  onChange={(e) => updateForm({ status: e.target.value })}
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
                  value={form.routine}
                  onChange={(e) => updateForm({ routine: e.target.value })}
                ></textarea>
              </div>{" "}
            </div>{" "}
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

export default Edit;
