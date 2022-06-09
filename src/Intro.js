import React from "react";
import Alert from "react-bootstrap/Alert";

const Intro = (props) => {
  const stilAlert = {
    color: "#2B2B2B",
    textAlign: "left",
    margin: "10px",
    height: "100px",
    border: "2px solid #F4F4F4",
    padding: "12px",
    borderRadius: "5px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
  };

  const {
    name,
    lastName,
    address1,
    address2,
    city,
    state,
    code,
    phoneNo,
    email,
  } = props;

  console.log(props);
  return (
    <Alert style={stilAlert}>
      <p>{name}</p>
      <p>{lastName}</p>
      <p>{address1}</p>
      <p>{address2}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{code}</p>
      <p>{phoneNo}</p>
      <p>{email}</p>
    </Alert>
  );
};

export default Intro;
