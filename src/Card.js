import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./images/image.png";
import { useParams } from "react-router-dom";
//import GetToken from "./GetToken";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjZmZGNiYWFiNmE4NjEwNTAwYzlhYmM2ZmEyMDcyMmY3MmE3NjdlYzFiNGM4NTlkMDczY2VjM2UxYjhiODRlYzhmMzY1NjdiNjVkZDQyZDQzIiwiaWF0IjoxNjU2MjczMzM3LCJuYmYiOjE2NTYyNzMzMzcsImV4cCI6MTY1NjI3NjkzNywic3ViIjoiIiwic2NvcGVzIjpbXX0.JEenSov-w1uTjiTh0OHYXVzms6dx3Tz6J96HhNiG3QZX1uW7fJJYdsR43tWauihjXbOn5zvNJWU2Ai-QsKsaNGblrM3qjd68SrKznS4HIbM0q3T2XgtUZYTvc7Pmx3WXb7-vZQ6TEOQXLhF8b46blawNq6PfrOL6RpSBMxi-sc36pPVSyDPrTLflhOA7qOLiCIEaMVnH3GHtmZ6VO5oXG7L2CmhdvbtHAcUVRs0eyr8TPjbb3nKN3gutE38xwr7O_K7MmTGdSZK37shcbLnjPom0CiV7Uai1BA9ckjbqr_GblA-WpsSsgXoisOxIHX-BqpqmCmCJ5woG7Z1e-EzSiw";
  //const bearer = "Bearer " + accessToken.token;
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
      //console.log(props.item.environment);
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

                <h6>
                  Children:
                  {item.environment.children == true
                    ? "yes"
                    : item.environment.children == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Dogs:{" "}
                  {item.environment.dogs == true
                    ? "yes"
                    : item.environment.dogs == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Cats:{" "}
                  {item.environment.cats == true
                    ? "yes"
                    : item.environment.cats == false
                    ? "no"
                    : "unknown"}
                </h6>
              </div>

              {/* <div className="card-details">
                <h4>
                  Color:
                  {item.colors.primary ? item.colors.primary : "No color found"}
                </h4>
              </div> */}

              <div className="card-details">
                <h5>Color:</h5>
                <h6>
                  {item.colors.primary && item.colors.primary
                    ? item.colors.primary
                    : "No color found"}
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
