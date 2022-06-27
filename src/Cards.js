import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
//import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjgzZjNjYzVmMDk3ZWZjZDYwODViMTEwMWY3YTY1M2E1ZDViZWJlMjIzMWM5ZDhhZmE3ZWZiOThjZmZkMTY3NGMyNzg3MDNlOTE0Y2E4OTEwIiwiaWF0IjoxNjU2MzQzMjQzLCJuYmYiOjE2NTYzNDMyNDMsImV4cCI6MTY1NjM0Njg0Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.A_5us2ik4YwXMN2FrTAvQ5NtkEiaDnmdMaB-8dHPhiaLkZLRzrCTCMXZxSBGnSOyZq60mFaPewUb9DuZoHItrXvWhE67AR8jpsGVaOgnaAAFuv6Kj3XBRV_u_aKR3xR6aJ7G8ProKncj1nJtisaDDqNQqRTTR0kuY6ciQFKrmjdsG6BqBigKZSNiuwBjQjpu7l3P61ClY0cWrAZ0R_WHZJfURYExbjTmW2YC_6ENq8Q0kpVFZpzwkp2Hauterwutmy_ZslKfuO9LPsxDyiKPjB1iiAU99gu3BDc41P7VhnhGqF7W-Nu46Yq_ySVZ8VUWcZJJvn-4FmkSuSoBNDHsZA";

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
