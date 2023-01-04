import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "../form/AdoptionForm.scss";

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
      loginUser.email == loggedUser.email &&
      loginUser.password == loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      setIsLoggedIn(true);
      navigate("/");
      //console.log("isLoggedIn Login: " + isLoggedIn);
    } else {
      alert("Wrong Email or Password");
    }
  };

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  }, []);
  console.log("isLoggedIn2 uE Login: " + isLoggedIn);

  return (
    <>
      <div className="adoption-container">
        <div className="adoption-header">
          <div className="adoption-content">
            <img
              style={({ height: "10px" }, { width: "10px" })}
              src={logo}
              alt="Not found"
            />
            <Link className="arrow" to="/adopt">
              Back{" "}
            </Link>
          </div>
        </div>
        <h1 className="adoption-title">Login</h1>

        <div
          className="adoption-form"
          style={
            ({ justifyContent: "center" },
            { margin: "auto" },
            { paddingLeft: 800 })
          }
        >
          <Form onSubmit={handleLogin} style={{ paddingTop: 40 }}>
            <div>
              <div className="form-group col-md-4">
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

              <div className="form-group col-md-4">
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
              <div className="button" style={{ paddingRight: 700 }}>
                {" "}
                <button type="submit" className="filter-btn">
                  Login
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
