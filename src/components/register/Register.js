import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "./Register.css";

const Register = () => {
  let navigate = useNavigate();

  const [registeredUser, setRegisteredUser] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });

  //store values in localStorage
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //store user in json format in "user"
    localStorage.setItem("user", JSON.stringify(registeredUser));
    navigate("/login");
  };

  return (
    <>
      <div className="register-cont">
        <div className="register-inner">
          <img
            style={({ height: "10px" }, { width: "10px" })}
            src={logo}
            alt="Not found"
          />
          <Link className="register-arrow" to="/adopt">
            Back{" "}
          </Link>
        </div>

        <div className="register-title">Create Acount</div>

        <div className="register-form">
          <Form onSubmit={handleSubmit}>
            <div className="register-form-group col-md-12">
              <label htmlFor="inputFirstName">First Name:</label>
              <input
                name="firstName"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
                value={registeredUser.firstName}
                onChange={(e) =>
                  setRegisteredUser({
                    ...registeredUser,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="register-form-group col-md-12">
              <label htmlFor="inputSurname">Surname:</label>
              <input
                name="surname"
                className="form-control"
                id="inputSurname"
                placeholder="Surname"
                value={registeredUser.surname}
                onChange={(e) =>
                  setRegisteredUser({
                    ...registeredUser,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="register-form-group col-md-12">
              <label htmlFor="inputEmail">Email:</label>
              <input
                name="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                value={registeredUser.email}
                onChange={(e) =>
                  setRegisteredUser({
                    ...registeredUser,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="register-form-group col-md-12">
              <label htmlFor="inputPassword">Password:</label>
              <input
                name="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={registeredUser.password}
                onChange={(e) =>
                  setRegisteredUser({
                    ...registeredUser,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              Have already an account?
              <span>
                <h6>
                  <Link to="/login">Login here</Link>
                </h6>
              </span>
            </div>
            <div className="register-button" style={{ paddingRight: 700 }}>
              {" "}
              <button type="submit" className="filter-btn">
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
