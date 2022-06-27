import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjI0OGQyNDhlZjYwMWFhOTk0YmQwMjViZDMzMzVkMjkzMjRiMmFhNWU1MTUzZWQ3MDNlNWI4NzdjNmQxMmQzMWJkZDI0YWNkYTczZDYwYWZiIiwiaWF0IjoxNjU2MzU1NjM0LCJuYmYiOjE2NTYzNTU2MzQsImV4cCI6MTY1NjM1OTIzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ETWTw_p4p21XXDw07FVzdRefi6_U0vza1WNyydEcO17Zq6q43IQtg8mHnY7o1-1-RxRfLfCQqqQh4a9ezq8uSkf1jKobE4JcUZ-_m1mYHrxgF-jw_zp-6TT_YcJEmzLy2PzpR5xDtjE236uZ4KgkkXRx1QpyVzFYAuxvkwh0uBYaABqheCY-GWeDSz2U7XkTb6-gaNda4sr-hmVnYlDkvCv0qkfmvr7Za_unKY04Sike_7pdOgmFlh5NTEX3a-e8h2ncsWiJmvbU1yglbwCJ7lPAKPzP-fj9j3Ox_u8qdw4iYURw8F9oZ8JYOD2a15Hai9GwWs6QDrdUj3gkLlKniQ";

  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  // console.log("url: " + url);

  const bearer = "Bearer " + accessToken.token;
  //const bearer = "Bearer " + token;

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
