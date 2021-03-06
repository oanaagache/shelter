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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6Ijg4NGE2ZjQwOTRmNzhjNTAyZDAwOWRjOGE3MTA3ZGQ3MTIyNjUyNDMwMjY3ZGFlZTA4YTE5N2IwMTFlN2EzMGNlZmJhMDg0ZWQ4ZmQ2YmM2IiwiaWF0IjoxNjU2Mzk2MTM5LCJuYmYiOjE2NTYzOTYxMzksImV4cCI6MTY1NjM5OTczOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.heDfdwsDep8uLVtbbt-RY-ki3MAgeIMilljoXzfil3nswVx7s1j6DUMWE6rsO10LPyl15p05jaVJCAfZIz-vv-PiKW5Vfhvz7038ubs07uAAPVtQvXEu_455Gi3XUqtO5Zj95kmhNPFZivgU6_IlBHH9T4Vo5ngmZ58eTtrFKIteX5vmEFGcTZ7vcLkRwIlppPX4UjGyjx24KH06iM9_ZyCODA-e_2JV0v6fNEoqeUyYTqQa8-ykhZIyOgjDJgqei79m6a3MDnhAnAujWNAkgmiJACDFP0Z6dnNchduZMWfIT0Whks4EQ8jGkpOS0Z0-HEcWk8vb3tdHss30clHFBQ";

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
