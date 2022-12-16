import React, { useState, useEffect } from "react";
import "../../../src/index.css";
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
      "Scales,Fins&Other",
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
      //console.log(breedsArray);
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
      //validation type==selected
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
    <div className="max-w-full">
      <div className="w-full ">
        <div className="flex m-4 box-content">
          <div className="flex">
            <img
              className="h-4 mr-1 mt-2 box-content 
              sm:h-4 sm:mr-1
              md:h-4 md:mr-1 
              lg:h-4 lg:mr-1 
              xl:h-4 xl:mr-1
              xxl:h-4 xxl:mr-1"
              src={logo}
              alt="Not found"
            />
            <h2
              className="flex h-4 mr-5 box-content
              sm:h-4 sm:mr-2 
              md:h-4 md:mr-2 
              lg:h-4 lg:mr-2 
              xl:h-4 xl:mr-2 
              xxl:h-4 xxl:mr-2
              text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl xxl:text-2xl"
            >
              <Link to="/" className="no-underline">
                Back
              </Link>
            </h2>
          </div>

          <h4
            className="flex box-content h-4 mb-5 sm:h-4 md:h-4 lg:h-4 xl:h-4 xxl:h-4
             m-auto sm:m-auto md:m-auto lg:m-auto xl:m-auto xxl:m-auto
            text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl"
          >
            These lovely souls are waiting for you
          </h4>
        </div>
      </div>

      <div className="m-4 box-content">
        <h3
          className="flex justify-left text-xl box-content my-4
        sm:text-xl sm:my-5
        md:text-xl md:my-5
        lg:text-xl lg:my-5
        xl:text-2xl xl:my-5
        xxl:text-2xl xxl:my-5    
        "
        >
          Refine your search:
        </h3>

        <div className="flex">
          <div className="basis-10/12 py-2 box-content">
            <h2 className="text-lg sm:text-lg mg:text-lg lg:text-lg xl:text-lg xxl:text-lg">
              Type:
            </h2>
            <Dropdown selected={type} setSelected={setType} options={types} />
          </div>

          <div className="basis-11/12 py-2 box-content">
            <h2 className="text-lg sm:text-lg">Breed:</h2>
            <Dropdown
              selected={breed}
              setSelected={setBreed}
              options={breeds}
            />
          </div>

          <div className="basis-8/12 py-2 box-content">
            <h2 className="text-lg sm:text-lg">Gender:</h2>
            <Dropdown
              selected={gender}
              setSelected={setGender}
              options={genders}
            />
          </div>

          <div className="basis-8/12  py-2 box-content">
            <h2 className="text-lg sm:text-lg">Size:</h2>
            <Dropdown selected={size} setSelected={setSize} options={sizes} />
          </div>

          <div className="basis-8/12 py-2 box-content">
            <h2 className="text-lg sm:text-lg">Age:</h2>
            <Dropdown selected={age} setSelected={setAge} options={ages} />
          </div>

          <div className="basis-10/12 py-2 box-content">
            <h2 className="text-lg sm:text-lg sm:mr-2">Good:</h2>
            <Dropdown
              selected={check}
              setSelected={setCheck}
              options={checks}
            />
          </div>
        </div>
      </div>

      <div className="justify-end">
        <button
          className="text-white bg-pink w-20 sm:w-20  text-xs sm:text-xs p-2 h-10 ml-4 mt-96 sm:mx-1 box-content"
          onClick={() => handleClick()}
        >
          {click === true ? "Reset Filters" : "Apply filters"}
        </button>
      </div>

      <div className="flex flex-row flex-wrap box-content mt-4 sm:mx-1">
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
