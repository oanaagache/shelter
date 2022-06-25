import React from "react";
import List from "./List";

const Responses = (props) => {
  console.log(props.listResponses);
  return (
    <>
      <List listResponses={props.listResponses} />
    </>
  );
};

export default Responses;
