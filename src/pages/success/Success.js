import React, { useState, useEffect } from "react";
import "./Success.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";

export default function Success() {
  const { name } = useParams();

  const [user, setUser] = useState([]);
  const [adoptionForm, setAdoptionForm] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("registeredUser")));
  }, []);

  useEffect(() => {
    setAdoptionForm(JSON.parse(localStorage.getItem("AdoptionForm")));
  }, []);

  return (
    <div className="response-cont">
      <div className="response-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="response-arrow" to="/">
          Back{" "}
        </Link>
      </div>

      <div className="response-title">
        {" "}
        Thank you!You're on your way to meet {name}.
      </div>
      <div className="response-subtitle">
        Our volunteers will contact you in order to schedule a visit to the
        animal shelter and finalize the adoption procedure.
      </div>

      <div className="response">
        <div className="response-table">
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
        </div>{" "}
      </div>
    </div>
  );
}
