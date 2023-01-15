import React, { useState, useEffect } from "react";
import "./Success.css";
import logo2 from "../../images/image.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import RecordEmail from "../form/RecordEmail";

export default function Success() {
  const { name } = useParams();

  let navigate = useNavigate();
  //const params = useParams();

  const [records, setRecords] = useState([]);

  //  fetches the records from the database
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3001/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
      console.log(records);
    }
    getRecords();
    return;
  }, [records.length]);

  //fetches the records from the database

  // useEffect(() => {
  //   async function getRecord() {
  //     const response = await fetch(`http://localhost:3001/record/${id}`);
  //     if (!response.ok) {
  //       const message = `An error occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }
  //     const records = await response.json();
  //     if (!records) {
  //       window.alert(`Record with id ${id} not found`);
  //       navigate("/");
  //       return;
  //     }
  //     setRecords(records);
  //     console.log(records);
  //   }
  //   getRecord();
  //   return;
  // }, [id, navigate]);

  return (
    <div className="response">
      <h2 className="response-title">Thank you!</h2>
      <h2 className="response-title">You're on your way to meet {name} </h2>
      <img
        style={{
          height: 300,
          width: 300,
          border: "1px solid black",
        }}
        src={logo2}
        alt="Not found"
      />
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
              <th>City</th>
              <th>Country</th>
              <th>Have Children</th>
              <th>Have Pets</th>
              <th>Pet Name</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              return (
                <>
                  <RecordEmail key={record._id} record={record} />
                </>
              );
            })}
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
