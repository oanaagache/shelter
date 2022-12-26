import React from "react";
import logo from "../../../images/image4.svg";
import { Link } from "react-router-dom";
import "../../../../src/index.scss";
import CatCard1 from "./CatCard1";
import { CatData as data } from "./CatData";

const ArticlesCat = () => {
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

          <h4 className="adopt-title">Cat Adoption</h4>
        </div>
        <div className="flex flex-row flex-wrap">
          {data.map((item) => {
            return <CatCard1 key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesCat;
