import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import logo from "./image4.svg";
import { Link } from "react-router-dom";
//import GetToken from "./GetToken";
import Cards from "./Cards";

const src = "https://via.placeholder.com/280";
const name = "Alexandre Dumas";

const Adopt = () => {
  //var token = GetToken();
  //console.log("Adopt.js: token: " + token);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImIzYTQzOTNkNzNhY2UwMGViMWU5N2NlYjgzODc2YTQ5MGYzNjI2YmY2NGJlMzFkZDVkOWEwMmE3N2E4MWY0NDliNDM5MGQ4MmU1ZTMyOTY2IiwiaWF0IjoxNjU0MTA4NjQwLCJuYmYiOjE2NTQxMDg2NDAsImV4cCI6MTY1NDExMjI0MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.n9qJkxFm-IG1yIjrkEgmRoVbBR_F6yAFdO8Vd3Un8VMu2mjin5e3PmKoG9vR5EYI3U05zHVwWg8ysneC4dquIU3ArhZaKEm4hhWsj7hTaPnCQcC9blV_5n5AmApr_mK3gpjpQrSELKMjNwEYto8WZCy44xC7_peXvniRL6XBPH-RVBZInXURJWR6G0R5FTsWDe5PqjKuPF59UcwT_HnkmWRRYJ0AyzcR1dNMJ7Rm9a3yF4UbyxtvyIMBFOTu_u-8zcyt5k3eoQQdSC_n-Ex4NR8OfL6JeeRfT-tO9HHnnvhgVIydkSoft6LHBjz2a-4P5cqSkfI9gszWXbx-Umy7bA";
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
