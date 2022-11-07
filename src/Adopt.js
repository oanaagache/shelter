import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
import logo from "./others/images/image4.svg";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Adopt = () => {
  const [visible, setVisible] = useState(4);
  //const accessToken = GetToken();
  const showMoreCards = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImQzNzE4ZDk2NDQ2OWU1N2M1MmZjZGRjM2JlNjgwNmRmNWJjNjkxN2NlMDYxYmVkZDc4MTc1NzY1MzRhOTAwZGEzMjJjN2JjZjRmZmQyMWU5IiwiaWF0IjoxNjY3ODMwNjQzLCJuYmYiOjE2Njc4MzA2NDMsImV4cCI6MTY2NzgzNDI0Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.arpm2TCpXGzGJWk9MIM5we17yIHiFBHGDr4_-D4IkZq9Ntz6KhsnwgEdUwI9zcxJuMkKhXZDJTDrs0WKKXnLozb4a10wPijzfk0aMTSNlzhEO6kdp6iGhIgLHC7NFj2Qgfd_I1mz0E_k9Dg93i8WY0P9XyrKoHKTn_zkZU357DqoeEI2AFEzArHuSl0iD8QoLIi__n-JWkpL0RIOL4K7Ly5fFmJJUpUQfZkdY3Orue0mWOWv_LrIMOMQTQ0KorFTkgSJGQULX-JRBzie2x-IW87cJllBOWTLqRAXfw3zAJRTzLhEkuxLCWXfVmoFezw96HATqh-8CmsN2_Tfg8lLDQ";

  //const bearer = "Bearer " + accessToken.token;
  const bearer = "Bearer " + token;

  const url = "https://api.petfinder.com/v2/types";

  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  useEffect(() => {
    //const url = "https://api.petfinder.com/v2/types";
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
        //console.log(cats, children, dogs);
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          typesArray.push(data.types[i].name);
        }
        //console.log("typesArray:" + typesArray);
        setTypes(typesArray);
      })
      .catch((error) => {
        //console.error("Error:", error);
      });
  }, []);

  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    //console.log("useEffect: Breeds");
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

  const [click, handleClick] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log(" Checkbox is checked");
    } else {
      console.log("Checkbox is NOT checked");
    }
    setIsChecked((current) => !current);
  };

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/" style={{ textDecoration: "none" }}>
                Back
              </Link>
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
                // checked={children}
                // onChange={(e) => setChildren(e.target.value)}
                value={isChecked}
                onChange={handleChange}
              />
              <label>Children</label>

              <input
                type="checkbox"
                // checked={isChecked}
                // onChange={(e) => setDogs(e.target.value)}
                value={isChecked}
                onChange={handleChange}
              />
              <label>Dogs</label>

              <input
                type="checkbox"
                // checked={cats}
                // onChange={(e) => setCats(e.target.value)}
                value={isChecked}
                onChange={handleChange}
              />
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
            visible={visible}
          />
        ) : null}
      </div>

      <div className="results">
        <div className="button">
          <button className="showMore-btn" onClick={showMoreCards}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
