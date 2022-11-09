import React from "react";
import { useEffect, useState } from "react";
import "./Card.css";
import Card from "./Card";
import GetToken from "./others/GetToken";

const Cards = (props) => {
  const { type, breed, gender, size, age, color, visible } = props;

  //const accessToken = GetToken();

  const token =
<<<<<<< HEAD
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjQ0ZDAyYTQwZWViNzNjNzUxYWQwNjA3OGU0NzBjY2IxZDEyYmVkZGM5NmVkNmUwYjcyNGU5MTQwNzNjMDU2Y2YzMzBmMGM2NjZkZjZlY2VjIiwiaWF0IjoxNjY3OTk5OTE4LCJuYmYiOjE2Njc5OTk5MTgsImV4cCI6MTY2ODAwMzUxOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.l0quPGyeCigpz11z3IG3yUNpaTBcB3wBSsBeU8x9WLbP0OmjhgxfGPSDcI_LrNxaIS15ZpXJSE1piUuLG8nzneKRTAjjFXYGPtlDbcVsrRqnVnXy_N05FQMhyv62JRWqqQsHfaYc3N9QVoTLl0_mnfKAD-9q10yvpz3KbuA89e9nREm6wuKnMfMQS4l6ySikhRoZ1QnRPIC-ikAOkRQ6FJjALPfAG9SrXXPDTPVgb6o82V84pyV7e9-VSPgwfr2dhxbLH9CM9psSixxx2W3LWXzE2ItEtW0jO4WTp7T7b2wdy8uCAyhVFm_jqvC7g9jQE5PAHo7uDDXxrKZSryrkhg";
=======
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImQzNzE4ZDk2NDQ2OWU1N2M1MmZjZGRjM2JlNjgwNmRmNWJjNjkxN2NlMDYxYmVkZDc4MTc1NzY1MzRhOTAwZGEzMjJjN2JjZjRmZmQyMWU5IiwiaWF0IjoxNjY3ODMwNjQzLCJuYmYiOjE2Njc4MzA2NDMsImV4cCI6MTY2NzgzNDI0Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.arpm2TCpXGzGJWk9MIM5we17yIHiFBHGDr4_-D4IkZq9Ntz6KhsnwgEdUwI9zcxJuMkKhXZDJTDrs0WKKXnLozb4a10wPijzfk0aMTSNlzhEO6kdp6iGhIgLHC7NFj2Qgfd_I1mz0E_k9Dg93i8WY0P9XyrKoHKTn_zkZU357DqoeEI2AFEzArHuSl0iD8QoLIi__n-JWkpL0RIOL4K7Ly5fFmJJUpUQfZkdY3Orue0mWOWv_LrIMOMQTQ0KorFTkgSJGQULX-JRBzie2x-IW87cJllBOWTLqRAXfw3zAJRTzLhEkuxLCWXfVmoFezw96HATqh-8CmsN2_Tfg8lLDQ";
>>>>>>> 910c91ff65b361d4d451bfa8d854a1adf0b66821

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
<<<<<<< HEAD
            //description: data.animals[i].description,
            attributes: data.animals[i].attributes,
          };
          //console.log("animal:");
=======
          };
          //console.log("animal:");

>>>>>>> 910c91ff65b361d4d451bfa8d854a1adf0b66821
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
