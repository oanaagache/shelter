import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./others/GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImQzNzE4ZDk2NDQ2OWU1N2M1MmZjZGRjM2JlNjgwNmRmNWJjNjkxN2NlMDYxYmVkZDc4MTc1NzY1MzRhOTAwZGEzMjJjN2JjZjRmZmQyMWU5IiwiaWF0IjoxNjY3ODMwNjQzLCJuYmYiOjE2Njc4MzA2NDMsImV4cCI6MTY2NzgzNDI0Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.arpm2TCpXGzGJWk9MIM5we17yIHiFBHGDr4_-D4IkZq9Ntz6KhsnwgEdUwI9zcxJuMkKhXZDJTDrs0WKKXnLozb4a10wPijzfk0aMTSNlzhEO6kdp6iGhIgLHC7NFj2Qgfd_I1mz0E_k9Dg93i8WY0P9XyrKoHKTn_zkZU357DqoeEI2AFEzArHuSl0iD8QoLIi__n-JWkpL0RIOL4K7Ly5fFmJJUpUQfZkdY3Orue0mWOWv_LrIMOMQTQ0KorFTkgSJGQULX-JRBzie2x-IW87cJllBOWTLqRAXfw3zAJRTzLhEkuxLCWXfVmoFezw96HATqh-8CmsN2_Tfg8lLDQ";

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
