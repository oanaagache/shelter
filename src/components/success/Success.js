import React from "react";
import "./Success.scss";
import logo2 from "../../images/image.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Success = () => {
  const { name } = useParams();
  let navigate = useNavigate();

  return (
    <div className="response">
      <h2 className="title">Thank you!</h2>
      <h2 className="title">You're on your way to meet {name} </h2>
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
          Back to Adopt page
        </button>
      </div>
    </div>
  );
};

export default Success;
