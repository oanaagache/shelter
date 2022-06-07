import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import logo from "./images/image4.svg";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Adopt = () => {
  //var token = GetToken();
  //console.log("Adopt.js: token: " + token);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6Ijk5ZGE2MTUzNjg2Yzk0OGViYzg0Y2FmMDMzYjU0M2RjYzFmZDliNGVlMTRlZGY0NmMxOWExNDNmYjMyNTFlYjgwNmIyN2YyOWZhYTk0MjJkIiwiaWF0IjoxNjU0NTkzNzAyLCJuYmYiOjE2NTQ1OTM3MDIsImV4cCI6MTY1NDU5NzMwMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.k0A8IBqUbBDjQQeR7kvzYgpZeFqeGkcP9-qunuYIiJZWKn3zhaRUjL9hfBe3P1yJlV_m2n7vTVkHmO4Y_EGmNvwCOnULVtdvn2Rc818_-EnPrqQahd9HKdCO1ZLZYn9VF35vsSkq_ubOf0ko69r7viwmxC62Manx1_OMgbsltCTwf1NWJIpCII21F-y4fN0nWbAweqKuLUxkAKXyT2JSfFP6zYffD-NHVcmi86NeQugjpEmkTBj7PY_tN0UwhHe5mBY29wPHFnGCtgrGFnFXl0wfSqNPZBSoSK7dMU166EvzsTYF2iy226-hh7osU1HJx_vs5tn9XSUDv1yKHgrgLQ";
  const bearer = "Bearer " + token;

  const url = "https://api.petfinder.com/v2/types";

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

          <div className="drop7">
            <h2></h2>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="filter-btn" onClick={() => handleClick(true)}>
          Apply filters
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
