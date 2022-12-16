import React from "react";
import "../../../src/index.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/image.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let navigate = useNavigate();

  const { isLoggedIn } = props;
  //console.log("isLoggedIn Navbar: " + isLoggedIn);

  const handleClick = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="w-full">
      <div className="flex flex-row h-36 box-content">
        <div className="flex items-center">
          <img
            className="flex pl-2 pr-1 cursor-pointer box-content  
            h-6 sm:h-6 md:h-8 lg:h-10 xl:h-16 xxl:h-16"
            src={logo}
            onClick={() => navigate("/")}
          />
          <h1
            className="flex cursor-pointer box-content
            text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl xxl:text-6xl
            "
            onClick={() => navigate("/")}
          >
            Paws Animal Shelter
          </h1>
        </div>

        <ul
          className="flex sm:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row
        list-none m-0 flex-1 items-center box-content pr-5 
        text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl
        space-x-2.5 sm:space-x-2.5 md:space-x-2.5 lg:space-x-6 xl:space-x-7 xxl:space-x-9"
        >
          <li className="relative cursor-pointer box-content  ">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="box-content no-underline mx-1
              text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl"
            >
              About
            </NavLink>
          </li>
          <li className="relative cursor-pointer box-content  ">
            <NavLink
              to="/adopt"
              style={({ isActive }) => ({
                color: isActive ? "purple" : "black",
              })}
              end
              className="box-content no-underline mx-1
              text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl"
            >
              Adopt
            </NavLink>
          </li>
          <li className="relative cursor-pointer box-content ">
            <NavLink
              to="/donate"
              style={({ isActive }) => ({
                color: isActive ? "purple" : "black",
              })}
              end
              className="box-content no-underline mx-1
              text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl"
            >
              Donate
            </NavLink>
          </li>
          <li className="relative cursor-pointer">
            <NavLink
              to="/foster"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="box-content no-underline mx-1
              text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl"
            >
              Foster
            </NavLink>
          </li>
          <li className="relative cursor-pointer">
            <NavLink
              to="/articles"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="box-content no-underline mx-1
              text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl"
            >
              Articles
            </NavLink>
          </li>
          {isLoggedIn ? (
            <button
              className="box-content no-underline 
            text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl border-1"
              onClick={() => {
                handleClick();
              }}
            >
              LogOut
            </button>
          ) : (
            <button
              className="box-content no-underline 
            text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl xxl:text-4xl border-1"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
