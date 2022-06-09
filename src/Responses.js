import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Adoption from "./Adoption";
import List from "./List";

function Responses() {
  const [list, setList] = useState([]);

  const addToList = (form) => {
    const nr = list.length + 1;
    form.id = nr; //  Add id
    setList([...list, form]);
  };
  console.log(list);
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>List of responses</h1>
      </Container>
      <Adoption transmit={addToList} />
      <List list={list} />
    </>
  );
}

export default Responses;
