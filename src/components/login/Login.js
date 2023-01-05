import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "../login/Login.css";

const Login = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  let navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  //store values in localStorage
  const handleLogin = (evt) => {
    evt.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      loginUser.email === loggedUser.email &&
      loginUser.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  }, []);

  return (
    <>
      <div className="login-cont">
        <div className="login-inner">
          <img
            style={({ height: "10px" }, { width: "10px" })}
            src={logo}
            alt="Not found"
          />
          <Link className="arrow" to="/adopt">
            Back{" "}
          </Link>
        </div>

        <div className="login-title">Login</div>

        <div className="login-form">
          <Form onSubmit={handleLogin}>
            <div className="login-form-group col-md-12">
              <label htmlFor="inputLastName">Email:</label>
              <input
                name="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                value={loginUser.email}
                onChange={(e) =>
                  setLoginUser({
                    ...loginUser,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="login-form-group col-md-1">
              <label htmlFor="inputAddress1">Password:</label>
              <input
                name="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={loginUser.password}
                onChange={(e) =>
                  setLoginUser({
                    ...loginUser,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              Don't have an account?
              <span>
                <h6>
                  <Link to="/register">Register here</Link>
                </h6>
              </span>
            </div>
            <div className="login-button">
              {" "}
              <button type="submit" className="filter-btn">
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
