import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import AdoptionForm from "./AdoptionForm";
import List from "./List";

function Responses() {
  const [lista, setList] = useState([]);

  const addToList = (form) => {
    const nr = lista.length + 1;
    form.id = nr; //  Add id
    setList([...lista, form]);
  };
  console.log(lista);
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>List of responses</h1>
      </Container>
      <AdoptionForm transmit={addToList} />
      <List list={lista} />
    </>
  );
}

export default Responses;
