import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./images/image.png";
import { useParams } from "react-router-dom";
import GetToken from "./GetToken";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  const accessToken = GetToken();

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImMxZjdmODc3MTFmMjA3MzM4YjQ0OWU2NThkOWIwOWI3YjI4YzI4NWU4Mzk0YTUyMWQ4NmFlMTJiMWExZDZmNjZiZGI0MWYwNzc4ZTJiMGIwIiwiaWF0IjoxNjU2MDg4MzcyLCJuYmYiOjE2NTYwODgzNzIsImV4cCI6MTY1NjA5MTk3Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.diErw-pS9IKUdIjIJ6MfV6qYE8CT5vmaHo-FWzbhAsY9YpSsFGhkBylM9pHuAz4ae6oyP4Y7ydDxl3iWjp98SNDFh8OZo2s_CeKowKzV51u-Hjye2y9s-blct7E-D9cgkYJdvO0tSI4MxPHurV0l7nE4JdLd_kghAYI809Gevp5EeYmH_UgDkHfxKvaBwVsFBra1DFrmbruE7SMtNv9I4Ntvtr1v6WjF2OiXAZiPmdAmgVsQn-kekLJ_R8wtyhAabJT34WDey9KCYhuq7FhOxIA_ym4W5X3phIk2KFX_No-HQmRtzlqLsXUgU0x04A5aCiA5iEAsNXNqGEWv59hSYA";
  const bearer = "Bearer " + accessToken.token;

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
