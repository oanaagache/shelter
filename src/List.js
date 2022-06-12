import React from "react";
import Intro from "./Intro";

const List = (props) => {
  const { list } = props;
  const lista = list.map((item) => (
    <Intro
      name={item.name}
      lastName={item.lastName}
      address1={item.address1}
      address2={item.address2}
      city={item.city}
      state={item.state}
      code={item.code}
      phoneNo={item.phoneNo}
      email={item.email}
      key={item.id}
    />
  ));
  return (
    <>
      <div>{lista}</div>
    </>
  );
};

export default List;
