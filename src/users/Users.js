import React, { useState } from "react";

function Users() {
  const [userFromDB, setUserFromDB] = useState("false");
  fetch(
    "https://cors-anywhere.herokuapp.com/https://data.mongodb-api.com/app/data-cnyps/endpoint/data/v1/action/find",
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key":
          "W22VS15FEbvqlgB6wiW3ZH6NAbqwcK3fqylKVpU3VGdT3V3cMKpzN7z2n2AmyMob",
      },
      body: JSON.stringify({
        collection: "users",
        database: "shelter",
        dataSource: "Shelter",
        filter: {},
      }),
    }
  )
    .then((resp) => resp.text())
    .then((data) => setUserFromDB(data))
    .then((data) => console.log(userFromDB(data)))
    .catch((err) => console.log(err));

  return <div className="m-20">{userFromDB}</div>;
}

export default Users;
