import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjgwNDE4NDkyNGQyYzA4Y2I3ZmE0Zjg3ZmVmYThjZDEyZjI1ZmYyZWI5NzNhYWVmNmM1NzVkNzgzNzA3ZjZmOWQ3OGQ1ZTY0YjBiMGFhOGEwIiwiaWF0IjoxNjU0NTk3NjEwLCJuYmYiOjE2NTQ1OTc2MTAsImV4cCI6MTY1NDYwMTIxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.F7mvA3nuEx40AwkZI4mOvmvLK2kY8gRFQr0y2-IgnZHS58Xkg0mrnmeSAadzyVmOQxJeAcpk7vUufBhr6didEpJ5EDL650RoN5XY2UNMslKk5VM0ocM3sU7LAlodDEQb88jZjgOwA9tac638irmB_PuhkdvweqiWuUpDFXJNraOALhuu8LaiIFaHf1xfpN0gy4sAskDgNqpMF7LadJ5DWcDLVlFW6S7YhGvV8vxorHPSYU_riGO7KqswLzA0nyfvbdrtg4X7op8CzPVw4BZVCwsTUp7DmwOuHEOP4W-pV9V3eSz8z_xGliOnPaMK8otxK_jmHMDDzLBpGFf-qpmHeQ";
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
