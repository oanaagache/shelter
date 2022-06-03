import React from "react";
import "./Card.css";
import logo from "./image5.svg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-container">
      <div className="card-header">
        <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
        <h2>
          <Link to="/">Back</Link>
        </h2>
      </div>

      <div className="card-content">
        <img
          style={{
            width: 300,
            height: 300,
          }}
        />

        <div className="card-inner">
          <div className="card-details">
            <h1>Type </h1>
          </div>

          <div className="card-details">
            <h3> Breed: </h3>
          </div>

          <div className="card-details">
            <h3> Gender: </h3>
          </div>

          <div className="card-details">
            <h3> Size: </h3>
          </div>

          <div className="card-details">
            <h3>Age:</h3>
          </div>

          <div className="card-details">
            <h3> Color: </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
