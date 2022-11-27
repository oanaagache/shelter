import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/image.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { loggedUser } = useParams();
  let navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (click == true) {
      localStorage.removeItem("loggedIn");
      navigate("/login");

      setClick(!click);
    }
  };
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-inner">
          <img src={logo} onClick={() => navigate("/")} />
          <h1 className="header-title" onClick={() => navigate("/")}>
            Paws Animal Shelter
          </h1>
        </div>

        <ul className="header-menu">
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donate"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foster"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              Foster
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adopt"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              Adopt
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/other"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              Other
            </NavLink>
          </li>
          {/* <li>Welcome {userName.name}!</li> */}
          {/* <li>
            <NavLink
              to="/register"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              LogIn
            </NavLink>
          </li> */}
          {/* <li>
            {loggedUser ? (
              loggedUser
            ) : (
              <div className="loggedIn">{userName.name} </div>
            )}
          </li> */}
          {/* <button onClick={handleLogOut}>LogOut</button> */}
          <button onClick={() => handleClick()}>
            {click === true ? "LogIn" : "LogOut"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
