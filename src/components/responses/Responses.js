import React from "react";
import List from "../List";
import { useNavigate } from "react-router-dom";

const Responses = (props) => {
  const stil = {
    h2: { textAlign: "center" },
  };
  let navigate = useNavigate();

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        List of Responses
      </h2>
      <hr />
      <List listResponses={props.listResponses} />
      <hr />

      <div className="button">
        <button
          className="backHome"
          onClick={() => {
            navigate("/adopt");
          }}
        >
          Back to Adopt page
        </button>
      </div>
    </>
  );
};

export default Responses;
