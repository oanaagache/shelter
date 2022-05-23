import React, { useState, useEffect } from "react";

// TODO: take care of regenerating the token when it expires.
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImYxMDQ4YjNhOTk3Mjg5OWYxYjc4NTBkYzlmMTg1NWNjOTJjMjJlMDczZWM3MTExNTMwMTg5N2ZlMGM3ODI1ZjA3MjhjZjQwZWE0MjVhMzIzIiwiaWF0IjoxNjUzMzAxNTYzLCJuYmYiOjE2NTMzMDE1NjMsImV4cCI6MTY1MzMwNTE2Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.dUzT5neTjy9YF3w-1wm9X0Kv8fOJDRfemsR2jTc9k5RxroiUt6SxmWXkTvKuUvrNGfAijxgP1-yV3qOhDcV_x3k0skKPmiMYdsXlQ8RaIswz1mBrjH8aO7k_p6BoEYZ7kSId5SEHB88b33uzZYzuOYmV0WU9qRg1G4i1YGOspCXITxb-5McMveHJouX1NYIy2Oeeeer4-RjN0AKaCPcDI8l3_AaXPGqzE_YbptD2GcZz8PrybmNH3Xpm0RiM8C0BTeM6p-Nv1-hN8oI0TCkfegT5Q7eG8bWKQ3AJQ4TrzTbeb8uzYa9-brX1HecMY0LZcI_6saMEdYtMXCiqmltYIg";

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
        var length = data.types.length; // lenght of the types array.
        for (var i = 0; i < length; i++) {
          //console.log(data.types[i].name);
          namesArray.push(data.types[i].name);
        }

        //console.log("namesArray:" + namesArray);

        console.log(namesArray.join("\r\n"));
        //var x = namesArray.join("\r\n");

        const userData = {
          name: namesArray.join("\r\n"),
        };
        //console.log(userData);

        setItems(userData);
      });
  }, [url]);

  return (
    <>
      <div className="drop">
        <div className="drop1">
          <h2>Types of pet:</h2>
          <ul>
            <li>{items.name}</li>
            <li>{items.name}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Data;
