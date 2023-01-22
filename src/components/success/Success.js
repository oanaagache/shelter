import React, { useState, useEffect } from "react";
import "./Success.css";
import logo2 from "../../images/image.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Success() {
  const { name } = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [adoptionForm, setAdoptionForm] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("registeredUser")));
  }, []);

  useEffect(() => {
    setAdoptionForm(JSON.parse(localStorage.getItem("AdoptionForm")));
  }, []);

  return (
    <div className="response">
      <h2 className="response-title">Thank you!</h2>
      <h2 className="response-title">You're on your way to meet {name} </h2>
      {/* <img
        style={{
          height: 300,
          width: 300,
          border: "1px solid black",
        }}
        src={logo2}
        alt="Not found"
      /> */}
      <h4 className="title">Our volunteers will contact you in order </h4>
      <h4 className="title">
        to schedule a visit to the animal shelter and finalize the adoption
        procedure.
      </h4>

      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Code</th>
              <th>Have Children</th>
              <th>Have Pets</th>
              <th>Pet Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.firstName || " - "}</td>
              <td>{user.surname || " - "}</td>
              <td>{user.email || " - "}</td>
              <td>{user.password || " - "}</td>
              <td>{adoptionForm.address || " - "}</td>
              <td>{adoptionForm.city || " - "}</td>
              <td>{adoptionForm.country || " - "}</td>
              <td>{adoptionForm.code || " - "}</td>
              <td>{adoptionForm.status || " - "}</td>
              <td>{adoptionForm.routine || " - "}</td>
              <td>{adoptionForm.name || " - "}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="success-button">
        <button
          className="backHome"
          onClick={() => {
            navigate("/adopt");
          }}
        >
          Back to Adopt Page
        </button>
      </div>
    </div>
  );
}
