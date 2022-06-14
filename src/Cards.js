import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImY4MzA5YjM3ZjMxNTBmYjY4YWE1NDNiMWUzZDIyZWFjYzEyYzYxYTViZGRlNjExN2JmYzM0Y2E1N2M4MzI2NGM5YTQyMWJjOTY1N2Y0YjMyIiwiaWF0IjoxNjU1MDk3OTk2LCJuYmYiOjE2NTUwOTc5OTYsImV4cCI6MTY1NTEwMTU5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.Szxox9CQKri2exP6iDWinZKs-wRXDCM8IkQON8Kdv6b8_Q5m7iKwIfXrOZroUY9uO1AWOkokTUxWLGGt49csEGhjTbc4NFAaCFJSWsmpNr1uRMdCRnZnQ0Krux6YAHTjAUmxJUhjvvMN94ki8Z-3Vw81SxGy6azHaeDwHuwyNtlIMj71xiBCUpNuVXhvusfaXM8zbDSdc7xELzk9iKbKgNwVqaIsIcJyQqmB6PUghs8cCBl7cXMV3sO9euIc3Jjm9qbPapHIF3CLskG3rAMjuxKPdWyMyevB2QkQszvgl8hJizvitCv-xUEZ5grEp-ebxYdmX-jdRpkSjWQaV7TQ9A";

  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  console.log("url: " + url);

  const bearer = "Bearer " + token;

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
          //console.log("animal:");
          //console.log(animal);
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
    <div className="card-container">
      {name.map((item) => {
        return (
          <>
            <Card item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Cards;
