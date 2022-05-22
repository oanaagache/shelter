import React from "react";
import "./Form.css";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./image4.svg";
import { Link } from "react-router-dom";
import Data from "./Data";

const Adopt = () => {
  const [type, setType] = useState("Dog");
  const [breed, setBreed] = useState("Breed");
  const [selected, setSelected] = useState("Size");

  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/">Back</Link>
            </h2>
          </div>

          <h1 className="adopt-title">
            These lovely souls are waiting for you
          </h1>
        </div>
      </div>

      <div className="adopt-drop">
        <h3 className="adopt-drop-title">Refine your search:</h3>

        <div className="drop">
          <div className="drop1">
            <h2>Type of pet:</h2>
            <Form selected={type} setType={setType} />
          </div>

          <div className="drop2">
            <h2>Breed:</h2>
            <Form breed={breed} setBreed={setBreed} />
          </div>

          <div className="drop3">
            <h2>Gender:</h2>
            <Form selected={selected} setSelected={setSelected} />
          </div>

          <div className="drop4">
            <h2>Size:</h2>
            <Form selected={selected} setSelected={setSelected} />
          </div>

          <div className="drop5">
            <h2>Age:</h2>
            <Form selected={selected} setSelected={setSelected} />
          </div>

          <div className="drop6">
            <h2>Color:</h2>
            <Form selected={selected} setSelected={setSelected} />
          </div>

          <div className="check">
            <h2>Must be good with:</h2>
            <h3 className="checklist">
              <input type="checkbox" />
              <label>Children</label>
              <input type="checkbox" />
              <label>Dogs</label>
              <input type="checkbox" /> <label>Cats</label>
            </h3>
          </div>
        </div>
      </div>

      <button className="filter-btn">Apply filters</button>

      <div className="sort">
        <h3>Sort by:</h3>
        <div className="drop7">
          <Form selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default Adopt;
