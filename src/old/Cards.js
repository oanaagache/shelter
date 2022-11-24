import React from "react";
import { useEffect, useState } from "react";
import "../components/card/Card.css";
import CardO from "./CardO";
import { Client } from "@petfinder/petfinder-js";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;
  const client = new Client({
    apiKey: "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur",
    secret: "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk",
  });

  //console.log("Cards : type");
  //console.log(type);

  const [name, setName] = useState([]);

  useEffect(() => {
    client.animal.search().then((response) => {
      var animalsArray = [];
      //console.log("animalsArray: ");
      //console.log(animalsArray);
      // console.log("response.data.animals: ");
      // console.log(response.data.animals);

      var length = response.data.animals.length;
      //console.log("Number of animals found in Cards: ");
      //console.log(length);

      for (var i = 0; i < length; i++) {
        var animal = {
          img: response.data.animals[i].photos[i],
          id: response.data.animals[i].id,
          name: response.data.animals[i].name,
          breed: response.data.animals[i].breeds["primary"],
          gender: response.data.animals[i].gender,
          size: response.data.animals[i].size,
          age: response.data.animals[i].age,
          colors: response.data.animals[i].colors,
          environment: response.data.animals[i].environment,
          attributes: response.data.animals[i].attributes,
          description: response.data.animals[i].description,
          //tags: response.data.animals[i].tags,
        };
        //console.log("animal:");
        //console.log(animal);
        animalsArray.push(animal);
      }
      setName(animalsArray);
      //console.log("animalsArray in Cards:");
      //console.log(animalsArray);
    });
  }, []);

  return (
    <>
      {name.slice(0, visible).map((item, id) => {
        return (
          <>
            <CardO key={id} item={item} />
          </>
        );
      })}
    </>
  );
};

export default Cards;
