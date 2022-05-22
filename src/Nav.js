import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import logo from "./image.png";
import logo2 from "./image2.png";

const Navbar = () => {
  return (
    <div className="header">
      <div class="header-content">
        <div class="header-inner">
          <img src={logo} />
          <h1 class="header-title">Paws Animal Shelter</h1>
        </div>

        <ul className="header-menu">
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/search">
              Search
              <img style={{ height: 15 }} src={logo2} />
            </Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/foster">Foster</Link>
          </li>
          <li>
            <Link to="/adopt">
              <p class="adopt-nav">Adopt</p>
            </Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
