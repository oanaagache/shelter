import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./images/image.png";
import { useParams } from "react-router-dom";
//import Success from "./Success";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjZiYTNhN2NjZTYwYmQzMTFjMjdjMzNjZDdiOWY3OGY4OWEwODZhMjkyMjBlODNiZjkyNjBlNjk0NDRiMDYzZGU1OWMzY2FjOTY1ZTJjNDYxIiwiaWF0IjoxNjU2MDA5MzUyLCJuYmYiOjE2NTYwMDkzNTIsImV4cCI6MTY1NjAxMjk1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.R9ymqsuwb-nUjHLjTI_CfbLxOekMybk3qMiJR-9ofPA9wvnTzzMYlI_QFEa5_DQJZlDALDyL8I-Uy_nsMAPRwOS-qMxNthW__l-pseiwxVfjNuxwwqiSfPDx-K3OyvhyofKa7IzztZ1ZSefwW514z78fIY4diYyy-AP1DYo6o76HauGA7yp5j8ygUrn0z4V8SOP4WkAZc0pg-PoxiRs-jPEZnDvlZ8TNwJlrrclOU8otDQIIsvLHRyCQnoJ0uR6ND6U8qt-jUPMsgLBFZHh-PCUH9vg9_CI4jGr1nlAWBxIT_ONltQV06S6kTrWSZWKj-nSKxkmq2WFcSN_XmuaLQQ";
  const bearer = "Bearer " + token;

  const url = "https://api.petfinder.com/v2/animals";

  var animalUrl = url + "/" + id;

  useEffect(() => {
    if (id != null) {
      const fetchCardData = async () => {
        const response = await fetch(animalUrl, {
          headers: {
            Authorization: bearer,
          },
        });
        const data = await response.json();

        var animal = {
          img: data.animal.photos[0],
          name: data.animal.name,
          breed: data.animal.breeds["primary"],
          gender: data.animal.gender,
          size: data.animal.size,
          age: data.animal.age,
          colors: data.animal.colors,
          id: data.animal.id,
          environment: data.animal.environment,
        };
        //console.log("animal in Card:");
        //console.log(animal.environment);

        setAnimalId(true);
        setItem(animal);
      };

      fetchCardData();
    } else {
      setAnimalId(true);
      console.log(props.item.environment);
      setItem(props.item);
    }
  }, []);

  return (
    <>
      {animalId && (
        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              onClick={() => navigate(`/card/${item.id}`)}
              src={item.img ? item.img["medium"] : logo2}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>{item.name}</h2>
              </div>

              <div className="card-details">
                <h4> Breed: {item.breed}</h4>
              </div>

              <div className="card-details">
                <h4> Gender: {item.gender}</h4>
              </div>

              <div className="card-details">
                <h4> Size:{item.size} </h4>
              </div>

              <div className="card-details">
                <h4>Age:{item.age}</h4>
              </div>

              <div className="card-details">
                <h4>Good with:</h4>
                <h5>
                  Children:
                  {item.environment.children == true
                    ? "yes"
                    : item.environment.children == false
                    ? "no"
                    : "unknown"}
                </h5>
                <h5>
                  Dogs:{" "}
                  {item.environment.dogs == true
                    ? "yes"
                    : item.environment.dogs == false
                    ? "no"
                    : "unknown"}
                </h5>
                <h5>
                  Cats:{" "}
                  {item.environment.cats == true
                    ? "yes"
                    : item.environment.cats == false
                    ? "no"
                    : "unknown"}
                </h5>
              </div>

              {/* <div className="card-details">
                <h4>
                  Color:
                  {item.colors.primary ? item.colors.primary : "No color found"}
                </h4>
              </div> */}

              <div className="card-details">
                <h4>
                  Color:
                  {item.colors.primary && item.colors.primary
                    ? item.colors.primary
                    : "No color found"}
                </h4>
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
