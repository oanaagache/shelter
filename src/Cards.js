import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImViYzk0YjUyODc3ZWFiYTNiMzNiZTZlMGRjOGRiNWJiZDYyZmYyODJlZjBkMTFjNGE3ZDMyNzhkMWQyMTdkYTEzZDYxMjgxOTM1NjIzNjY0IiwiaWF0IjoxNjU1MDUzOTY2LCJuYmYiOjE2NTUwNTM5NjYsImV4cCI6MTY1NTA1NzU2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.G8WKb1pFh8l2UVNirD6CLH5DNi_KP7_tiHNao3CI7BcZSz31SkhHMFBcsmGjOzo4na1d5yTgL4BmI10NGHKtrEmyDxFBilSr-s9nLZVBcFThcJbwOvVagG61YqIQHH30uJknQy52gBdw6nc5sOjDICiNI8iMmxy9XuHAFLlS8jvFG8WABAitWtwhcEqCNMToMSaB7aPYc86QTCGG1YgPa7trQDBIBp_hkpllciRhhWLfAK78qltFZObDorV7byoytE6Ko8rlJR-OI1cDGSD3RYGzCZqHX8NyJMvsUksl8ecGLqhLkO6ZQBUoQnnKU7eqCOyQzQ9Bk8Tk6XB2zlc-Yg";

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
