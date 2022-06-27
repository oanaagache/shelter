import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./others/images/image.png";
import logo2 from "./others/images/image2.png";

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
            Search
            <img style={{ height: 15 }} src={logo2} />
          </li>
          <li>
            <Link to="/about">
              <span className="about-nav">About us</span>
            </Link>
          </li>
          <li>
            <Link to="/donate">
              <span className="donate-nav">Donate</span>
            </Link>
          </li>

          <li>
            <Link to="/foster">
              <span className="foster-nav">Foster</span>
            </Link>
          </li>

          <li>
            <Link to="/adopt">
              <span className="adopt-nav">Adopt</span>
            </Link>
          </li>
          <li>
            <Link to="/other">
              <span className="other-nav">Other</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
