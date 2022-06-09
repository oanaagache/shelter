import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Adoption from "./Adoption";
import Intro from "./Intro";

function Responses() {
  const [list, setList] = useState([]);

  const addToList = (form) => {
    const nr = list.length + 1;
    form.id = nr; //  Add id
    setList([...list, form]);
  };
  console.log(list);
  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>List of responses</h1>
        <Intro list={list} />
        <Adoption transmit={addToList} />
      </Container>
    </div>
  );
}

export default Responses;
