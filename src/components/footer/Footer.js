import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-inner">
          <h4 className="footer-title">
            © 2022 Paws Animal Shelter. All Rights Reserved
          </h4>

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
