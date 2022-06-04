import React from "react";
import "./Card.css";
import logo from "./image5.svg";
import { Link } from "react-router-dom";

function Card({ item, setCatel }) {
  return (
    <div className="card-container">
      {/* <div className="card-header">
        <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
        <h2>
          <Link to="/">Back</Link>
        </h2>
      </div> */}

      <div className="card-content">
        <img
          onClick={() => setCatel(item)}
          src={item.img ? item.img["small"] : logo}
          style={{
            width: 300,
            height: 300,
          }}
        />

        <div className="card-inner">
          <div className="card-details">
            <h1>Name: {item.name}</h1>
          </div>

          <div className="card-details">
            <h3> Breed: {item.breed}</h3>
          </div>

          <div className="card-details">
            <h3> Gender: {item.gender}</h3>
          </div>

          <div className="card-details">
            <h3> Size:{item.size} </h3>
          </div>

          <div className="card-details">
            <h3>Age:{item.age}</h3>
          </div>

          <div className="card-details">
            <h3> Color: {item.colors.primary}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
