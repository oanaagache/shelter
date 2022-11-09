import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./others/images/image.png";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-inner">
          <img src={logo} />
          <h1 className="header-title">Paws Animal Shelter</h1>
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
