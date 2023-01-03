import React, { useState, useEffect } from "react";
import "./Adopt.css";
import Dropdown from "../dropdown/Dropdown";
import logo from "../../images/image4.svg";
import { Link } from "react-router-dom";
import { Client } from "@petfinder/petfinder-js";
import Card from "../card/Card";

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

  const [check, setCheck] = useState("");
  const [checks, setChecks] = useState([]);

  // //useEffect for type
  // useEffect(() => {
  //   var typesArray = [
  //     "Dog",
  //     "Cat",
  //     "Rabbit",
  //     "Small & Furry",
  //     "Horse",
  //     "Bird",
  //     "Scales, Fins & Other",
  //     "Barnyard",
  //   ];
  //   setTypes(typesArray);
  // }, []);

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
    var typesArray = [
      "Dog",
      "Cat",
      "Rabbit",
      "Small & Furry",
      "Horse",
      "Bird",
      "Scales, Fins & Other",
      "Barnyard",
    ];
    setTypes(typesArray);
  }, []);

  //useEffect for breed dog
  useEffect(() => {
    client.animalData.breeds("Dog").then((response) => {
      //console.log(response.data.breeds);
      var breedsArray1 = [];
      var length = response.data.breeds.length;
      for (var i = 0; i < length; i++) {
        //console.log(response.data.breeds[i].name);
        breedsArray1.push(response.data.breeds[i].name);
      }
      //console.log("Dog breedsArray:");
      //console.log(breedsArray1);
      setBreeds(breedsArray1);
    });
  }, []);

  //useEffect for breed cat
  useEffect(() => {
    client.animalData.breeds("Cat").then((response) => {
      //console.log(response.data.breeds);
      var breedsArray2 = [];
      var length = response.data.breeds.length;
      for (var i = 0; i < length; i++) {
        //console.log(response.data.breeds[i].name);
        breedsArray2.push(response.data.breeds[i].name);
      }
      //console.log(" Cat breedsArray:");
      //console.log(breedsArray);
      setBreeds(breedsArray2);
    });
  }, []);

  // //useEffect for breed Rabbit
  // useEffect(() => {
  //   client.animalData.breeds("Rabbit").then((response) => {
  //     var breedsArray3 = [];
  //     var length = response.data.breeds.length;
  //     for (var i = 0; i < length; i++) {
  //       breedsArray3.push(response.data.breeds[i].name);
  //     }
  //     setBreeds(breedsArray3);
  //   });
  // }, []);

  // //useEffect for breed Small & Furry
  // useEffect(() => {
  //   client.animalData.breeds("Small & Furry").then((response) => {
  //     var breedsArray4 = [];
  //     var length = response.data.breeds.length;
  //     for (var i = 0; i < length; i++) {
  //       breedsArray4.push(response.data.breeds[i].name);
  //     }
  //     setBreeds(breedsArray4);
  //   });
  // }, []);

  // //useEffect for breed "Horse"
  // useEffect(() => {
  //   client.animalData.breeds("Horse").then((response) => {
  //     var breedsArray5 = [];
  //     var length = response.data.breeds.length;
  //     for (var i = 0; i < length; i++) {
  //       breedsArray5.push(response.data.breeds[i].name);
  //     }
  //     setBreeds(breedsArray5);
  //   });
  // }, []);

  // //useEffect for breed Scales, Fins & Other
  // useEffect(() => {
  //   client.animalData.breeds("Scales, Fins & Other").then((response) => {
  //     var breedsArray6 = [];
  //     var length = response.data.breeds.length;
  //     for (var i = 0; i < length; i++) {
  //       breedsArray6.push(response.data.breeds[i].name);
  //     }
  //     setBreeds(breedsArray6);
  //   });
  // }, []);

  // //useEffect for breed Barnyard
  // useEffect(() => {
  //   client.animalData.breeds("Barnyard").then((response) => {
  //     var breedsArray7 = [];
  //     var length = response.data.breeds.length;
  //     for (var i = 0; i < length; i++) {
  //       breedsArray7.push(response.data.breeds[i].name);
  //     }
  //     setBreeds(breedsArray7);
  //   });
  // }, []);

  //useEffect for gender
  useEffect(() => {
    var gendersArray = ["Female", "Male"];
    setGenders(gendersArray);
  }, []);

  //useEffect for size
  useEffect(() => {
    var sizesArray = ["Small", "Medium", "Large", "XLarge"];
    setSizes(sizesArray);
  }, []);

  //useEffect for age
  useEffect(() => {
    var agesArray = ["Baby", "Young", "Adult", "Senior"];
    setAges(agesArray);
  }, []);

  //useEffect for check
  useEffect(() => {
    var checksArray = ["Children", "Dogs", "Cats"];
    setChecks(checksArray);
  }, []);

  //button apply filters
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (click === false) {
      //validare type==selected
      let params = {};
      if (type !== "") params.type = type;
      if (breed !== "") params.breed = breed;
      if (gender !== "") params.gender = gender;
      if (size !== "") params.size = size;
      if (age !== "") params.age = age;

      client.animal.search(params).then((response) => {
        var animalsArray = [];
        var length = response.data.animals.length;
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
            environment: response.data.animals[i].environment,
            attributes: response.data.animals[i].attributes,
            description: response.data.animals[i].description,
            tags: response.data.animals[i].tags,
          };
          animalsArray.push(animal);
        }
        setName(animalsArray);
      });
    } else {
      //reset filtres
      setType("");
      setType("");
      setBreed("");
      setGender("");
      setSize("");
      setAge("");
      setCheck("");
      setName([]);
    }
    setClick(!click);
  };

  const [name, setName] = useState([]);

  return (
    <div className="adopt-cont">
      <div className="adopt-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="arrow" to="/">
          Back{" "}
        </Link>
      </div>

      <div className="adopt-title">These lovely souls are waiting for you</div>

      <div className="adopt-drop">
        <h3 className="adopt-drop-title">Refine your search:</h3>

        <div className="drop">
          <div className="drop1">
            <h2 className="drop-title">Type:</h2>
            <Dropdown selected={type} setSelected={setType} options={types} />
          </div>

          <div className="drop2">
            <h2 className="drop-title">Breed:</h2>
            <Dropdown
              selected={breed}
              setSelected={setBreed}
              options={breeds}
            />
          </div>

          <div className="drop3">
            <h2 className="drop-title"> Gender:</h2>
            <Dropdown
              selected={gender}
              setSelected={setGender}
              options={genders}
            />
          </div>

          <div className="drop4">
            <h2 className="drop-title">Size:</h2>
            <Dropdown selected={size} setSelected={setSize} options={sizes} />
          </div>

          <div className="drop5">
            <h2 className="drop-title">Age:</h2>
            <Dropdown selected={age} setSelected={setAge} options={ages} />
          </div>

          <div className="drop6">
            <h2 className="drop-title">Good with:</h2>
            <Dropdown
              selected={check}
              setSelected={setCheck}
              options={checks}
            />
          </div>
        </div>
      </div>

      <div className="button">
        <button className="filter-btn" onClick={() => handleClick()}>
          {click === true ? "Reset Filters" : "Apply filters"}
        </button>
      </div>

      <div className="cards">
        {click
          ? name.map((item) => {
              return <Card key={item.id} item={item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Adopt;
