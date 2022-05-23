import React, { useState, useEffect } from "react";

// TODO: take care of regenerating the token when it expires.
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImQ2MDc3MTJlODc0M2IzYjEzYzAyODgzMGU3YTJkOTY1MDc5MDU5ZTJiMzRkYmI1MmJhYzMwOGVmMDI2ZTNkNzMxZDcwZWI3ZTI4NmE3NDdlIiwiaWF0IjoxNjUzMzA3ODIyLCJuYmYiOjE2NTMzMDc4MjIsImV4cCI6MTY1MzMxMTQyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.NiI0CVVsH69tCALGzkMaAnzgxx0I9Yxo45ncMimXoeJDk8RuJ1raBDOCOyH-JGZY2Js5tX0D3M5st4cjV6GPYGBJZKG8M3EB-MwT25WSa-95FiHHzo9HRFFk6uMutA8167WiwfmewO5-TkOTsUCGLxvXxghA8NFTw7F60JPrMKTd2Bhdq-lyFlRPo3xtOLkD8NJ_H2h7fEZqTsE1GNKKMb7tUe1DfmQTuJ9Dnk4MEI6wjvOJyo6OJ48a3n__p_ll7tCrmzyc_Ow_UP6nWKgtcMgjxOIerIaZEUbZkmSCAsnSY6PJsiPg10iKlNswU7U61CL1VgXyY8Fw8Xd0J00zQQ";
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
        //console.log(data);
        //console.log(data.types.length);
        // build a new array that will contain all the names from JSON.

        var namesArray = [];
        var length = data.types.length;
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          namesArray.push(data.types[i].name);
        }

        //console.log("namesArray:" + namesArray);
        console.log(namesArray.join("\r\n"));
        const userData = {
          name: namesArray.join("\r\n"),
        };
        //console.log(userData);
        setItems(userData);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Types of pet:</h2>
          <ul>
            <li>{items.name}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Data;
