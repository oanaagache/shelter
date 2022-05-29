import React, { useState, useEffect } from "react";

// TODO: take care of regenerating the token when it expires.
const token =
  "dHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImMxNTk5YWJiMWIxN2UyMWUzZTBlNmJiYWM4ZWM5NmUzOThmMTFlMDU1MWFlMWUyNjEwNmRiNThjMTdhM2E2MTkzZTI0MDY4ZjNhZjBjZjhjIiwiaWF0IjoxNjUzNzUwNjA2LCJuYmYiOjE2NTM3NTA2MDYsImV4cCI6MTY1Mzc1NDIwNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.Oi5LZg1j7hGOsiYLNXvqgAM1epkAKIN7mKWi92z33bo_5u0AFw7g5Qd4QWiZNRujq5Erh9h5cbPQ7kKGY31hyl9gLJAr8LuIfNm-yT9dIEl258CY3-drY1axBZ1djpTxl98M-TY9bCDaQob4KFc2UHDTXaoAUjdmqZNOssoS9KGvbX8UymZB_iVVPkN53WYcaNSdi7R6UkRUamZQ-ALJ2R9mpunfiI2Ui19gfFBgqG1T0qTeE3mu0IqZ28-Ed3r4bbqN1PGADxYzGuetWj2DSFSHrn7-2XO_MDK61qLXcERKB_m2JJftNNrPXqKeAhuQmlDh2gF9fY_zYnA883mnzw";
const url = "https://api.petfinder.com/v2/types";
const bearer = "Bearer " + token;

const Data = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(userData);
        //console.log(data);
        //console.log(data.types.length);
        // build a new array that will contain all the names from JSON.

        const userData = {
          name: namesArray.join("\r\n"),
        };

        //console.log(userData);
        var namesArray = [];
        var length = data.types.length;
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          namesArray.push(data.types[i].name);
        }
        //console.log("namesArray:" + namesArray);
        console.log(namesArray.join("\r\n"));
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Type of pets:</h2>
          <ul>
            <li>{items.name}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Data;
