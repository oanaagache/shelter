import React, { useState, useEffect } from "react";

// TODO: take care of regenerating the token when it expires.
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjVlZmE3ZDMwZjdjZGY3ZDFjZjJkZDgwMjcwNzliYTI5MzBiNzYxYzhhMzg2MDE2NzIwYWMzZjM2Njc1NTdmYmFkMzgwZjZiOWEzNGMxNTk1IiwiaWF0IjoxNjUzMjM4NTIzLCJuYmYiOjE2NTMyMzg1MjMsImV4cCI6MTY1MzI0MjEyMywic3ViIjoiIiwic2NvcGVzIjpbXX0.YITDZ3k74-akJ7Omgg2d7mdpGy1dG63M7Q02Pv6r9MoEe_MkM9zvsV9ZjZp3mWo8kxiYEvgWBcF_GMwBuLzFTEnOrE0OTLRYgXA0lxCJpCepCdYdGo8jpKjM3RafZnqMnsoPp6-k6dfCPXQ_EXJj9ITi86KWcOhyp41F8wio0UImfWi6jdGoHu5v1F6NsyJ9Am57FqVtUXs0XBi0tZRzbaiAvECDCliNncCHDtjA-p7mcUKP0ngEdJAOcZPvMZ8WtAf7umLXxxGOq3D6BMVWIgIIGbWNONG6RQabve8q-3R-iQkuPZULKNQjFGZq7J_HfEtXWkIp2_wKYn33TxatYw";

const bearer = "Bearer " + token;

const Data = () => {
  const [item, setItems] = useState([]);

  console.log("Running fetch()...");
  fetch(`https://api.petfinder.com/v2/types`, {
    headers: {
      Authorization: bearer,
    },
  })
    .then((res) => {
      //console.log(res);
      console.log("SUCCESS");
      //console.log(res.json());
    })
    .catch((err) => {
      console.log("FAILURE");
      //console.log(err);
    });

  useEffect(() => {
    console.log("Running useEffect()...");
    fetch(`https://api.petfinder.com/v2/types`, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((res) => {
        //console.log(res);
        console.log("useEffect: SUCCESS");
        //console.log(res.json());
      })
      .catch((err) => {
        console.log("useEffect: FAILURE");
        //console.log(err);
      });
  });

  return (
    <>
      <div>
        <button onClick={() => setItems("ccccccc")}>Adopt</button>
      </div>
      <h1>{item}</h1>
    </>
  );
};

export default Data;
