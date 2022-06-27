import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
//import GetToken from "./GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjBhNzZmZGYyNDhjNGY0N2IxOTViZTA5YjdiMzRkZWY0YjZiZTQ5NzUzZjg1YTYyYzk4NjA0MGJlM2RjM2EzY2MyN2I1ZWM4OTQ0NmFhZWUzIiwiaWF0IjoxNjU2MzM0ODkzLCJuYmYiOjE2NTYzMzQ4OTMsImV4cCI6MTY1NjMzODQ5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.G91nrPC75MGkwT7IMN_bbRovrXRhHyo2ZkK408ZILCyQO08Hx2pOlXsNdJew4y3YvazanIJ7NENEctntztGsOQjdI8tK2-HhZ5JNDISFvRo2RxWwnk-8zs0LbdZFXA31M4KHf77Hf8MRMah99Ub_N43NOaKhOGWQr5N4ZcPZsShWZklbg_3zlv6dxopjmEVlZ2yKgQIw6hlXqpiT8bEq4xgVwL_M2XuICWMN6YloBkF_HwgdZoB7j4EbIOz8VwM7yRKUPE3BNvtUDofY3jXQdDnfGcqYrPEbimyL_TSGYkMjkqWPDhcdKKLM0v9x49KonzXKBjlBpsMIVIuAgnITbg";

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
