import React from "react";
import Details from "./Details";
import { Container } from "react-bootstrap";
import TotalList from "./TotalList";

const List = (props) => {
  const { listResponses } = props;
  const list = listResponses.map((item, index) => (
    <Details
      key={index}
      name={item.name}
      lastName={item.lastName}
      address1={item.address1}
      address2={item.address2}
      city={item.city}
      state={item.state}
      code={item.code}
      phoneNo={item.phoneNo}
      email={item.email}
    />
  ));

  return (
    <>
      <TotalList lista={list} />
    </>
  );
};

export default List;
