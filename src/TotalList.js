import React, { useState } from "react";
import Container from "react-bootstrap/Container";

const TotalList = (props) => {
  const { lista } = props;

  return <Container>{lista}</Container>;
};

export default TotalList;
