import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";

const Login = (props) => {
  //const { handleLogin, setUser, user } = props;
  let navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //store values in localStorage
  const handleLogin = (evt) => {
    evt.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      loginUser.email === loggedUser.email &&
      loginUser.password === loggedUser.password
    ) {
      //localStorage.setItem("loggedIn", true);
      navigate("/");
      //setIsLoggedIn(true);
      //console.log(isLoggedIn);
      // console.log("loggedUser");
      // console.log(loggedUser);
      // console.log("loginUser");
      // console.log(loginUser);
    } else {
      alert("Wrong Email or Password");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //     setIsLoggedIn(true);
  //     console.log("foundUser");
  //     console.log(foundUser);
  //     // console.log("user");
  //     // console.log(user);
  //   }
  // }, []);

  //if there's a user show the message below
  // if (user) {
  //   return <div>{user.name} is loggged in</div>;
  // }

  // const handleLogOut = () => {
  //   localStorage.removeItem("loggedIn");Mec
  //   navigate("/login");
  //   localStorage.clear();
  // };

  // if there's no user, show the login form
  return (
    <>
      <div className="adoption-container">
        <div className="adoption-header">
          <div className="adoption-content">
            <div className="adoption-inner">
              <img style={({ height: 1 }, { padding: 10 })} src={logo} />
              <h2>
                <Link to="/adopt" style={{ textDecoration: "none" }}>
                  Back
                </Link>
              </h2>
            </div>
          </div>
          <h1 className="adoption-title">Login</h1>
        </div>

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
