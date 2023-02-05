import React from "react";
import logo from "../../../images/image4.svg";
import { Link } from "react-router-dom";
import "../../../../src/index.scss";
import CatCard1 from "./cat/CatCard1";
import { CatData as data } from "./cat/CatData";
import "./ArticlesCat.css";

const ArticlesCat = () => {
  return (
    <div className="articlesCat-cont">
      <div className="articlesCat-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="articlesCat-arrow" to="/">
          Back{" "}
        </Link>
      </div>

      <div className="articlesCat-title">Cat Adoption</div>

      <div className="flex flex-row flex-wrap">
        {data.map((item) => {
          return <CatCard1 key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ArticlesCat;
