import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../../images/image.png";
import { useParams } from "react-router-dom";
import { Client } from "@petfinder/petfinder-js";

const Card = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const client = new Client({
    apiKey: "yE34mF5y8uaTkcDpopHWiZnWGoYJX5Ufw59vtFDpOJU78uW5ur",
    secret: "HMpwZ6VMhZwUWXYpb9nVmliqdElYYT96mezpupJk",
  });
  const [item, setItem] = useState(false);

  useEffect(() => {
    if (id) {
      client.animal.search({ id: id }).then((response) => {
        // console.log("response animal");
        // console.log(response.data.animals.find((element) => element.id == id));
        const obj = response.data.animals.find((element) => element.id == id);
        // console.log("animal");
        // console.log(animal);
        var animal = {
          img: obj.photos[0],
          id: obj.id,
          name: obj.name,
          breed: obj.breeds["primary"],
          gender: obj.gender,
          size: obj.size,
          age: obj.age,
          colors: obj.colors,
          environment: obj.environment,
          attributes: obj.attributes,
          description: obj.description,
          tags: obj.tags,
        };
        setItem(animal);
      });
    } else {
      setItem(props.item);
    }
  }, []);
  return (
    <>
      {item && (
        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
                margin: "25px",
              }}
              onClick={() => navigate(`/card/${item.id}`)}
              src={item.img ? item.img["full"] : [logo2]}
            />

            <div className="card-inner">
              <div className="card-details">
                <h1>{item.name}</h1>
              </div>

              <div className="card-details">
                <h3> Breed:{item.breed} </h3>
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
                <h3>Good with:</h3>
                <div className="card-check">
                  <h5>
                    Children:
                    {item.environment.children === true
                      ? "yes"
                      : item.environment.children === false
                      ? "no"
                      : "unknown"}
                    ;{" "}
                  </h5>
                  <h5>
                    Dogs:{" "}
                    {item.environment.dogs === true
                      ? "yes"
                      : item.environment.dogs === false
                      ? "no"
                      : "unknown"}
                    ;{" "}
                  </h5>
                  <h5>
                    Cats:{" "}
                    {item.environment.cats === true
                      ? "yes"
                      : item.environment.cats === false
                      ? "no"
                      : "unknown"}
                  </h5>
                </div>
              </div>

              {id && (
                <div className="card-details">
                  <h3>
                    Color:{" "}
                    {item.colors.primary && item.colors.primary
                      ? item.colors.primary
                      : "Not found"}
                  </h3>
                </div>
              )}
              {id && (
                <div className="card-details">
                  <h3>Attributes:</h3>
                  <h5>
                    Spayed Neutered:{" "}
                    {item.attributes.spayed_neutered === true
                      ? "yes"
                      : item.attributes.spayed_neutered === false
                      ? "no"
                      : "unknown"}
                    ;{" "}
                  </h5>
                  <h5>
                    House Trained:{" "}
                    {item.attributes.house_trained === true
                      ? "yes"
                      : item.attributes.house_trained === false
                      ? "no"
                      : "unknown"}
                    ;{" "}
                  </h5>
                  <h5>
                    Declawed:{" "}
                    {item.attributes.declawed === true
                      ? "yes"
                      : item.attributes.declawed === false
                      ? "no"
                      : "unknown"}
                    ;{" "}
                  </h5>
                  <h5>
                    Special Needs:{" "}
                    {item.attributes.special_needs === true
                      ? "yes"
                      : item.attributes.special_needs === false
                      ? "no"
                      : "unknown"}
                    ;{" "}
                  </h5>
                  <h5>
                    Shots Current:{" "}
                    {item.attributes.shots_current === true
                      ? "yes"
                      : item.attributes.shots_current === false
                      ? "no"
                      : "unknown"}
                  </h5>
                </div>
              )}
              {id && (
                <div className="card-details">
                  <h3>Description:</h3>
                  <h5>
                    {item.description && item.description
                      ? item.description
                      : "Not found"}
                  </h5>
                </div>
              )}
              {id && (
                <div className="card-details">
                  <h3>Tags:</h3>
                  <h5>
                    {item.tags[0] ? item.tags[0] : ""}{" "}
                    {item.tags[1] ? item.tags[1] : ""}{" "}
                    {item.tags[2] ? item.tags[2] : ""}{" "}
                    {item.tags[3] ? item.tags[3] : ""}{" "}
                    {item.tags[4] ? item.tags[4] : ""}{" "}
                    {item.tags[5] ? item.tags[5] : ""}{" "}
                  </h5>
                </div>
              )}
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
