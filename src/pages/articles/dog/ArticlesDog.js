import React from "react";
import logo from "../../../images/image4.svg";
import { Link } from "react-router-dom";
import "../../../../src/index.scss";
import DogCard1 from "./DogCard1";
import DogCard2 from "./DogCard2";
import DogCard3 from "./DogCard3";
import DogCard4 from "./DogCard4";
import "./ArticlesDog.css";

const ArticlesDog = () => {
  return (
    <div className="articlesDog-cont">
      <div className="articlesDog-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="articlesDog-arrow" to="/">
          Back{" "}
        </Link>
      </div>

      <h4 className="articlesDog-title">More About Dog Adoption</h4>

      <div className="flex flex-row flex-wrap">
        <DogCard1 />
        <DogCard2 />
        <DogCard3 />
        <DogCard4 />
      </div>
    </div>
  );
};

export default ArticlesDog;
