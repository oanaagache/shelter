import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./others/images/image.png";
import { useParams } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

const Card = ({ item }) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);
  let navigate = useNavigate();
  console.log("item:");
  console.log(item);
  console.log(item.name);
  useEffect(() => {
    if (id != null)
  })
  return (
    <>
      {animalId && (
        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
                margin: "25px",
              }}
              onClick={() => navigate(`/card/${item.id}`)}
              src={item.img ? item.img["full"] : logo2}
            />

            <div className="card-inner">
              <div className="card-details">
                <h1>{item.name}</h1>
              </div>

              <div className="card-details">
                <h5> Breed:{item.breed} </h5>
              </div>

              <div className="card-details">
                <h5> Gender: {item.gender}</h5>
              </div>

              <div className="card-details">
                <h5> Size:{item.size} </h5>
              </div>

              <div className="card-details">
                <h5>Age:{item.age}</h5>
              </div>

              <div className="card-details">
                <h5>Good with:</h5>
                Children:
                {item.environment.children == true
                  ? "yes"
                  : item.environment.children == false
                  ? "no"
                  : "unknown"}
                ; Dogs:{" "}
                {item.environment.dogs == true
                  ? "yes"
                  : item.environment.dogs == false
                  ? "no"
                  : "unknown"}
                ; Cats:{" "}
                {item.environment.cats == true
                  ? "yes"
                  : item.environment.cats == false
                  ? "no"
                  : "unknown"}
              </div>

              <div className="card-details">
                <h5>
                  Color:{" "}
                  {item.colors.primary && item.colors.primary
                    ? item.colors.primary
                    : "Not found"}
                </h5>
              </div>
              <div className="card-details">
                <h5>Attributes:</h5>
                Spayed Neutered:{" "}
                {item.attributes.spayed_neutered == true
                  ? "yes"
                  : item.attributes.spayed_neutered == false
                  ? "no"
                  : "unknown"}
                ; House Trained:{" "}
                {item.attributes.house_trained == true
                  ? "yes"
                  : item.attributes.house_trained == false
                  ? "no"
                  : "unknown"}
                ; Declawed:{" "}
                {item.attributes.declawed == true
                  ? "yes"
                  : item.attributes.declawed == false
                  ? "no"
                  : "unknown"}
                ; Special Needs:{" "}
                {item.attributes.special_needs == true
                  ? "yes"
                  : item.attributes.special_needs == false
                  ? "no"
                  : "unknown"}
                ; Shots Current:{" "}
                {item.attributes.shots_current == true
                  ? "yes"
                  : item.attributes.shots_current == false
                  ? "no"
                  : "unknown"}
              </div>
              <div className="card-details">
                <h5>Description:</h5>
                <h6>
                  {item.description && item.description
                    ? item.description
                    : "Not found"}
                </h6>
              </div>
            </div>
          </div>
          {id && (
            <div className="button-adopt">
              <button
                className="adopt"
                onClick={() => {
                  navigate(`/adoptionform/${item.name}`);
                }}
              >
                Adopt
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
