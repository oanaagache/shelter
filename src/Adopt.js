import React, { useState, useEffect } from "react";
import "./Form.css";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import logo from "./image4.svg";
import { Link } from "react-router-dom";

const Adopt = () => {
  // TODO: insert fetch API code and populate the arrays.
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjAyMDlmN2JiMWNlNDJjNjc1NDJhZDEyOWZjYTMwNTFiYjQ3OWMyOTBhYmY1MTI3N2M0ZTAzOTcyMzRhNTY4NDAyYzUyMjQ5YTZkOTk1NGEyIiwiaWF0IjoxNjUzODM0OTU2LCJuYmYiOjE2NTM4MzQ5NTYsImV4cCI6MTY1MzgzODU1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.oAqa5eSDhc5XS7kMYIyGEAnc4VsaLRZLQr08wo5rbGuSw6usSfsMSkT1usfgxMIvdsgv3gnivZn5TjllGrJAdZfz4AgLQhNfGHf4KFjijgKnFOtRELbEDic4aDIICyUCJOkN1Ks6Gq22NqIj-7Sp7xMQ8Y0MuSOAFZ0xDf7cGr2EKLLU67y_BzWbYYuSqrZXkT0W8OxfMGiUArEmE3z9oEqGsUPtIcMGPAAlZNj2dNv_KEp3aQZbD053kn1gKN3h8i5mN4iJspT2s7ihmPbkGfMZRDVqPYfN1sbJV801wH5Bkaa0YB5BvR8tOZj4IUGwRX0X_-boSEOtDrzCFaLlwA";
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
      });
  }, []);

  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    console.log("useEffect: Breeds");
    // for each type, get its breeds:
    console.log("type: " + type);
    if (type == "") return;
    var breedsUrl = url + "/" + type + "/breeds";
    console.log("breedsUrl: " + breedsUrl);

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
    console.log("type: " + type);
    if (type == "") return;
    var typeUrl = url + "/" + type;
    console.log("typeUrl: " + typeUrl);

    fetch(typeUrl, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var colorsArray = data.type.colors;
        console.log("colorsArray: " + colorsArray);
        setColors(colorsArray);
      });
  }, [type]);

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
            <Form selected={type} setSelected={setType} options={types} />
          </div>

          <div className="drop2">
            <h2>Breed:</h2>
            <Form selected={breed} setSelected={setBreed} options={breeds} />
          </div>

          <div className="drop3">
            <h2>Gender:</h2>
            <Form selected={gender} setSelected={setGender} options={genders} />
          </div>

          <div className="drop4">
            <h2>Size:</h2>
            <Form selected={size} setSelected={setSize} options={sizes} />
          </div>

          <div className="drop5">
            <h2>Age:</h2>
            <Form selected={age} setSelected={setAge} options={ages} />
          </div>

          <div className="drop6">
            <h2>Color:</h2>
            <Form selected={color} setSelected={setColor} options={colors} />
          </div>

          <div className="check">
            <h2>Must be good with:</h2>
            <h3 className="checklist">
              <input type="checkbox" />
              <label>Children</label>
              <input type="checkbox" />
              <label>Dogs</label>
              <input type="checkbox" />
              <label>Cats</label>
            </h3>
          </div>
        </div>
      </div>

      <button className="filter-btn">Apply filters</button>
    </div>
  );
};

export default Adopt;
