import React from "react";
import { useEffect, useState } from "react";
import "../components/card/Card.css";
import CardO from "./CardO";
import { Client } from "@petfinder/petfinder-js";

const Cards = (props) => {
  const client = new Client({
    apiKey: "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur",
    secret: "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk",
  });

  //console.log("Cards : type");
  //console.log(type);

  const [items, setItems] = useState([]);

  useEffect(() => {
    client.animal.search({ page: 1, limit: 6 }).then((response) => {
      var animalsArray = [];
      //console.log("animalsArray: ");
      //console.log(animalsArray);
      // console.log("response.data.animals: ");
      // console.log(response.data.animals);

      var length = response.data.animals.length;

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
          tags: response.data.animals[i].tags[i],
        };
        //console.log("Cards animal:");
        //console.log(animal);
        animalsArray.push(animal);
      }
      setItems(animalsArray);
      //console.log("animalsArray in Cards:");
      //console.log(animalsArray);
    });
  }, []);

  return (
    <>
      {items.map((item, index) => {
        return (
          <>
            <CardO key={index} item={item} />
          </>
        );
      })}
    </>
  );
};

export default Cards;
