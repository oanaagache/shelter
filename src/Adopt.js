import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
import logo from "./others/images/image4.svg";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import GetToken from "./GetToken";

const Adopt = () => {
  const [visible, setVisible] = useState(4);
  //const accessToken = GetToken();
  const showMoreCards = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjQ4ODM0MTM5ZmUyYmM4ODdiNTMyZGRlY2M5MzY1NzI5M2ZkOGY3NmU3YzNhMDA3OGY0OTIxOGZjOTE5NmVhZGExN2M5NjhmNTU4YzJkMzVmIiwiaWF0IjoxNjY3ODIyODI0LCJuYmYiOjE2Njc4MjI4MjQsImV4cCI6MTY2NzgyNjQyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.QylFIdsazmz3m7vm_sG9iCpmAtlD4bLYfseT5hhfT_cOD70FYyn0KNUieIa9oEIDM1AMGVLEH7QeHq52UpsYvJZ6oQ8e0O7HMY86JwqrtFf5GFAfgRXgQHgBfx2l6h1jGroy5jrdg3s-55OKPQuxNMuepRrrBsILJyZnrUEj7WfgQ8KTL-LjW606KL1BpKBX4Ciw_Pr3ezlfKv58q6vcqGscGWDLanVWNtffEH61AYITZPf2tZyOY1HLNFJG6G9aaMmDV0e9NBIDjF3RFskWKd8QwcnhgjK_3USf0pCRJ5sQ6CWH--kYKani4_OY48mmbza8b2lL0lopnQ-_6Mux5Q";

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

  const [children, setChildren] = useState(false);
  const [dogs, setDogs] = useState(false);
  const [cats, setCats] = useState(false);

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
                checked={children}
                onChange={(e) => setChildren(e.target.value)}
              />
              <label>Children</label>

              <input
                type="checkbox"
                checked={dogs}
                onChange={(e) => setDogs(e.target.value)}
              />
              <label>Dogs</label>

              <input
                type="checkbox"
                checked={cats}
                onChange={(e) => setCats(e.target.value)}
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
