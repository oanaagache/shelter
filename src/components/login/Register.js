import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import "../../../src/index.css";

const Register = () => {
  let navigate = useNavigate();

  const [registeredUser, setRegisteredUser] = useState({
    name: "",
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

      <Form onSubmit={handleSubmit} className="flex flex-col m-5">
        <h4 className="max-w-full flex flex-col m-auto object-contain items-center text-4xl mb-5 box-content">
          Create Acount
        </h4>

        <div className="max-w-full flex flex-col m-auto object-contain items-center">
          <label
            htmlFor="inputName"
            className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg mb-2 object-contain items-start box-content"
          >
            Name:
          </label>
          <input
            name="name"
            className="form-control mb-2"
            id="inputName"
            placeholder="Name"
            value={registeredUser.name}
            onChange={(e) =>
              setRegisteredUser({
                ...registeredUser,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div className="max-w-full flex flex-col m-auto object-contain items-center">
          <label
            htmlFor="inputSurname"
            className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg mb-2 object-contain items-start box-content"
          >
            Surname:
          </label>
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

        <div className="max-w-full flex flex-col m-auto object-contain items-center">
          <label
            htmlFor="inputLastName"
            className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg mb-2 object-contain items-start box-content"
          >
            Email:
          </label>
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
            value={registeredUser.password}
            onChange={(e) =>
              setRegisteredUser({
                ...registeredUser,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className="max-w-full flex flex-col m-auto object-contain items-center mt-5 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg box-content">
          Have already an account?
          <span>
            <h6 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg box-content">
              <Link to="/login">Login here</Link>
            </h6>
          </span>
        </div>
        <div className="max-w-full flex flex-col m-auto object-contain items-center mt-5 box-content">
          {" "}
          <button
            type="submit"
            className="text-white bg-pink w-20 sm:w-20 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg xxl:text-lg p-2 h-10 mt-5 sm:mx-1 box-content"
          >
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
