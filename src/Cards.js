import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  const accessToken = GetToken();
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImMxZjdmODc3MTFmMjA3MzM4YjQ0OWU2NThkOWIwOWI3YjI4YzI4NWU4Mzk0YTUyMWQ4NmFlMTJiMWExZDZmNjZiZGI0MWYwNzc4ZTJiMGIwIiwiaWF0IjoxNjU2MDg4MzcyLCJuYmYiOjE2NTYwODgzNzIsImV4cCI6MTY1NjA5MTk3Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.diErw-pS9IKUdIjIJ6MfV6qYE8CT5vmaHo-FWzbhAsY9YpSsFGhkBylM9pHuAz4ae6oyP4Y7ydDxl3iWjp98SNDFh8OZo2s_CeKowKzV51u-Hjye2y9s-blct7E-D9cgkYJdvO0tSI4MxPHurV0l7nE4JdLd_kghAYI809Gevp5EeYmH_UgDkHfxKvaBwVsFBra1DFrmbruE7SMtNv9I4Ntvtr1v6WjF2OiXAZiPmdAmgVsQn-kekLJ_R8wtyhAabJT34WDey9KCYhuq7FhOxIA_ym4W5X3phIk2KFX_No-HQmRtzlqLsXUgU0x04A5aCiA5iEAsNXNqGEWv59hSYA";

  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  console.log("url: " + url);

  const bearer = "Bearer " + accessToken;

  const [name, setName] = useState([]);

  useEffect(() => {
    console.log("First useEffect in Cards:");
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("data:");
        //console.log(data);
        // build a new array that will contain all the names from JSON.
        var animalsArray = [];
        var length = data.animals.length;
        //console.log("Number of animals found in Cards: " + length);
        for (var i = 0; i < length; i++) {
          //console.log(data.animals[i].environment);
          var animal = {
            img: data.animals[i].photos[0],
            name: data.animals[i].name,
            breed: data.animals[i].breeds["primary"],
            gender: data.animals[i].gender,
            size: data.animals[i].size,
            age: data.animals[i].age,
            colors: data.animals[i].colors,
            id: data.animals[i].id,
            environment: data.animals[i].environment,
          };
          //console.log("animal:");

          animalsArray.push(animal);
        }
        setName(animalsArray);
        console.log("animalsArray in Cards:");
        console.log(animalsArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      {name.slice(0, visible).map((item, index) => {
        return (
          <>
            <Card item={item} key={index} />
          </>
        );
      })}
    </>
  );
};

export default Cards;
