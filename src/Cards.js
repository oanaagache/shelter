import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6Ijk5ZGE2MTUzNjg2Yzk0OGViYzg0Y2FmMDMzYjU0M2RjYzFmZDliNGVlMTRlZGY0NmMxOWExNDNmYjMyNTFlYjgwNmIyN2YyOWZhYTk0MjJkIiwiaWF0IjoxNjU0NTkzNzAyLCJuYmYiOjE2NTQ1OTM3MDIsImV4cCI6MTY1NDU5NzMwMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.k0A8IBqUbBDjQQeR7kvzYgpZeFqeGkcP9-qunuYIiJZWKn3zhaRUjL9hfBe3P1yJlV_m2n7vTVkHmO4Y_EGmNvwCOnULVtdvn2Rc818_-EnPrqQahd9HKdCO1ZLZYn9VF35vsSkq_ubOf0ko69r7viwmxC62Manx1_OMgbsltCTwf1NWJIpCII21F-y4fN0nWbAweqKuLUxkAKXyT2JSfFP6zYffD-NHVcmi86NeQugjpEmkTBj7PY_tN0UwhHe5mBY29wPHFnGCtgrGFnFXl0wfSqNPZBSoSK7dMU166EvzsTYF2iy226-hh7osU1HJx_vs5tn9XSUDv1yKHgrgLQ";
  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  console.log("url: " + url);

  const bearer = "Bearer " + token;

  const [name, setName] = useState([]);
  const [cards, setCards] = useState("");
  const [animalSelected, setAnimalSelected] = useState({});

  useEffect(() => {
    console.log("First useEffect:");
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:");
        console.log(data);
        // build a new array that will contain all the names from JSON.
        var animalsArray = [];
        var length = data.animals.length;
        console.log("Number of animals found: " + length);
        for (var i = 0; i < length; i++) {
          var animal = {
            img: data.animals[i].photos[0],
            name: data.animals[i].name,
            breed: data.animals[i].breeds["primary"],
            gender: data.animals[i].gender,
            size: data.animals[i].size,
            age: data.animals[i].age,
            colors: data.animals[i].colors,
            id: data.animals[i].id,
          };
          console.log("animal:");
          console.log(animal);
          animalsArray.push(animal);
        }
        setName(animalsArray);
        console.log("animalsArray:");
        console.log(animalsArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Second useEffect:");
    console.log("name");
    console.log(name);
    const petsArray = name.map((item) => {
      return (
        <>
          <Card item={item} setAnimalSelected={setAnimalSelected} />
        </>
      );
    });
    setCards(petsArray); //toate cardurile le pun in cards
    console.log("petsArray");
    console.log(petsArray);
  }, [name]);

  return <div className="card-container">{cards}</div>;
};

export default Cards;
