import React from "react";
import logo from "../../../images/image4.svg";
import { Link } from "react-router-dom";
import "../../../../src/index.css";
import CatCard1 from "./CatCard1";
import { CatData as data } from "./CatData";

const ArticlesCat = () => {
  return (
    <div className="max-w-full">
      <div className="w-full">
        <div className="flex m-4 box-content">
          <div className="flex">
            <img
              className="h-4 mr-1 mt-2 box-content 
        sm:h-4 sm:mr-1
        md:h-4 md:mr-1 
        lg:h-4 lg:mr-1 
        xl:h-4 xl:mr-1
        xxl:h-4 xxl:mr-1"
              src={logo}
              alt="Not found"
            />
            <h2
              className="flex h-4 mr-5 box-content
        sm:h-4 sm:mr-2 
        md:h-4 md:mr-2 
        lg:h-4 lg:mr-2 
        xl:h-4 xl:mr-2 
        xxl:h-4 xxl:mr-2
        text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl xxl:text-2xl"
            >
              <Link to="/articles" className="no-underline">
                Back
              </Link>
            </h2>
          </div>

          <h4
            className="flex h-4 mb-3 box-content sm:h-4 md:h-4 lg:h-4 xl:h-4 xxl:h-4
       m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
      text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl"
          >
            Cat Adoption
          </h4>
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
