import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import logo from "./image4.svg";
import { Link } from "react-router-dom";
//import GetToken from "./GetToken";
import Cards from "./Cards";
//import { Dropdown } from "bootstrap";

const src = "https://via.placeholder.com/280";
const name = "Alexandre Dumas";

const Adopt = () => {
  //var token = GetToken();
  //console.log("Adopt.js: token: " + token);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImY0YmM2NWMxZDgzNmUzNjY1Njg1YTQ4ZDY2YzhiODAxYzhiMjhkNjEzOWZmN2QyYWRmNmU0MGQxNDVjM2NkNjIzYWYyMWU4N2U2ZjdjNTA0IiwiaWF0IjoxNjU0Mjc5NjU4LCJuYmYiOjE2NTQyNzk2NTgsImV4cCI6MTY1NDI4MzI1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.s6a0MeVe8R_YzDVuZpkVLRwaCyLq4RxYakI2J2pTRrt_AyKWBlnkbezTBVl_fWJ9EUhUjkv9Q22XRynTCfVgmjrylTEuO5p2xZ43nrrriwtzYepuaoQJDOvLddtbz0EdanUmRMhOmSF31fwwJN_kwJAYxCdqIk-YT9-iKfLE2adGurx8f46JuleQZxgyMheXtogYPVi5Ll1_ML7Nkm6ZZAa3O3xgGoPGkFViSnBdYTKlsO8O59H_vCZgNNs49xwMbXBi6R3csi4QSbAhUk1MPy2smdUN1gxcU3YRczScTby48154OFFnquhoLYrWZj5f15a1Vu8klHRuvsfZhzdhyA";
  const url = "https://api.petfinder.com/v2/types";
  const bearer = "Bearer " + token;

  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  useEffect(() => {
    console.log("useEffect: Types");
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
    console.log("useEffect: Breeds");
    // for each type, get its breeds:
    //console.log("type: " + type);
    if (type == "") return;
    var breedsUrl = url + "/" + type + "/breeds";
    //console.log("breedsUrl: " + breedsUrl);

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
        //console.log("breedsArray:" + breedsArray);
        setBreeds(breedsArray);
      });
  }, [type]);

  const [gender, setGender] = useState("");
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    console.log("useEffect: Genders");
    var gendersArray = ["Female", "Male", "Unknown"];
    setGenders(gendersArray);
  }, []);

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    console.log("useEffect: Sizes");
    var sizesArray = ["Small", "Medium", "Large", "XLarge"];
    setSizes(sizesArray);
  }, []);

  const [age, setAge] = useState("");
  const [ages, setAges] = useState([]);
  useEffect(() => {
    console.log("useEffect: Ages");
    var agesArray = ["Baby", "Young", "Adult", "Senior"];
    setAges(agesArray);
  }, []);

  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);
  useEffect(() => {
    console.log("useEffect: Colors");
    // for each type, get its colors:
    //console.log("type: " + type);
    if (type == "") return;
    var typeUrl = url + "/" + type;
    //console.log("typeUrl: " + typeUrl);

    fetch(typeUrl, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var colorsArray = data.type.colors;
        //console.log("colorsArray: " + colorsArray);
        setColors(colorsArray);
      });
  }, [type]);

  const [casetval, setCasetval] = useState(false);

  const [click, handleClick] = useState(false);
  /*
  const handleClick = (event) => {
    console.log(breed);
  };
  */

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
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
        </div>
      </div>

      <div>
        <button
          type="submit"
          style={{
            textColor: "aliceblue",
            width: "200px",
            height: "50px",
            backgroundColor: "darkgreen",
            fontSize: "24px",
            transform: "translateX(300%)",
          }}
          onClick={() => handleClick(true)}
        >
          Apply filters
        </button>
        <div>
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
    </div>
  );
};

export default Adopt;
