import React from "react";
import logo3 from "../../images/image3.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div
        className="main-image "
        style={{
          background: `url(${logo3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      ></div>

      <div className="main-text">
        <div className="main-title">
          {" "}
          We aim to find best companions for homeless pets in need.
        </div>
      </div>
    </div>
  );
};
export default Main;
