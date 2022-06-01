import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import logo from "./image4.svg";

const Cards = (props) => {
  const { type, breed, gender, size, age, color } = props; //  Destructurare props

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImIzYTQzOTNkNzNhY2UwMGViMWU5N2NlYjgzODc2YTQ5MGYzNjI2YmY2NGJlMzFkZDVkOWEwMmE3N2E4MWY0NDliNDM5MGQ4MmU1ZTMyOTY2IiwiaWF0IjoxNjU0MTA4NjQwLCJuYmYiOjE2NTQxMDg2NDAsImV4cCI6MTY1NDExMjI0MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.n9qJkxFm-IG1yIjrkEgmRoVbBR_F6yAFdO8Vd3Un8VMu2mjin5e3PmKoG9vR5EYI3U05zHVwWg8ysneC4dquIU3ArhZaKEm4hhWsj7hTaPnCQcC9blV_5n5AmApr_mK3gpjpQrSELKMjNwEYto8WZCy44xC7_peXvniRL6XBPH-RVBZInXURJWR6G0R5FTsWDe5PqjKuPF59UcwT_HnkmWRRYJ0AyzcR1dNMJ7Rm9a3yF4UbyxtvyIMBFOTu_u-8zcyt5k3eoQQdSC_n-Ex4NR8OfL6JeeRfT-tO9HHnnvhgVIydkSoft6LHBjz2a-4P5cqSkfI9gszWXbx-Umy7bA";
  const url = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}&gender=${gender}&size=${size}&age=${age}&color=${color}`;
  console.log("url: " + url);

  const bearer = "Bearer " + token;

  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("useEffect: Cards");
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // build a new array that will contain all the names from JSON.
        var animalsArray = [];
        var length = data.animals.length;
        console.log("Number of animals found: " + length);
        for (var i = 0; i < length; i++) {
          //console.log(data.animals[i].id);;
          var animalName = data.animals[i].name;
          console.log(animalName);
          //animalsArray.push(data.types[i].name);
        }
        //console.log("cardsArray:" + cardsArray);
        //setCards(cardsArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div className="article">
        <div className="card-inner">
          <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
          <h2>
            <Link to="/">Back</Link>
          </h2>
        </div>

        <div className="card-body">
          <div className="img">
            <img />
          </div>

          <div className="card-details">
            <h1>Name </h1>

            <h3>
              Age: <span></span>
            </h3>
            <h3>
              Breed: <span></span>
            </h3>
            <h3>
              Color: <span></span>
            </h3>

            <h3>
              Size: <span></span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
