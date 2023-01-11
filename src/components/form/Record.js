import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../form/Record.css";
import logo from "../../images/image4.svg";

const Record = (props) => (
  <tr>
    <td>{props.record.firstName}</td>
    <td>{props.record.surname}</td>
    <td>{props.record.email}</td>
    {/* <td>{props.record.address}</td> */}
    <td>{props.record.city}</td>
    <td>{props.record.country}</td>
    {/* <td>{props.record.code}</td> */}
    <td>{props.record.status}</td>
    <td>{props.record.routine}</td>
    <td>
      <Link
        className="btn-link-edit"
        to={`/edit/${props.record._id}`}
        style={{ textDecoration: "none" }}
      >
        Edit
      </Link>{" "}
      <div
        className="btn-link-delete"
        style={{ textDecoration: "none" }}
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </div>
    </td>
  </tr>
);

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

  //map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  //  display the table with the records
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
            <tbody>{recordList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
