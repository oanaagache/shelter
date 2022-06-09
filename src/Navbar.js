import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import logo from "./images/image.png";
import logo2 from "./images/image2.png";

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
          <li>About us</li>
          <li>Donate</li>
          <li>Foster</li>
          <li>
            <Link to="/adopt">
              <span className="adopt-nav">Adopt</span>
            </Link>
          </li>
          <li>Other</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
