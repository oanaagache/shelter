import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import Response from "./Response";
import { Container } from "react-bootstrap";
const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjVjZmI0MTY2YTNhYjg5MjgzY2U5YjBjNDQyZTkxMGJlYmZmZTc0YWUyYjJiYTBlN2Q0MWRkZDRlMDI5ZGYxZDY3ZDVkNWE0ZGE3YjE1ZDM1IiwiaWF0IjoxNjU0NTM4Mjg2LCJuYmYiOjE2NTQ1MzgyODYsImV4cCI6MTY1NDU0MTg4Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.Hj-V8yWBfJP7fO2DsEmUHgM9RYsrAB41KxA4wsbtAm-pig_dFQrygSOwrL-yLZwjnDNihB7bymB9bXwCB2Woww4ZjdgBOamuuEnHtX1AYRZF1J45VDQDpbILWt1fZACwaZNF_O-rPd_mu2moXWMS0JNZdFIoyekx2F1ZUlxNZj-RRwuPuMPuU5_3no13389s20oYjpYkNI2__fXnNg0oC_oQLwi5D1twopRPy4WyjUtzADt5ChLlnvo_h7OGxj1cyJpHJ4LaQjlltfcASRwTxMOM_uWtfvlmDR-E51g80CG1Wb1S0zRgSU7jX52VS2F8uT8wGGSTKqLQGx-asGZ-vw";
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
