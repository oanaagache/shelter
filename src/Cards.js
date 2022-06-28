import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6Ijg4NGE2ZjQwOTRmNzhjNTAyZDAwOWRjOGE3MTA3ZGQ3MTIyNjUyNDMwMjY3ZGFlZTA4YTE5N2IwMTFlN2EzMGNlZmJhMDg0ZWQ4ZmQ2YmM2IiwiaWF0IjoxNjU2Mzk2MTM5LCJuYmYiOjE2NTYzOTYxMzksImV4cCI6MTY1NjM5OTczOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.heDfdwsDep8uLVtbbt-RY-ki3MAgeIMilljoXzfil3nswVx7s1j6DUMWE6rsO10LPyl15p05jaVJCAfZIz-vv-PiKW5Vfhvz7038ubs07uAAPVtQvXEu_455Gi3XUqtO5Zj95kmhNPFZivgU6_IlBHH9T4Vo5ngmZ58eTtrFKIteX5vmEFGcTZ7vcLkRwIlppPX4UjGyjx24KH06iM9_ZyCODA-e_2JV0v6fNEoqeUyYTqQa8-ykhZIyOgjDJgqei79m6a3MDnhAnAujWNAkgmiJACDFP0Z6dnNchduZMWfIT0Whks4EQ8jGkpOS0Z0-HEcWk8vb3tdHss30clHFBQ";

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
