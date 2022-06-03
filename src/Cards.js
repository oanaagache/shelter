import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import logo from "./image4.svg";
import Card from "./Card";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImY0YmM2NWMxZDgzNmUzNjY1Njg1YTQ4ZDY2YzhiODAxYzhiMjhkNjEzOWZmN2QyYWRmNmU0MGQxNDVjM2NkNjIzYWYyMWU4N2U2ZjdjNTA0IiwiaWF0IjoxNjU0Mjc5NjU4LCJuYmYiOjE2NTQyNzk2NTgsImV4cCI6MTY1NDI4MzI1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.s6a0MeVe8R_YzDVuZpkVLRwaCyLq4RxYakI2J2pTRrt_AyKWBlnkbezTBVl_fWJ9EUhUjkv9Q22XRynTCfVgmjrylTEuO5p2xZ43nrrriwtzYepuaoQJDOvLddtbz0EdanUmRMhOmSF31fwwJN_kwJAYxCdqIk-YT9-iKfLE2adGurx8f46JuleQZxgyMheXtogYPVi5Ll1_ML7Nkm6ZZAa3O3xgGoPGkFViSnBdYTKlsO8O59H_vCZgNNs49xwMbXBi6R3csi4QSbAhUk1MPy2smdUN1gxcU3YRczScTby48154OFFnquhoLYrWZj5f15a1Vu8klHRuvsfZhzdhyA";
  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  //console.log("url: " + url);

  const bearer = "Bearer " + token;
  const [name, setName] = useState([]);

  useEffect(() => {
    console.log("useEffect: Cards");
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("# BEGIN fetch()...");
        // build a new array that will contain all the names from JSON.
        var animalsArray = [];
        var length = data.animals.length;
        console.log("Number of animals found: " + length);
        for (var i = 0; i < length; i++) {
          var animalName = data.animals[i].name;
          //console.log(animalName);
          animalsArray.push(animalName);
          setName(animalsArray);
        }
        console.log("animalsArray: " + animalsArray);
        console.log("# END fetch()...");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  /*
  useEffect(() => {
    let newState = name.map((e) => e); // map your state here
    setName(newState); // and then update the state
    console.log("SECOND useEffect newState: " + newState);
  }, []);
  */

  return (
    <div className="card-container">
      <div className="card-header">
        <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
        <h2>
          <Link to="/">Back</Link>
        </h2>
      </div>

      <div className="card-content">
        <img />

        <div className="card-inner">
          <div className="card-details">
            <h1>Name: {name}</h1>
          </div>

          <div className="card-details">
            <h3> Breed: </h3>
          </div>

          <div className="card-details">
            <h3> Gender: </h3>
          </div>

          <div className="card-details">
            <h3> Size: </h3>
          </div>

          <div className="card-details">
            <h3>Age:</h3>
          </div>

          <div className="card-details">
            <h3> Color: </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
