import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/image.png";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let navigate = useNavigate();
  const { isLoggedIn, isAdmin } = props;

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("Admin is loggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("registeredUser");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-inner">
          <img
            style={({ padding: 5 }, { height: "20px" })}
            src={logo}
            alt="Not found"
            onClick={() => navigate("/")}
          />
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

          {isLoggedIn ? (
            <button
              className="btn-log"
              onClick={() => {
                handleClick();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn-log"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}

          {/* {isAdmin ? (
            <li>
              <NavLink
                to="/list"
                style={({ isActive }) => ({
                  color: isActive ? " purple" : "black",
                })}
                end
                className="about-nav"
              >
                Articles
              </NavLink>
            </li>
          ) : (
            <div>Not Admin</div>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
