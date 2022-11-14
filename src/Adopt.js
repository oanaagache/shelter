import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
//import logo from "./images/image4.svg";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import GetToken from "./GetToken";

const Adopt = () => {
  console.log("Adopt.js/ Get token:");
  var token = GetToken();
  console.log("Adopt.js/ token:");
  console.log(token);
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImVmYmJmOWVkYTczN2ZmZGE2N2E3NmMwZWQ0YzhkYWRiN2Q5OGI5MTgwOWQyNmJiZjkzYmNkM2IzYzg0OWFhYjRlNTgyYWJkMDBhMjFhM2JlIiwiaWF0IjoxNjY4MDAyNDM0LCJuYmYiOjE2NjgwMDI0MzQsImV4cCI6MTY2ODAwNjAzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.viY0fEUerf010vrIoVUijm2CF8Yo0-NVAwQ9MPnUdqDvC1GYB5f6-q_F1rTuRUHrsMn5r4pAuQSzk6mgl9xFuqYIcgALLhpG1bIkywnPt6GzuW6rTa4Y9GW7YOg3dSB9WB33E8S6aDXwxh1lVjpSG1LkryQ_1lQpTyB1vT40_Ts046THEIvRTlmqcIt-UZOyg78QGm0OMLbtS6svWyAs8tE0A2qKC0cwIq1LFGguq9m491vRFlgVTMUN54X-L9KU-1iCQEPTAA8aWrH2Mbzdee6XhdJS_pBT0EsvLUdPdm6TFGPj2gJOx1q8IK_oEvub3H13WdbQp8SmjPKQPVeglQ";
  const bearer = "Bearer " + token;
  console.log("bearer=");
  console.log(bearer);
  console.log("token:");
  console.log(token);

  const url = "https://api.petfinder.com/v2/types";

  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Types");
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // build a new array that will contain all the names from JSON.
        var typesArray = [];
        var length = data.types.length;
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          typesArray.push(data.types[i].name);
        }
        //console.log("typesArray:" + typesArray);
        setTypes(typesArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Breeds");
    // for each type, get its breeds:
    //console.log("type: ");
    //console.log(type);
    if (type == "") return;
    var breedsUrl = url + "/" + type + "/breeds";
    //console.log("breedsUrl: " );
    //console.log(breedsUrl);

    fetch(breedsUrl, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var breedsArray = [];
        var length = data.breeds.length;
        for (var i = 0; i < length; i++) {
          //console.log(data.breeds[i].name);
          breedsArray.push(data.breeds[i].name);
        }
        //console.log("breedsArray:" );
        //console.log(breedsArray);
        setBreeds(breedsArray);
      });
  }, [type]);

  const [gender, setGender] = useState("");
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Genders");
    var gendersArray = ["Female", "Male", "Unknown"];
    setGenders(gendersArray);
  }, []);

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Sizes");
    var sizesArray = ["Small", "Medium", "Large", "XLarge"];
    setSizes(sizesArray);
  }, []);

  const [age, setAge] = useState("");
  const [ages, setAges] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Ages");
    var agesArray = ["Baby", "Young", "Adult", "Senior"];
    setAges(agesArray);
  }, []);

  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Colors");
    // for each type, get its colors:
    //console.log("type: ");
    //console.log(type);
    if (type == "") return;
    var typeUrl = url + "/" + type;
    //console.log("typeUrl: ");
    //console.log(typeUrl);

    fetch(typeUrl, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var colorsArray = data.type.colors;
        //console.log("colorsArray: " );
        //console.log(colorsArray);
        setColors(colorsArray);
      });
  }, [type]);

  const [casetval, setCasetval] = useState(false);

  const [click, handleClick] = useState(false);

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            {/* <img style={({ height: 1 }, { padding: 10 })} src={logo} /> */}
            <h2>
              <Link to="/">Back</Link>
            </h2>
          </div>

          <h1 className="adopt-title">
            These lovely souls are waiting for you
          </h1>
        </div>
      </div>

      <div className="adopt-drop">
        <h3 className="adopt-drop-title">Refine your search:</h3>

        <div className="drop">
          <div className="drop1">
            <h2>Type:</h2>
            <Dropdown selected={type} setSelected={setType} options={types} />
          </div>

          <div className="drop2">
            <h2>Breed:</h2>
            <Dropdown
              selected={breed}
              setSelected={setBreed}
              options={breeds}
            />
          </div>

          <div className="drop3">
            <h2>Gender:</h2>
            <Dropdown
              selected={gender}
              setSelected={setGender}
              options={genders}
            />
          </div>

          <div className="drop4">
            <h2>Size:</h2>
            <Dropdown selected={size} setSelected={setSize} options={sizes} />
          </div>

          <div className="drop5">
            <h2>Age:</h2>
            <Dropdown selected={age} setSelected={setAge} options={ages} />
          </div>

          <div className="drop6">
            <h2>Color:</h2>
            <Dropdown
              selected={color}
              setSelected={setColor}
              options={colors}
            />
          </div>

          <div className="check">
            <h2>Must be good with:</h2>
            <h3 className="checklist">
              <input
                type="checkbox"
                checked={casetval}
                onChange={() => setCasetval(!casetval)}
              />
              <label>Children</label>

              <input type="checkbox" />
              <label>Dogs</label>

              <input type="checkbox" />
              <label>Cats</label>
            </h3>
          </div>

          <div className="drop7">
            <h2></h2>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="filter-btn" onClick={() => handleClick(!click)}>
          {click == true ? "Reset Filters" : "Apply filters"}
        </button>
      </div>

      <div className="cards">
        {click ? (
          <Cards
            type={type}
            breed={breed}
            gender={gender}
            size={size}
            age={age}
            color={color}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Adopt;
