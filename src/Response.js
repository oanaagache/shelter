import React from "react";
import "./Response.css";
import logo2 from "./image.png";
import { useNavigate } from "react-router-dom";

function Response() {
  let navigate = useNavigate();

  return (
    <div className="response">
      <h2 className="title">Thank you!</h2>
      <h2 className="title">You're on your way to meet</h2>
      <img
        style={{
          height: 300,
          width: 300,
          border: "1px solid black",
        }}
        src={logo2}
      />
      <h4 className="title">Our volunteers will contact you in order</h4>
      <h4 className="title">
        to schedule a visit to the animal shelter and finalize the adoption
        procedure.
      </h4>

      <div className="button">
        <button
          className="backHome"
          onClick={() => {
            navigate("/adopt");
          }}
        >
          Back to Home page
        </button>
      </div>
    </div>
  );
}

export default Response;
