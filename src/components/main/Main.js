import React from "react";
import logo3 from "../../images/image3.png";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="main">
        <div className="main-image">
          <img src={logo3} />
        </div>

        <div className="main-text">
          <h3 className="main-title">
            {" "}
            We aim to find best companions for homeless pets in need
          </h3>

          {/* <div className="button">
            <button
              className="donate"
              onClick={() => {
                navigate("/donate");
              }}
            >
              Donate
            </button>
            <button
              className="adopt"
              onClick={() => {
                navigate("/adopt");
              }}
            >
              Adopt
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
