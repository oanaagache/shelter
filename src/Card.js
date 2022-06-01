import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import logo from "./image4.svg";

const src = "https://via.placeholder.com/280";
const name = "Alexandre Dumas";

const Card = (props) => {
  var { id } = props; //  Destructurare props
  var id = 124;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjI3YTRlNjY4N2ViZDdiY2IzODQ0ZTNkMmFjNmE1MmVkYjg2MWRmMmZmNGE1M2EyMDgxOTc0YmMxZGZmNzFlMTlmNGJjYTcwZDljOWZmNjg5IiwiaWF0IjoxNjU0MDk0MzUwLCJuYmYiOjE2NTQwOTQzNTAsImV4cCI6MTY1NDA5Nzk1MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.lN-jAwg2Ghw1sRBLxmUmG9AqUnkoQVJi_MybSWwRcBHES8nzgpfsBgIPWSJuqpTUbHwlxRpBnkr2pQbebblGXAd41DiBe5bP7nk6P9nXff74uEkktsJ-ePdpCTkKyRg5hTR-C3_i-UsWoaCAbhtVCTGvoBq-i2fZLUOsVtCSO1cg1r7V0K7m9UyZh5zVv9RCuY2sc-xDIUC5z86stgbALhodkLuUstFFmzSEBRSVboBNRBkyH85XE8us5NfpriSUSvZvLXBeYelwTnQpRX0fvtrSw2qrcd93LMgOYix9K7h3Z48tf_ii9VPoQYHBkikwiQOnMFE5hDHKIRxYJaAFcg";
  const url = `https://api.petfinder.com/v2/animals/${id}`;
  const bearer = "Bearer " + token;

  const [card, setCard] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: bearer,
      },
    });
    const card = await response.json();
    setCard(card);
  };

  useEffect(() => {
    fetchData();
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
            <h1>Name</h1>

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
export default Card;

/*
import { useState } from "react";
import "./Adopt.css";
import logo from "./image5.svg";

function Form({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false);
  //console.log("options :", options);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={logo} />
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Form;*/
