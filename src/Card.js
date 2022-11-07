import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./others/images/image.png";
import { useParams } from "react-router-dom";
import GetToken from "./GetToken";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  //const accessToken = GetToken();

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjQ4ODM0MTM5ZmUyYmM4ODdiNTMyZGRlY2M5MzY1NzI5M2ZkOGY3NmU3YzNhMDA3OGY0OTIxOGZjOTE5NmVhZGExN2M5NjhmNTU4YzJkMzVmIiwiaWF0IjoxNjY3ODIyODI0LCJuYmYiOjE2Njc4MjI4MjQsImV4cCI6MTY2NzgyNjQyNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.QylFIdsazmz3m7vm_sG9iCpmAtlD4bLYfseT5hhfT_cOD70FYyn0KNUieIa9oEIDM1AMGVLEH7QeHq52UpsYvJZ6oQ8e0O7HMY86JwqrtFf5GFAfgRXgQHgBfx2l6h1jGroy5jrdg3s-55OKPQuxNMuepRrrBsILJyZnrUEj7WfgQ8KTL-LjW606KL1BpKBX4Ciw_Pr3ezlfKv58q6vcqGscGWDLanVWNtffEH61AYITZPf2tZyOY1HLNFJG6G9aaMmDV0e9NBIDjF3RFskWKd8QwcnhgjK_3USf0pCRJ5sQ6CWH--kYKani4_OY48mmbza8b2lL0lopnQ-_6Mux5Q";
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
