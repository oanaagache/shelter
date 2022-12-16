import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/image4.svg";
import "../../../src/index.css";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="max-w-full box-content">
      <div className="w-full box-content">
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
            className="flex h-4 mb-5 sm:h-4 md:h-4 lg:h-4 xl:h-4 xxl:h-4
             m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl"
          >
            More Details About Us
          </h4>
        </div>
      </div>

      <div className="w-full box-content mx-4 ">
        <h2 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          SHELTER is dedicated to helping pets find homes, and we know you are
          too. Our site provides ready access to data for hundreds of thousands
          of adoptable pets and the organizations that care for them.
        </h2>
        <br />
        <h2 className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base">
          Dogs, cats, rabbits, and other domesticated animals rely on the care
          of devoted human guardians to keep them safe, happy, and healthy. Some
          of these animals are lucky enough to be adopted into responsible,
          permanent homes. Sadly, there are far more animals in need of a caring
          family than there are people willing or able to provide them with a
          lifetime of love and support.
        </h2>
        <br />
        <div className="justify-end" style={{ paddingBottom: 50 }}>
          <button
            className="text-white bg-pink w-26 h-8 p-1 mt-2 
            text-sm  sm:text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-sm
            sm:w-26 sm:h-8 sm:mt-2 
            md:w-26 md:h-8 md:mt-2
            lg:w-26 lg:h-8 lg:mt-2
            xl:w-26 xl:h-8 xl:mt-2"
            onClick={() => {
              navigate("/adopt");
            }}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
