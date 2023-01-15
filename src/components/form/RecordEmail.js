import React from "react";
import "../form/Record.css";

export default function RecordEmail(props) {
  return (
    <tr>
      <td>{props.recordsEmail.firstName}</td>
      <td>{props.recordsEmail.surname}</td>
      <td>{props.recordsEmail.email}</td>
      <td>{props.recordsEmail.city}</td>
      <td>{props.recordsEmail.country}</td>
      <td>{props.recordsEmail.status}</td>
      <td>{props.recordsEmail.routine}</td>
      <td>{props.recordsEmail.name}</td>
    </tr>
  );
}
