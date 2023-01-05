import React, { useState, useEffect } from "react";
import "../users/Users.css";

const Users = (props) => {
  const { isLoggedIn } = props;
  const [usersFromDB, setUsersFromDB] = useState("false");

  // //only admin
  console.log("users:");
  console.log(isLoggedIn);

  useEffect(() => {
    //fetch to server
    fetch("http://localhost:3001/")
      .then((resp) => resp.text())
      .then((resp) => JSON.parse(resp))
      .then((data) =>
        setUsersFromDB(
          <div className="users">
            <table>
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Have Children</th>
                  <th>Have Pets</th>
                </tr>
              </thead>

              {data.map((user, key) => {
                return (
                  <tbody>
                    <tr key={key}>
                      <td>{user.surname}</td>
                      <td>{user.firstName}</td>
                      <td>{user.email}</td>
                      <td>{user.city}</td>
                      <td>{user.country}</td>
                      <td>{user.status}</td>
                      <td>{user.routine}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )
      );
  }, []);

  return <div> {usersFromDB}</div>;
  // return <div>{isLoggedIn ? { usersFromDB } : "not"}</div>;
};

export default Users;
