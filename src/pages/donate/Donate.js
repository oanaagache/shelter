import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import { dataDonate as data } from "./dataDonate";
import "../../../src/index.css";

const Donate = () => {
  return (
    <>
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
              className="flex h-4 mb-3 sm:h-4 md:h-4 lg:h-4 xl:h-4 xxl:h-4
             m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl box-content"
            >
              More Details About Shelters
            </h4>
          </div>
        </div>

        <div className="ml-4">
          <h1
            className="flex justify-left text-xl my-2 box-content
        sm:text-xl sm:my-5
        md:text-xl md:my-5
        lg:text-xl lg:my-5
        xl:text-2xl xl:my-5
        xxl:text-2xl xxl:my-5    
        "
          >
            {data.title1}
          </h1>
          <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
            {data.description1}
          </h4>

          <h1
            className="flex justify-left text-xl my-2 box-content
        sm:text-xl sm:my-5
        md:text-xl md:my-5
        lg:text-xl lg:my-5
        xl:text-2xl xl:my-5
        xxl:text-2xl xxl:my-5    
        "
          >
            {data.title2}{" "}
          </h1>

          <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
            {data.description2}
          </h4>

          <h1
            className="flex justify-left text-xl my-2 box-content
        sm:text-xl sm:my-5
        md:text-xl md:my-5
        lg:text-xl lg:my-5
        xl:text-2xl xl:my-5
        xxl:text-2xl xxl:my-5    
        "
          >
            {data.title3}
          </h1>

          <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
            {data.description3}
          </h4>

          <h1
            className="flex justify-left text-xl my-2 box-content
        sm:text-xl sm:my-5
        md:text-xl md:my-5
        lg:text-xl lg:my-5
        xl:text-2xl xl:my-5
        xxl:text-2xl xxl:my-5    
        "
          >
            {data.title4}
          </h1>

          <ol className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base ">
            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.subtitle1}
            </h4>
            <li>{data.description4}</li>
            <br />
            <li>{data.description5}</li>
            <br />
            <li>{data.description6}</li>
            <br />
            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.subtitle2}
            </h4>
            <ul className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base ">
              <li>{data.description7}</li>
              <li>{data.description8}</li>
              <li>{data.description9}</li>
              <li>{data.description10}</li>
              <li>{data.description11}</li>
              <li>{data.description12}</li>
              <li>{data.description13}</li>
              <li>{data.description14}</li>
              <li>{data.description15}</li>
              <li>{data.description16}</li>
              <li>{data.description17}</li>
              <li>{data.description18}</li>
              <li>{data.description19}</li>
            </ul>
            <br />
            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.subtitle3}
            </h4>

            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.description20}
            </h4>
            <ul className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base ">
              <li>{data.description21}</li>
              <li>{data.description22}</li>
              <li>{data.description23}</li>
              <li>{data.description24}</li>
              <li>{data.description25}</li>
              <li>{data.description26}</li>
            </ul>
            <br />
            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.subtitle4}
            </h4>
            <br />
            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.description27}
            </h4>
            <br />
            <h4 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
              {data.description28}
            </h4>
            <br />
            <Link to="/adopt" style={{ textDecoration: "none" }}>
              Click here to adopt a pet
            </Link>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Donate;
