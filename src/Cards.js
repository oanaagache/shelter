import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImRlMGM5NDBhZWFiY2E4N2I5NDM2NjM2MGIwODlkNGY3NzUzZWQ0MzhhN2VhYjYzNjRjOTEzZDA5NWYxODg5MTQ1YWFiM2RjOGRkOWQ1MTdhIiwiaWF0IjoxNjU0NzYyNTA0LCJuYmYiOjE2NTQ3NjI1MDQsImV4cCI6MTY1NDc2NjEwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.UCo2a5HlAYN-iHR69qsCCnmHl-o-6iFimkA1KjYAemwdb9om1xQuYjaHUk9dHkS-g041T5YCdhIUohZ-F7ip2dJ4az_8WBRqHcE43-yePvHJUb0NfyPelE6ZcPFvn61LuEwhvx-Oxv8rq8IBAEOkf6QS92WEP6nHunjylRYgpvloz6Pj-EKNOshMXX6l3dUyQduv6jNxQyNVnRfEZkJJmdkxPtijdD4Xy0zxp3xq5Abko7Pv4Jbk-6fMXm39Wm7t0HynekLlFIFVf22ZeLbU9w1KswiW-bbizPYovd-_cKh5_PqgMefMnlOiF9JsQ2RJ7KVnMAoCgvZeEpP7zYO5kQ";

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
