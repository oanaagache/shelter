import React from "react";
import Container from "react-bootstrap/Container";

const Response = ({
  name,
  lastName,
  address1,
  address2,
  state,
  code,
  phoneNo,
  email,
}) => {
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>List of responses</h1>
      </Container>
      <div>
        <p>{name}</p>
        {lastName}
        {address1}
        {address2}
        {state}
        {code}
        {phoneNo}
        {email}
      </div>
    </>
  );
};

export default Response;
