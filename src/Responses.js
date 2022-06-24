import React from "react";
import List from "./List";

const Responses = (props) => {
  //const [list, setList] = useState([]);

  // const addToList = (form) => {
  //   const nr = list.length + 1;
  //   form.id = nr; //  Add id
  //   setList([...list, form]);
  // };
  // console.log(list);
  console.log(props.listResponses);
  return (
    <>
      <List listResponses={props.listResponses} />
    </>
  );
};

export default Responses;
