import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../../src/index.css";

const Success = () => {
  const { name } = useParams();
  let navigate = useNavigate();

  return (
    <div className="flex flex-col object-contain items-center">
      <h2 className="m-5 box-content">Thank you!</h2>
      <h2>You're on your way to meet {name} </h2>
      <h4 className="mt-5 box-content">
        Our volunteers will contact you in order{" "}
      </h4>
      <h4>
        to schedule a visit to the animal shelter and finalize the adoption
        procedure.
      </h4>

      <div className="flex">
        <button
          className="text-white bg-pink w-52 sm:w-52 md:w-52 lg:w-52 xl:w-52 xxl:w-52 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg p-2 h-10 mb-5 mt-5 box-content"
          onClick={() => {
            navigate("/adopt");
          }}
        >
          Back to Adopt Page
        </button>
      </div>
    </div>
  );
};

export default Success;
