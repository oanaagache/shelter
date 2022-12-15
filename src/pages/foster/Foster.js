import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import { dataFoster as data } from "./dataFoster";
import "../../../src/index.css";
const Foster = () => {
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
              <Link to="/" className="no-underline">
                Back
              </Link>
            </h2>
          </div>

          <h4
            className="flex h-4 mb-3 box-content sm:h-4 md:h-4 lg:h-4 xl:h-4 xxl:h-4
             m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl"
          >
            Why Foster A Dog or Cat?
          </h4>
        </div>
      </div>

      <div className="ml-4">
        <h1
          className="flex justify-left text-xl my-2 box-content
        sm:text-xl sm:my-2
        md:text-xl md:my-2
        lg:text-xl lg:my-2
        xl:text-2xl xl:my-2
        xxl:text-2xl xxl:my-2  
        "
        >
          {data.title1}
        </h1>
        <h3 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          {data.description1}
        </h3>
        <br />
        <h3 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          {data.title2}
        </h3>
        <h3 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          {" "}
          {data.description2}
        </h3>

        <ul className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          <li>{data.description3}</li>
          <li>{data.description4}</li>
          <li>{data.description5}</li>
          <li>{data.description6}</li>
          <li>{data.description7}</li>
          <li>{data.description8}</li>
        </ul>
        <h3 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          {data.title3}
        </h3>
        <h3 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          {" "}
          {data.description9}
        </h3>

        <ul className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          <li>{data.description10}</li>
          <li>{data.description11}</li>
          <li>{data.description12}</li>
          <li>{data.description13}</li>
        </ul>
        <br />
        <h3 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          {data.title3}
        </h3>
        <br />
        <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          Find a <Link to="/">rescue group or shelter near you </Link> and
          contact them. {data.description14}
        </h4>
      </div>
    </div>
  );
};

export default Foster;
