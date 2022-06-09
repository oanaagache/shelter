import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjEyMTJmNTYxZDFlOWJlNzMxMDZmMDAzZTE0ZmRlMDQ5MTE2YzMxZjk2MzllZGFlYzk2ZWMzNWY3MDcxNzI4MTYzMTJkNjc4YmYyNDc3M2JmIiwiaWF0IjoxNjU0ODAwOTAxLCJuYmYiOjE2NTQ4MDA5MDEsImV4cCI6MTY1NDgwNDUwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.jXfnPTe4bmlWBqP1FAbquEQxWsXg0GgIWX_aigQbJ3v3efMpYfYe6MKrM6ET9dvl1H1_DSPtSDUk-L810eGRgHfRby3lNTd7-zYKytv5xR08nm-pSMnPrksxDc8hPS9YXPskiMVnuzrjW1jmmGlLRf8EoOM7Z3FpUBhUB-Z660ErursVATmxsX_rNvFerSfyiqxkusTFS2B9CbwkMt5hEKnTHHB3n-Lb3VvGZbo7BTXTHqmNMYyCR4jyONa-X_GTrWFRFl8xHEzVRQWyVxpVo68_PG3wbDY7PteauiGhU29AFvl3t-XCwOwz6a7K0YQkTXIZX3l-CI2zThd9Datn5g";

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
