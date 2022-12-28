import React, { useState } from "react";

function Users2() {
  const [usersFromDB, setUsersFromDB] = useState("false");

  //fetch to server
  fetch("http://localhost:3001/")
    .then((resp) => resp.text())
    .then((data) => setUsersFromDB(data))
    .then((data) => console.log(usersFromDB));
  console.log("usersServer:");

  return <div className="m-20">{usersFromDB.email}</div>;
}

export default Users2;
