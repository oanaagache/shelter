import React, { useState, useEffect } from "react";

function Users() {
  const [usersFromDB, setUsersFromDB] = useState("false");

  //only admin
  useEffect(() => {
    //fetch to server
    fetch("http://localhost:3001/")
      .then((resp) => resp.text())
      .then((resp) => JSON.parse(resp))
      .then((data) => setUsersFromDB(data.map((user) => user.surname)))
      .then((data) => console.log(usersFromDB));
  }, []);

  return <div className="m-20">{usersFromDB}</div>;
}

export default Users;
