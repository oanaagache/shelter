import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../images/image4.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CountrySelector from "../countryselector/CountrySelector";
import "../../../src/index.css";

const AdoptionForm = (props) => {
  const { isLoggedIn } = props;
  const { name } = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState({});

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [address1, setAddress1] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [routine, setRoutine] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFirstName("");
    setSurname("");
    setEmail("");
    setAddress1("");
    setCity("");
    setCountry("");
    setCode("");
    setStatus("");
    setRoutine("");
    navigate(`/success/${name}`);

    const newUser = {
      firstName: user.name,
      surname: user.surname,
      email: user.email,
      address1: address1,
      city: city,
      country: country,
      code: code,
      status: status,
      routine: routine,
    };

    // mNilWNmxsQkyhpwf0tlyYEII5S4rzWAkYZfd6KFsQ7ckLjxnB4psXFnBdww1ZAkl

    //https://data.mongodb-api.com/app/data-fbstp/endpoint/data/v1

    fetch(
      "https://cors-anywhere.herokuapp.com/https://data.mongodb-api.com/app/data-fbstp/endpoint/data/v1/action/insertOne",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "mNilWNmxsQkyhpwf0tlyYEII5S4rzWAkYZfd6KFsQ7ckLjxnB4psXFnBdww1ZAkl",
        },
        body: JSON.stringify({
          collection: "shelter",
          database: "users",
          dataSource: "Shelter",
          document: newUser,
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log("newUser:");
    console.log(newUser);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  //console.log("isLoggedIn Form: " + isLoggedIn);

  return (
    <div className="max-w-full">
      <div className="w-full">
        <div className="flex m-4">
          <div className="flex">
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

          <h1
            className="flex box-content h-4 mb-5 sm:h-4  md:h-4 lg:h-4 xl:h-4 xxl:h-4
             m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl"
          >
            Adoption Form
          </h1>
        </div>
      </div>

      <Form onSubmit={handleSubmit} className="mx-4 box-content">
        <div
          className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row
            pl-5 m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            box-content"
        >
          {isLoggedIn ? (
            <div className="p-2 col-md-3 box-content">
              <label
                htmlFor="inputfirstName"
                className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
              >
                First Name:
              </label>
              <input
                type="text"
                className="form-control "
                id="inputFirstName"
                value={user.name || ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          ) : (
            <div className="p-2 col-md-3 box-content">
              <label
                htmlFor="inputfirstName"
                className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
              >
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          )}
          {isLoggedIn ? (
            <div className="p-2 col-md-3 box-content">
              <label
                htmlFor="inputSurname"
                className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
              >
                Surname:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputSurname"
                value={user.surname || ""}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
          ) : (
            <div className="p-2 col-md-3 box-content">
              <label
                htmlFor="inputSurname"
                className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
              >
                Surname:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputSurname"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
          )}

          {isLoggedIn ? (
            <div className="p-2 col-md-3 box-content">
              <label
                htmlFor="inputEmailAddress"
                className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
              >
                Email address:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmailAddress"
                value={user.email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          ) : (
            <div className="p-2 col-md-3 box-content">
              <label
                htmlFor="inputEmailAddress"
                className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
              >
                Email address:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmailAddress"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
        </div>

        <div
          className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xxl:flex-row m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl
            pl-5 box-content"
        >
          <div className="p-2 col-md-4 box-content">
            <label
              htmlFor="inputAddress1"
              className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
            >
              Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress1"
              placeholder="Street name and number"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>
          <div className="p-2 col-md-2 box-content">
            <label
              htmlFor="inputCity"
              className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
            >
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="p-2 col-md-2 box-content">
            <label
              htmlFor="inputCountry"
              className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
            >
              Country
            </label>
            <CountrySelector setCountry={setCountry} />
          </div>

          <div className="p-2 col-md-1 box-content">
            <label
              htmlFor="inputZip"
              className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg"
            >
              Code:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="Zip code"
            />
          </div>
        </div>

        <div className="p-2 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl box-content">
          <h3 className="pl-5 pt-3 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl box-content">
            Family status and daily routine
          </h3>
          <div></div>
          <h4 className="pl-5 pt-3 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl box-content">
            Do you have children?
          </h4>

          <div className="pl-5 pt-3 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl box-content">
            <label
              htmlFor="text"
              className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg box-content"
            >
              If your answer is "Yes", please tell us a little bit about their
              experience and confort level around animals.
            </label>
            <textarea
              className="form-control"
              id="text"
              rows="5"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            ></textarea>
          </div>
          <h4 className="pl-5 pt-3 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl box-content">
            Do you have pets at home?
          </h4>
          <div className="pl-5 pt-3 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl xxl:text-xl box-content">
            <label
              htmlFor="text"
              className="text-lg sm:text-lg md:text-xlg lg:text-lg xl:text-lg xxl:text-lg box-content"
            >
              If your answer is "Yes", please tell us a little bit about their
              experience and confort level around other animals.
            </label>
            <textarea
              className="form-control"
              id="text"
              rows="5"
              value={routine}
              onChange={(e) => setRoutine(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="pl-8 ">
          <button
            className="text-white bg-pink w-20 p-2 h-10 my-20       box-content                    
              text-xs"
            onClick={() => {
              navigate("/adopt");
            }}
          >
            Back
          </button>

          <button
            type="submit"
            className="text-white bg-pink w-20 p-2 h-10 mx-4 my-20 box-content                           
              text-xs  "
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdoptionForm;
