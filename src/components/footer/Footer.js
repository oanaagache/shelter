import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../../src/index.css";

const Footer = () => {
  return (
    <div className="w-full h-20 sm:h-20 md:h-20 lg:h-20 xl:h-20 xxl:h-20 bg-black box-content">
      <div className="w-full flex items-center justify-center text-center text-white box-content">
        <div className="flex items-center text-center">
          <h4
            className="flex box-content
            text-sm 
            sm:text-sm sm:mt-5 
            md:text-sm md:mt-5
            lg:text-lg lg:mt-5 
            xl:text-xl xl:mt-5
            xxl:text-xl xxl:mt-5"
          >
            Copyright © 2022 Paws Animal Shelter. All Rights Reserved
          </h4>

          <div
            className="flex list-none mr-20 box-content
            sm:flex-row 
            md:flex-row 
            lg:flex-row  
            xl:flex-row 
            xxl:flex-row "
          >
            <ul>
              <li
                className="relative h-5 p-1 mt:6 box-content
              sm:inline-flex sm:mt-6 sm:h-5 sm:relative
              md:inline-flex md:mt-6 md:h-5 md:relative
              lg:inline-flex lg:mt-6 lg:h-5 lg:relative
              xl:inline-flex xl:mt-6 xl:h-5 xl:relative
              xxl:inline-flex xxl:mt-6 xxl:h-5 xxl:relative
              "
              >
                <FaFacebook />
              </li>
              <li
                className="relative h-5 p-1 mt:6  box-content
                sm:inline-flex sm:mt-6 sm:h-5 sm:relative
                md:inline-flex md:mt-6 md:h-5 md:relative
                lg:inline-flex lg:mt-6 lg:h-5 lg:relative
                xl:inline-flex xl:mt-6 xl:h-5 xl:relative
                xxl:inline-flex xxl:mt-6 xxl:h-5 xxl:relative
                "
              >
                <FaTwitter />
              </li>
              <li
                className="relative h-5 p-1 mt:6 box-content
                sm:inline-flex sm:mt-6 sm:h-5 sm:relative
                md:inline-flex md:mt-6 md:h-5 md:relative
                lg:inline-flex lg:mt-6 lg:h-5 lg:relative
                xl:inline-flex xl:mt-6 xl:h-5 xl:relative
                xxl:inline-flex xxl:mt-6 xxl:h-5 xxl:relative
                "
              >
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
