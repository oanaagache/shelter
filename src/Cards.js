import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjQ4ODM0MTM5ZmUyYmM4ODdiNTMyZGRlY2M5MzY1NzI5M2ZkOGY3NmU3YzNhMDA3OGY0OTIxOGZjOTE5NmVhZGExN2M5NjhmNTU4YzJkMzVmIiwiaWF0IjoxNjY3ODIyODI0LCJuYmYiOjE2Njc4MjI4MjQsImV4cCI6MTY2NzgyNjQyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.QylFIdsazmz3m7vm_sG9iCpmAtlD4bLYfseT5hhfT_cOD70FYyn0KNUieIa9oEIDM1AMGVLEH7QeHq52UpsYvJZ6oQ8e0O7HMY86JwqrtFf5GFAfgRXgQHgBfx2l6h1jGroy5jrdg3s-55OKPQuxNMuepRrrBsILJyZnrUEj7WfgQ8KTL-LjW606KL1BpKBX4Ciw_Pr3ezlfKv58q6vcqGscGWDLanVWNtffEH61AYITZPf2tZyOY1HLNFJG6G9aaMmDV0e9NBIDjF3RFskWKd8QwcnhgjK_3USf0pCRJ5sQ6CWH--kYKani4_OY48mmbza8b2lL0lopnQ-_6Mux5Q";

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
