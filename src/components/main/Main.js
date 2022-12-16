import React from "react";
import logo3 from "../../images/image3.png";
import "../../../src/index.css";

const Main = () => {
  return (
    <>
      <div className="relative text-white">
        <div
          className="w-full h-full object-cover box-content
          sm:w-full sm:h-full sm:object-cover
          lg:w-full lg:h-full lg:object-cover
          xl:w-full xl:h-ful xl:object-cover
          xxl:w-full xxl:h-ful xxl:object-cover
          "
        >
          {" "}
          <img src={logo3} />
        </div>

        <div className="absolute top-2/4 sm:top:2/4 md:top:2/4 lg:top:2/4 xl:top:2/4 xxl:top:2/4 ">
          <h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl xxl:text-5xl
          pl-20 box-content"
          >
            {" "}
            We aim to find best companions for homeless pets in need
          </h3>

          {/* <div className="flex justify-center">
            <button
              className="text-white bg-pink w-26 h-8 p-1 mx-5 mt-2 
              text-sm  sm:text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-sm
              sm:w-26 sm:h-8 sm:mx-5 sm:mt-2 
              md:w-26 md:h-8 md:mx-5 md:mt-2
              lg:w-26 lg:h-8 lg:mx-5 lg:mt-2
              xl:w-26 xl:h-8 xl:mx-5 xl:mt-2"
              onClick={() => {
                navigate("/donate");
              }}
            >
              Donate
            </button>
            <button
              className="text-white bg-pink w-26 h-8 p-1 mx-5 mt-2 
              text-sm  sm:text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-sm
              sm:w-26 sm:h-8 sm:mx-5 sm:mt-2 "
              onClick={() => {
                navigate("/adopt");
              }}
            >
              Adopt
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
