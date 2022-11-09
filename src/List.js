import React from "react";
import Details from "./Details";

const List = (props) => {
  const { listResponses } = props;
  const list = listResponses.map((item, index) => (
    <Details
      key={index}
      firstName={item.firstName}
      lastName={item.lastName}
      address1={item.address1}
      address2={item.address2}
      city={item.city}
      country={item.country}
      code={item.code}
      phoneNo={item.phoneNo}
      email={item.email}
      status={item.status}
      routine={item.routine}
    />
  ));

  return <>{list}</>;
};

export default List;
