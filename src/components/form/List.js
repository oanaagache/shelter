import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../form/Record.css";
import logo from "../../images/image4.svg";
import Record from "./Record.js";

export default function List() {
  const [records, setRecords] = useState([]);

  //  fetches the records from the database.
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
    }
    getRecords();
    return;
  }, [records.length]);

  //  delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  return (
    <>
      <div className="list-cont">
        <div className="list-inner">
          <img
            style={({ height: "10px" }, { width: "10px" })}
            src={logo}
            alt="Not found"
          />
          <Link className="about-arrow" to="/">
            Back{" "}
          </Link>
        </div>

        <div className="list-title">Record List</div>

        <div className="list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                {/* <th>Address</th> */}
                <th>City</th>
                <th>Country</th>
                {/* <th>Code</th> */}
                <th>Have Children</th>
                <th>Have Pets</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => {
                return (
                  <>
                    <Record
                      key={record._id}
                      record={record}
                      deleteRecord={() => deleteRecord(record._id)}
                    />
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
