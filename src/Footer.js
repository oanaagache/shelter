import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-inner">
          <h4 className="footer-title">
            Copyright © 2022 Paws Animal Shelter. All Rights Reserved
          </h4>
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
  );
};

export default Footer;
