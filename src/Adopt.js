import React, { useState, useEffect } from "react";
import "./Form.css";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import logo from "./image4.svg";
import { Link } from "react-router-dom";
import Data from "./Data";

const Adopt = () => {
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");

  // TODO: insert fetch API code and populate the arrays.
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjYyZGQyOWZkNWM2Y2FlZGU4MmIyNzYwMjI5MWRjMDFjMmNlMWNmYWY2M2I3NjQ3OWFjYjViYTljODJhNjJiYjdlYmVhODgzODI3NWE1YzFiIiwiaWF0IjoxNjUzMzI0MTA0LCJuYmYiOjE2NTMzMjQxMDQsImV4cCI6MTY1MzMyNzcwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.OvKXWIGr2b378XowIu7h1iF1ErqS-ITOkusVfDjqwAsJj65t6YsmnfwNvaqB4HUKV7o2b3T6FnJQToeWKMqy5_2MjBlwsJRZIvaeipvlmVeVXSUzKeA0_g0hZjc4Vg-kygmH25F7ppDEvJQGkKaB8yLYZefX1lhlI02Ed9abzeXwCsYA_GvWav71_Ste7YgONDdv0WbP8zXtezTpP_0ScDYq_3qwYOzDEA2flmLzNnmRUHjSrc1Apc5G_rJ7eUBVhs0DXkVT7ncskJz_v54ZbEJMaNJa8A2QVChQbpFKT1dZZNoyowvOlqbakK2KvPR39jNIscYycnDHM4UDSM1ugA";
  const url = "https://api.petfinder.com/v2/types";
  const bearer = "Bearer " + token;

  useEffect(() => {
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
        var length = data.types.length; // lenght of the types array.
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          typesArray.push(data.types[i].name);
        }

        //console.log("typesArray:" + typesArray);
        //console.log(typesArray.join("\r\n"));
        //var x = typesArray.join("\r\n");

        const userData = {
          name: typesArray,
        };
        console.log(typesArray);

        //console.log(typesArray.join("\r\n"));

        //setItems(userData);
      });
  });

  const [types, setTypes] = useState(["Dog", "Cat", "Bird"]);
  const [breeds, setBreeds] = useState(["A", "B", "C"]);
  const [genders, setGenders] = useState(["Male", "Female"]);
  const [sizes, setSizes] = useState(["Small", "Medium", "Large"]);
  const [ages, setAges] = useState(["1year", "2 years"]);
  const [colors, setColors] = useState(["white", "black"]);

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
            <h2>Type of pet:</h2>
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
              <input type="checkbox" /> <label>Cats</label>
            </h3>
          </div>
        </div>
      </div>

      <button className="filter-btn">Apply filters</button>
    </div>
  );
};

export default Adopt;
