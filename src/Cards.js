import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import logo from "./image4.svg";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjQxNzVhNTQ4MjVlZGI4YzA5NDI3ZjlkYjhkNGZlZjNlNmRhYmQwY2M2NDAxOGM3NjFhMWY0NWEzNDFkNDUzMzkxMDMyYTRhNzc3ZDlhNTg4IiwiaWF0IjoxNjU0MzQzODEzLCJuYmYiOjE2NTQzNDM4MTMsImV4cCI6MTY1NDM0NzQxMywic3ViIjoiIiwic2NvcGVzIjpbXX0.ptVmJcJ3CEuRGXi46yeDbJhNWp8nhp0rTOCCpHv-jlY79IBJUGQ4xao63VuBVWtXydo7F1LYMEsi-d0hu7HCQ-V_aFMPRD1ASTYMwpxJ84N-iAu9Cd77-cTwglo1ua0H4_npd_oSMvdZOmcAfSUYUYxIcuf4ya0X2D9S1MkWMwIqzQM5cbtf19r7Qvk3EhK1kD5BnOTlEP69sW8F0waYfozQUt4yacOLO6XiIBBJ8CaEvlzEQx-doFkAXiX4hXdNVeyJ2FwHrOdt78tYGgnprtoQqtpuZXrV1HhtWxxIytmebI_VD0HpnHE4yW6cO_xYOTIUFO2CfC6FyxjH7DPLCg";
  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  console.log("url: " + url);

  const bearer = "Bearer " + token;
  const [name, setName] = useState([]);

  const [carduri, setCarduri] = useState("");
  const [catelAles, setCatel] = useState({});

  useEffect(() => {
    console.log("useEffect: Cards");
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // build a new array that will contain all the names from JSON.
        var animalsArray = [];
        var length = data.animals.length;
        console.log("Number of animals found: " + length);
        for (var i = 0; i < length; i++) {
          var animal = {
            img: data.animals[i].photos[0],
            name: data.animals[i].name,
            breed: data.animals[i].breeds["primary"],
            gender: data.animals[i].gender,
            size: data.animals[i].size,
            age: data.animals[i].age,
            colors: data.animals[i].colors,
          };
          console.log(animal);
          animalsArray.push(animal);
        }
        setName(animalsArray);
        console.log(animalsArray);
        console.log("# END fetch()...");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    console.log("name:" + name);
    const sirAjutator = name.map((item) => {
      return <Card item={item} setCatel={setCatel} />;
    });
    setCarduri(sirAjutator);
  }, [name]);

  return (
    <div className="card-container">
      {carduri}
      {/* {Object.keys(catelAles).length != 0 && (
        <div className="modal">{catelAles.name} </div>
      )} */}
    </div>
  );
};
export default Cards;
