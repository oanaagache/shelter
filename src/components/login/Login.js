import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";

const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //store values in localStorage
  const handleLogin = (evt) => {
    evt.preventDefault();

    //memoreaza user codificata in json
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      user.email === loggedUser.email &&
      user.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

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
          <h1 className="adoption-title">Create Acount</h1>
        </div>

        <div
          className="adoption-form"
          style={
            ({ justifyContent: "center" },
            { display: "flex" },
            { alignItems: "center" },
            { margin: "auto" })
          }
        >
          <Form onSubmit={handleLogin}>
            <div style={{ paddingTop: 40 }}>
              <div className="form-group ">
                <label htmlFor="inputLastName">Email:</label>
                <input
                  name="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group ">
                <label htmlFor="inputAddress1">Password:</label>
                <input
                  name="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      [e.target.name]: e.target.value,
                    })
                  }
                  //onChange={(e) => setUser(e.target.value)}
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
              <div className="button">
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
