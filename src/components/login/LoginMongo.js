import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "../login/Login.css";

const LoginMongo = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const params = useParams();

  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  const [userRecord, setUserRecord] = useState([]);

  // //  fetches the records from the database.
  // useEffect(() => {
  //   async function getRecords() {
  //     const response = await fetch(
  //       // `http://localhost:3001/user/${params.email}`
  //       `http://localhost:3001/user/${loginUser.email}`
  //     );
  //     if (!response.ok) {
  //       const message = `An error occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }
  //     const records = await response.json();
  //     setRecords(records);
  //     // console.log(records);
  //   }
  //   getRecords();
  //   return;
  // }, [params.email, navigate]);

  //store values in localStorage
  const handleLogin = (evt) => {
    evt.preventDefault();

    console.log(records);
    console.log(loginUser);

    async function getUser(user) {
      const response = await fetch(`http://localhost:3001/user/${user}`, {
        method: "GET",
      });
      const userRecord = await response.json();
      // console.log(userRecord[0]);
      // console.log(userRecord[0].email);
      // console.log(userRecord[0].password);
      //return userRecord;
      setUserRecord(userRecord);
    }

    const user = userRecord[0];
    getUser(loginUser.email);
    console.log(user);
    console.log(user.email);
    console.log(user.password);

    // let length = records.length;
    // for (let i = 0; i < length; i++) {
    //   console.log(records[i]);
    // }

    if (
      loginUser.email === user.email &&
      loginUser.password === user.password
    ) {
      alert("You are logged in");
      //console.log("You are logged in");
    } else {
      alert("Please register");
      //console.log("Please register");
    }

    // var emailsArray = [];
    // var length = records.length;
    // for (var i = 0; i < length; i++) {
    //   console.log(records[i].email);
    //   emailsArray.push(records[i].email);
    //   if (
    //     loginUser.email === records[i].email &&
    //     loginUser.password === records[i].password
    //   ) {
    //     alert("You are logged in");
    //   } else {
    //     alert("Please register");
    //   }
    // }

    //console.log(records.email);
  };

  return (
    <>
      <div className="login-cont">
        <div className="login-inner">
          <img
            style={({ height: "10px" }, { width: "10px" })}
            src={logo}
            alt="Not found"
          />
          <Link className="login-arrow" to="/adopt">
            Back{" "}
          </Link>
        </div>

        <div className="login-title">
          Login {records.email}
          {records.password}
        </div>

        <div className="login-form">
          <Form onSubmit={handleLogin}>
            <div className="login-form-group col-md-12">
              <label htmlFor="inputEmail">Email:</label>
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

            <div className="login-form-group col-md-12">
              <label htmlFor="inputPassword">Password:</label>
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
                  <Link to="/registermongo">Register here mongo</Link>
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

export default LoginMongo;
