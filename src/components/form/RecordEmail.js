import React from "react";
import "../form/Record.css";

export default function RecordEmail(props) {
  return (
    <tr>
      <td>{props.record.firstName}</td>
      <td>{props.record.surname}</td>
      <td>{props.record.email}</td>
      <td>{props.record.city}</td>
      <td>{props.record.country}</td>
      <td>{props.record.status}</td>
      <td>{props.record.routine}</td>
      <td>{props.record.name}</td>
    </tr>
  );
}
