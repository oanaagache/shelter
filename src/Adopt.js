import React, { useState, useEffect } from "react";
import "./Form.css";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import logo from "./image4.svg";
import { Link } from "react-router-dom";
import Data from "./Data";

const Adopt = () => {
  // TODO: insert fetch API code and populate the arrays.
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjI4MmM5MTQxMzE5ZmZiMmUwYTgzYTA3ZTU1YWM2ZWQ2NjhkNDUyNTI4OTFiMzc4NjU5MWM0MDU1YjUzYjAyYzMwMjk4ZWNjMTAyZGQ1ZjNkIiwiaWF0IjoxNjUzODIxNTExLCJuYmYiOjE2NTM4MjE1MTEsImV4cCI6MTY1MzgyNTExMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.EvnqDaLszE8w-GzSt35ZN9Km9o4icOvpHk_e1gQSi6ITCrVfggZiKn9nf3j73drrW-V9Ef2Pul6c0GFGI0Qz1zrkczftucxStDOWWL6Ow2884xyKwZkz8OI87zjyg0kizn10YFbc92gh4dIMCcU7IVmm2RBvnS8s47Zu_-G86gJ2lksrxe3YhInigb-A3N4hmXLhjLKNSWwq0hT6Ue7UkhOdfBPYDadJeWrTLvh2_REQjD18UzSKBC_72DwnsJxSvS4rjxdtn5_UWPj-aMdZmRH5v2ZmESd6bw7wcPQ41E4yqbFpdsKpGy1GPElt0Yl_nsXdq714G-TxfCPiNp3uIw";
  const bearer = "Bearer " + token;

  const url = "https://api.petfinder.com/v2/types";

  const [type, setType] = useState("Choose type");
  const [types, setTypes] = useState([]);

  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  const [gender, setGender] = useState("");
  const [genders, setGenders] = useState([]);

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState([]);

  const [age, setAge] = useState("");
  const [ages, setAges] = useState([]);

  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  useEffect(() => {
    console.log("First useEffect()...");
    // get types:
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        //console.log(data.types.length);
        // build a new array that will contain all the names from JSON.
        var typesArray = [];
        var length = data.types.length;
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          typesArray.push(data.types[i].name);
        }

        //console.log("typesArray:" + typesArray);
        //console.log(typesArray.join("\r\n"));
        setTypes(typesArray);
      });
  }, []);

  useEffect(() => {
    console.log("Second useEffect()...");
    // for each type, get its breeds:
    var breedsUrl = url + "/" + types[0] + "/breeds";
    console.log("breedsUrl: " + breedsUrl);
    console.log("types:: " + types);

    fetch(breedsUrl, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        //console.log(data.breeds.length);
        // build a new array that will contain all the names from JSON.
        var breedsArray = [];
        var length = data.breeds.length;
        for (var i = 0; i < length; i++) {
          console.log(data.breeds[i].name);
          breedsArray.push(data.breeds[i].name);
        }

        //console.log("breedsArray:" + breedsArray);
        //console.log(breedsArray.join("\r\n"));
        setBreeds(breedsArray);
      });
  }, []);

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
