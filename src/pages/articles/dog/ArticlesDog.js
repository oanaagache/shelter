import React from "react";
import logo from "../../../images/image4.svg";
import { Link } from "react-router-dom";
import "../../../../src/index.scss";
import DogCard1 from "./DogCard1";
import DogCard2 from "./DogCard2";
import DogCard3 from "./DogCard3";
import DogCard4 from "./DogCard4";

const ArticlesDog = () => {
  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/other" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </h2>
          </div>

          <h4 className="adopt-title">More About Dog Adoption</h4>
        </div>

        <div className="flex flex-row flex-wrap">
          <DogCard1 />
          <DogCard2 />
          <DogCard3 />
          <DogCard4 />
        </div>
      </div>
    </div>
  );
};

export default ArticlesDog;
