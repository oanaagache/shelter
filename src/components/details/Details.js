import React from "react";
import Alert from "react-bootstrap/Alert";
import "../../../src/index.css";

const Details = (props) => {
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    country,
    code,
    phoneNo,
    email,
    status,
    routine,
  } = props;

  //console.log(props);

  const stilAlert = {
    color: "#2B2B2B",
    textAlign: "left",
    margin: "10px",
    height: "450px",
    border: "2px solid #F4F4F4",
    padding: "12px",
    borderRadius: "5px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
  };

  return (
    <Alert style={stilAlert}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{address1}</p>
      <p>{address2}</p>
      <p>{code}</p>
      <p>{city}</p>
      <p>{country}</p>
      <p>{phoneNo}</p>
      <p>{email}</p>
      <p>{status}</p>
      <p>{routine}</p>
    </Alert>
  );
};

export default Details;
