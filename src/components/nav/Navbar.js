import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/image.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const [isAdmin, setAdmin] = useState(props.isAdmin);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
    console.log(JSON.parse(localStorage.getItem("loggedIn")));
  }, [isLoggedIn]);

  useEffect(() => {
    setAdmin(JSON.parse(localStorage.getItem("Admin is loggedIn")));
    console.log(JSON.parse(localStorage.getItem("Admin is loggedIn")));
  }, [isAdmin]);

  const handleClick = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("registeredUser");
    localStorage.removeItem("AdoptionForm");
    localStorage.removeItem("Admin is loggedIn");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-inner">
          <img src={logo} alt="Not found" onClick={() => navigate("/")} />
          <h1 className="header-title" onClick={() => navigate("/")}>
            Animal Shelter
          </h1>
        </div>

        <div className="header-menu">
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              About
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
              to="/articles"
              style={({ isActive }) => ({
                color: isActive ? " purple" : "black",
              })}
              end
              className="about-nav"
            >
              Articles
            </NavLink>
          </li>

          <li>
            {isLoggedIn ? (
              <div
                className="about-nav"
                onClick={() => {
                  handleClick();
                }}
              >
                Logout
              </div>
            ) : (
              <div
                className="about-nav"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </div>
            )}
          </li>

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/addarticles"
                  style={({ isActive }) => ({
                    color: isActive ? " purple" : "black",
                  })}
                  end
                  className="about-nav"
                >
                  +Add
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/list"
                  style={({ isActive }) => ({
                    color: isActive ? " purple" : "black",
                  })}
                  end
                  className="about-nav"
                >
                  List
                </NavLink>
              </li>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
