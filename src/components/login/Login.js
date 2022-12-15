import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "../../../src/index.css";
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
      console.log("isLoggedIn Login: " + isLoggedIn);
    } else {
      alert("Wrong Email or Password");
    }
  };

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
  }, []);
  console.log("isLoggedIn2 uE Login: " + isLoggedIn);

  return (
    <div className="max-w-full">
      <div className="w-full">
        <div className="flex m-4 box-content">
          <img
            className="h-4 mr-1 mt-2 box-content 
              sm:h-4 sm:mr-1 
              md:h-4 md:mr-1 
              lg:h-4 lg:mr-1 
              xl:h-4 xl:mr-1
              xxl:h-4 xxl:mr-1"
            src={logo}
            alt="Not found"
          />
          <h2
            className="flex h-4 box-content
              sm:h-4 sm:mr-2 
              md:h-4 md:mr-2 
              lg:h-4 lg:mr-2 
              xl:h-4 xl:mr-2 
              xxl:h-4 xxl:mr-2
              text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl xxl:text-2xl"
          >
            <Link to="/" className="no-underline">
              Back
            </Link>
          </h2>
        </div>
      </div>

      <Form onSubmit={handleLogin} className="flex flex-col m-5 box-content">
        <h4 className="max-w-full flex flex-col m-auto object-contain items-center text-4xl mb-5 box-content">
          Login
        </h4>

        <div className="max-w-full flex flex-col m-auto object-contain items-center box-content">
          <label
            htmlFor="inputLastName"
            className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg mb-2 object-contain items-start box-content"
          >
            {" "}
            Email:
          </label>

          <input
            name="email"
            className="form-control mb-2 box-content"
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

        <div className="max-w-full flex flex-col m-auto object-contain items-center">
          <label
            htmlFor="inputAddress1"
            className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg mb-2 object-contain items-start box-content"
          >
            Password:
          </label>
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
        <div className="max-w-full flex flex-col m-auto object-contain items-center mt-5 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg box-content">
          Don't have an account?
          <span>
            <h6 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg">
              <Link to="/register">Register here</Link>
            </h6>
          </span>
        </div>
        <div className="max-w-full flex flex-col m-auto object-contain items-center mt-5 box-content">
          {" "}
          <button
            type="submit"
            className="text-white bg-pink w-20 sm:w-20 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg p-2 h-10 mt-5 sm:mx-1 box-content"
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
