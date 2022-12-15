import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/image4.svg";
import pic1 from "../../images/dog.png";
import pic2 from "../../images/cat.png";
import "../../../src/index.css";

const Articles = () => {
  let navigate = useNavigate();

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
            className="flex h-4 mb-5 mt-3 sm:h-4 md:h-4 lg:h-4 xl:h-4 xxl:h-4
             m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl box-content"
          >
            Articles
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap flex-row m-5 box-content">
        <div className="max-w-full flex flex-col flex-wrap m-auto object-contain items-center">
          <img
            className="m-2 box-content"
            style={{
              width: 350,
              height: 350,
            }}
            src={pic1}
          />

          <h2>Dog Adoption Articles</h2>
          <h3>Learn more about caring for your new dog.</h3>

          <button
            className="text-white bg-pink w-26 h-8 p-1 mt-2 box-content
              text-sm  sm:text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-sm
              sm:w-26 sm:h-8 sm:mt-2 
              md:w-26 md:h-8 md:mt-2
              lg:w-26 lg:h-8 lg:mt-2
              xl:w-26 xl:h-8 xl:mt-2"
            onClick={() => {
              navigate("/articlesdog");
            }}
          >
            Read more
          </button>
        </div>

        <div className="flex flex-wrap flex-row m-5 box-content">
          <div className="max-w-full flex flex-col flex-wrap m-auto object-contain items-center">
            <img
              className="m-2 box-content"
              style={{
                width: 350,
                height: 350,
              }}
              src={pic2}
            />

            <h2>Cat Adoption Articles</h2>
            <h3>Helpful insights on what to expect.</h3>

            <button
              className="text-white bg-pink w-26 h-8 p-1 mt-2 box-content
              text-sm  sm:text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-sm
              sm:w-26 sm:h-8 sm:mt-2 
              md:w-26 md:h-8 md:mt-2
              lg:w-26 lg:h-8 lg:mt-2
              xl:w-26 xl:h-8 xl:mt-2"
              onClick={() => {
                navigate("/articlescat");
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
