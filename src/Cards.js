import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./others/GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImVmYmJmOWVkYTczN2ZmZGE2N2E3NmMwZWQ0YzhkYWRiN2Q5OGI5MTgwOWQyNmJiZjkzYmNkM2IzYzg0OWFhYjRlNTgyYWJkMDBhMjFhM2JlIiwiaWF0IjoxNjY4MDAyNDM0LCJuYmYiOjE2NjgwMDI0MzQsImV4cCI6MTY2ODAwNjAzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.viY0fEUerf010vrIoVUijm2CF8Yo0-NVAwQ9MPnUdqDvC1GYB5f6-q_F1rTuRUHrsMn5r4pAuQSzk6mgl9xFuqYIcgALLhpG1bIkywnPt6GzuW6rTa4Y9GW7YOg3dSB9WB33E8S6aDXwxh1lVjpSG1LkryQ_1lQpTyB1vT40_Ts046THEIvRTlmqcIt-UZOyg78QGm0OMLbtS6svWyAs8tE0A2qKC0cwIq1LFGguq9m491vRFlgVTMUN54X-L9KU-1iCQEPTAA8aWrH2Mbzdee6XhdJS_pBT0EsvLUdPdm6TFGPj2gJOx1q8IK_oEvub3H13WdbQp8SmjPKQPVeglQ";

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
        // console.log("data:");
        // console.log(data);
        // build a new array that will contain all the names from JSON.
        var animalsArray = [];
        var length = data.animals.length;
        //console.log("Number of animals found in Cards: " );
        //console.log(length);
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
            //description: data.animals[i].description,
            attributes: data.animals[i].attributes,
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
