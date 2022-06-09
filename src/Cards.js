import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjBjMmZlZGEyMzIzNDgwMjcxM2M3MmQ0ZTI4YWNjMWJiMmU3NzFiN2QzMzk4NzI5NGQwOGExNGQxZjA3MmJhNjMyN2IzMDYxYjE0ZDY0MzVhIiwiaWF0IjoxNjU0Nzc0ODM5LCJuYmYiOjE2NTQ3NzQ4MzksImV4cCI6MTY1NDc3ODQzOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.fih1QSHVS3Uae-9YGec9WoAI8w_ZXn_7XlkQ2HG-ouZeG7UmSgYU7FRKT5wuufx1ezFJLPMkXuTo6UTS35sqGznqXGrd_yeYyVgr6A417htvwBQLUqVSavXsX8zhXwm-VZPIupMi_vL4hdq53k0l6ppszc0jL44N9mUw3mp8uOTL7HJ340IKI7vOW7N0IVcbSvK4qMlilbKxyoX5fXHovmbrgf7pUQ6pbHk1gnuAK7t_2FOzqUsMvFce1jx3tpzrcrk4NhtSZyA7TovzkVl_skRpMGloCH1aq3U4pQR63BPAK0Uz5gs-Kwm6C7pWPVVWbGGmR6uxozWClRbJHyKmXw";

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
