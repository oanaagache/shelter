import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="footer-inner">
          <div className="footer-title">
            © 2023&nbsp;Animal Shelter. All Rights Reserved
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
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
