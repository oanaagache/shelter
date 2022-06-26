import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
//import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjZmZGNiYWFiNmE4NjEwNTAwYzlhYmM2ZmEyMDcyMmY3MmE3NjdlYzFiNGM4NTlkMDczY2VjM2UxYjhiODRlYzhmMzY1NjdiNjVkZDQyZDQzIiwiaWF0IjoxNjU2MjczMzM3LCJuYmYiOjE2NTYyNzMzMzcsImV4cCI6MTY1NjI3NjkzNywic3ViIjoiIiwic2NvcGVzIjpbXX0.JEenSov-w1uTjiTh0OHYXVzms6dx3Tz6J96HhNiG3QZX1uW7fJJYdsR43tWauihjXbOn5zvNJWU2Ai-QsKsaNGblrM3qjd68SrKznS4HIbM0q3T2XgtUZYTvc7Pmx3WXb7-vZQ6TEOQXLhF8b46blawNq6PfrOL6RpSBMxi-sc36pPVSyDPrTLflhOA7qOLiCIEaMVnH3GHtmZ6VO5oXG7L2CmhdvbtHAcUVRs0eyr8TPjbb3nKN3gutE38xwr7O_K7MmTGdSZK37shcbLnjPom0CiV7Uai1BA9ckjbqr_GblA-WpsSsgXoisOxIHX-BqpqmCmCJ5woG7Z1e-EzSiw";

  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  // console.log("url: " + url);

  //const bearer = "Bearer " + accessToken.token;
  const bearer = "Bearer " + token;

  const [name, setName] = useState([]);

  useEffect(() => {
    //console.log("First useEffect in Cards:");
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
        //console.log("animalsArray in Cards:");
        //console.log(animalsArray);
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
            <Card key={index} item={item} />
          </>
        );
      })}
    </>
  );
};

export default Cards;
