import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "./Dropdown";
//import logo from "./images/image4.svg";
import { Link } from "react-router-dom";
import { Client } from "@petfinder/petfinder-js";
import Card from "./Card";

const Adopt = () => {
  const client = new Client({
    apiKey: "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur",
    secret: "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk",
  });

  const [type, setType] = useState("");
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

  const [check, setCheck] = useState("");
  const [checks, setChecks] = useState([]);

  //useEffect for type
  //  useEffect(() => {
  //     var typesArray = [
  //       "Dog",
  //       "Cat",
  //       "Rabbits",
  //       "Small and Furry",
  //       "Scales, Fins and Other",
  //       "Birds",
  //       "Horses",
  //       "Barnyard",
  //     ];
  //     setTypes(typesArray);
  //   }, []);

  useEffect(() => {
    client.animalData.types().then((response) => {
      var typesArray = [];
      var length = response.data.types.length;
      for (var i = 0; i < length; i++) {
        //console.log(response.data.types[i].name);
        typesArray.push(response.data.types[i].name);
      }
      //console.log("typesArray:");
      //console.log(typesArray);
      setTypes(typesArray);
    });
  }, []);

  //useEffect for breed dog
  useEffect(() => {
    client.animalData.breeds("Dog").then((response) => {
      //console.log(response.data.breeds);
      var breedsArray = [];
      var length = response.data.breeds.length;
      for (var i = 0; i < length; i++) {
        //console.log(response.data.breeds[i].name);
        breedsArray.push(response.data.breeds[i].name);
      }
      //console.log("Dog breedsArray:");
      //console.log(breedsArray);
      setBreeds(breedsArray);
    });
  }, [type]);

  //useEffect for breed cat
  useEffect(() => {
    client.animalData.breeds("Cat").then((response) => {
      //console.log(response.data.breeds);
      var breedsArray = [];
      var length = response.data.breeds.length;
      for (var i = 0; i < length; i++) {
        //console.log(response.data.breeds[i].name);
        breedsArray.push(response.data.breeds[i].name);
      }
      //console.log(" Cat breedsArray:");
      //console.log(breedsArray);
      setBreeds(breedsArray);
    });
  }, []);

  //useEffect for gender
  useEffect(() => {
    var gendersArray = ["Female", "Male"];
    setGenders(gendersArray);
  }, []);

  // useEffect(() => {
  //   client.animal.search().then((response) => {
  //     var gendersArray = [];
  //     var length = response.data.animals.gender.length;
  //     for (var i = 0; i < length; i++) {
  //       gendersArray.push(response.data.animals[i].gender);
  //     }
  //     console.log("gendersArray:");
  //     console.log(gendersArray);
  //     setGenders(gendersArray);
  //   });
  // }, []);

  //useEffect for size
  useEffect(() => {
    var sizesArray = ["Small", "Medium", "Large", "XLarge"];
    setSizes(sizesArray);
  }, []);

  // useEffect(() => {
  //   client.animal.search().then((response) => {
  //     var sizesArray = [];
  //     var length = response.data.animals.size;
  //     for (var i = 0; i < length; i++) {
  //       sizesArray.push(response.data.animals[i].size);
  //     }
  //     console.log("sizesArray:");
  //     console.log(sizesArray);
  //     setSizes(sizesArray);
  //   });
  // }, []);

  //useEffect for age
  useEffect(() => {
    var agesArray = ["Baby", "Young", "Adult", "Senior"];
    setAges(agesArray);
  }, []);

  //useEffect for color
  useEffect(() => {
    client.animalData.types().then((response) => {
      //console.log(response.data.breeds);
      var colorsArray = [];
      var length = response.data.types.length;
      for (var i = 0; i < length; i++) {
        //console.log(response.data.breeds[i].name);
        colorsArray.push(response.data.types[i].colors[i]);
      }
      //console.log("colorsArray:");
      //console.log(colorsArray);
      setColors(colorsArray);
    });
  }, [type]);

  //useEffect for check
  useEffect(() => {
    var checksArray = ["Children", "Dogs", "Cats"];
    setChecks(checksArray);
  }, []);

  //button apply filters
  const [click, handleClick] = useState(false);

  const [name, setName] = useState([]);

  useEffect(() => {
    client.animal.search().then((response) => {
      var animalsArray = [];
      //console.log("animalsArray: ");
      //console.log(animalsArray);

      //console.log("response.data.animals: ");
      //console.log(response.data.animals);

      var length = response.data.animals.length;
      // console.log("Number of animals found in Cards: ");
      // console.log(length);

      for (var i = 0; i < length; i++) {
        var animal = {
          img: response.data.animals[i].photos[0],
          id: response.data.animals[i].id,
          name: response.data.animals[i].name,
          breed: response.data.animals[i].breeds["primary"],
          gender: response.data.animals[i].gender,
          size: response.data.animals[i].size,
          age: response.data.animals[i].age,
          colors: response.data.animals[i].colors,
          id: response.data.animals[i].id,
          environment: response.data.animals[i].environment,
          attributes: response.data.animals[i].attributes,
          description: response.data.animals[i].description,
        };
        //console.log("animal:");
        //console.log(animal);
        animalsArray.push(animal);
      }
      setName(animalsArray);
      //console.log("animalsArray in Cards:");
      //console.log(animalsArray);
    });
  }, []);

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

          <div className="drop7">
            <h2>Good with:</h2>
            <Dropdown
              selected={check}
              setSelected={setCheck}
              options={checks}
            />
          </div>
        </div>
      </div>

      <div className="button">
        <button className="filter-btn" onClick={() => handleClick(!click)}>
          {click === true ? "Reset Filters" : "Apply filters"}
        </button>
      </div>

      <div className="cards">
        {click
          ? name.map((item, index) => {
              return (
                <>
                  <Card key={index} item={item} />
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Adopt;
