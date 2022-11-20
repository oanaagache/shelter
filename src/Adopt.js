import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
//import logo from "./images/image4.svg";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import GetToken from "./GetToken";

const Adopt = () => {
  console.log("Adopt.js/ Get token:");

  const token = GetToken();
  //console.log(token);

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjE1M2UwYjA3OWFiZTA3MmM1MTgxZjFiMzQ0ZTg3MWFmNDI4NzU2MzExMTIyNzc0NmZmYjhjNzk5ZDA1YWM0ZmQ4NWY4YzhhOTkzNWM5ZWEzIiwiaWF0IjoxNjY4OTUwMTA2LCJuYmYiOjE2Njg5NTAxMDYsImV4cCI6MTY2ODk1MzcwNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.CQPVCwOA0fpnI7itglQBekgMyBdB_qpE-uoU1bKvZGHlKckmtBG5biUKTzd0NwdoTZHIby37MfMf01pt46eohfxJnvU-bq930APxket4UiUVRKCfQcVEkLmDRilFX7fxy6o2_W8uckEezgFmhNMqJr4bVgwgXUXA_0U-KE1THFxsj5fYE-3Q3QrrNe5fL7PI-DDP8Jy9zVsc7L-1Rm3dj-iBPD1YyP9P4zzgKiyh79jtYIsbGUQEUhMvw227jx6ryvfw2uH5bGBB-UnTnq9C4ypq428eBQBTExYPMA0GNBdErsp2BE08FT5cvanh6mkeFrPoLh9dXRSHNd0cI7eW2Q";

  const bearer = "Bearer " + token;

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
