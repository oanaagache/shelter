import React, { useState, useEffect } from "react";
import "../users/Users.css";

function Users() {
  const [usersFromDB, setUsersFromDB] = useState("false");

  // //only admin
  // useEffect(() => {
  //   //fetch to server
  //   fetch("http://localhost:3001/")
  //     .then((resp) => resp.text())
  //     .then((resp) => JSON.parse(resp))
  //     .then((data) => setUsersFromDB(data.map((user) => user.surname)))
  //     .then((data) => console.log(usersFromDB));
  // }, []);
  // return
  // <div className="m-20">{usersFromDB}</div>;

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
  return <div className="m-20">{usersFromDB}</div>;
}
//   return (
//     <>
//       <div className="users">
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Surname</th>//
//           </tr>

//           <tr>
//             <td>{usersFromDB}</td>
//             <td>{usersFromDB}</td>
//             <td>{usersFromDB}</td>
//           </tr>
//           {/* {data.map((val, key) => {
//             return (
//               <tr key={key}>
//                 <td>{usersFromDB.firstName}</td>
//                 <td>{usersFromDB.surname}</td>
//                 <td>{usersFromDB.email}</td>
//               </tr>
//             );
//           })} */}
//         </table>
//       </div>
//     </>
//   );
// }

export default Users;
