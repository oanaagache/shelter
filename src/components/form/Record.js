import React from "react";
import { Link } from "react-router-dom";
import "../form/Record.css";

export default function Record(props) {
  return (
    <tr>
      <td>{props.record.firstName}</td>
      <td>{props.record.surname}</td>
      <td>{props.record.email}</td>
      <td>{props.record.password}</td>
      {/* <td>{props.record.address}</td> */}
      <td>{props.record.city}</td>
      <td>{props.record.country}</td>
      {/* <td>{props.record.code}</td> */}
      <td>{props.record.status}</td>
      <td>{props.record.routine}</td>
      <td>{props.record.name}</td>
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
}
