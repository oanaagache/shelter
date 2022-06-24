import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import Success from "./Success";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, casetval, visible } = props;

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjZiYTNhN2NjZTYwYmQzMTFjMjdjMzNjZDdiOWY3OGY4OWEwODZhMjkyMjBlODNiZjkyNjBlNjk0NDRiMDYzZGU1OWMzY2FjOTY1ZTJjNDYxIiwiaWF0IjoxNjU2MDA5MzUyLCJuYmYiOjE2NTYwMDkzNTIsImV4cCI6MTY1NjAxMjk1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.R9ymqsuwb-nUjHLjTI_CfbLxOekMybk3qMiJR-9ofPA9wvnTzzMYlI_QFEa5_DQJZlDALDyL8I-Uy_nsMAPRwOS-qMxNthW__l-pseiwxVfjNuxwwqiSfPDx-K3OyvhyofKa7IzztZ1ZSefwW514z78fIY4diYyy-AP1DYo6o76HauGA7yp5j8ygUrn0z4V8SOP4WkAZc0pg-PoxiRs-jPEZnDvlZ8TNwJlrrclOU8otDQIIsvLHRyCQnoJ0uR6ND6U8qt-jUPMsgLBFZHh-PCUH9vg9_CI4jGr1nlAWBxIT_ONltQV06S6kTrWSZWKj-nSKxkmq2WFcSN_XmuaLQQ";

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
        console.log("animalsArray in Cards:");
        console.log(animalsArray);
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
            <Card item={item} key={index} />
            {/* <Success item={item.name} /> */}
          </>
        );
      })}
    </>
  );
};

export default Cards;
