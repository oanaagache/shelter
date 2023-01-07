import React, { useState, useEffect } from "react";
import "./Success.css";
import logo2 from "../../images/image.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Success = () => {
  const { name } = useParams();
  let navigate = useNavigate();

  // const [usersFromDB, setUsersFromDB] = useState("false");
  // useEffect(() => {
  //   //fetch to server
  //   fetch("http://localhost:3001/users")
  //     .then((resp) => resp.text())
  //     .then((resp) => JSON.parse(resp))
  //     .then((data) =>
  //       setUsersFromDB(
  //         <div className="users">
  //           <table>
  //             <thead>
  //               <tr>
  //                 <th>Firstname</th>
  //                 <th>Last Name</th>
  //                 <th>Email</th>
  //                 <th>City</th>
  //                 <th>Country</th>
  //                 <th>Have Children</th>
  //                 <th>Have Pets</th>
  //               </tr>
  //             </thead>

  //             {data.map((user, key) => {
  //               return (
  //                 <tbody>
  //                   <tr key={key}>
  //                     <td>{user.surname}</td>
  //                     <td>{user.firstName}</td>
  //                     <td>{user.email}</td>
  //                     <td>{user.city}</td>
  //                     <td>{user.country}</td>
  //                     <td>{user.status}</td>
  //                     <td>{user.routine}</td>
  //                     <button
  //                       className="button"
  //                       onClick={() => {
  //                         navigate("/edit");
  //                       }}
  //                     >
  //                       Edit
  //                     </button>
  //                     <button
  //                       className="button"
  //                       onClick={() => {
  //                         navigate("/delete");
  //                       }}
  //                     >
  //                       Delete
  //                     </button>
  //                   </tr>
  //                 </tbody>
  //               );
  //             })}
  //           </table>
  //         </div>
  //       )
  //     );
  // }, []);

  return (
    <div className="response">
      <h2 className="title">Thank you!</h2>
      <h2 className="title">You're on your way to meet {name} </h2>
      <img
        style={{
          height: 300,
          width: 300,
          border: "1px solid black",
        }}
        src={logo2}
      />
      <h4 className="title">Our volunteers will contact you in order</h4>
      <h4 className="title">
        to schedule a visit to the animal shelter and finalize the adoption
        procedure.
      </h4>
      {/* <div> {usersFromDB}</div> */}
      <div className="button">
        <button
          className="backHome"
          onClick={() => {
            navigate("/adopt");
          }}
        >
          Back to Adopt page
        </button>
      </div>
    </div>
  );
};

export default Success;
