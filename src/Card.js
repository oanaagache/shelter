import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./others/images/image.png";
import { useParams } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
import GetToken from "./GetToken";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  var token = GetToken();
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImVmYmJmOWVkYTczN2ZmZGE2N2E3NmMwZWQ0YzhkYWRiN2Q5OGI5MTgwOWQyNmJiZjkzYmNkM2IzYzg0OWFhYjRlNTgyYWJkMDBhMjFhM2JlIiwiaWF0IjoxNjY4MDAyNDM0LCJuYmYiOjE2NjgwMDI0MzQsImV4cCI6MTY2ODAwNjAzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.viY0fEUerf010vrIoVUijm2CF8Yo0-NVAwQ9MPnUdqDvC1GYB5f6-q_F1rTuRUHrsMn5r4pAuQSzk6mgl9xFuqYIcgALLhpG1bIkywnPt6GzuW6rTa4Y9GW7YOg3dSB9WB33E8S6aDXwxh1lVjpSG1LkryQ_1lQpTyB1vT40_Ts046THEIvRTlmqcIt-UZOyg78QGm0OMLbtS6svWyAs8tE0A2qKC0cwIq1LFGguq9m491vRFlgVTMUN54X-L9KU-1iCQEPTAA8aWrH2Mbzdee6XhdJS_pBT0EsvLUdPdm6TFGPj2gJOx1q8IK_oEvub3H13WdbQp8SmjPKQPVeglQ";

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
          description: data.animal.description,
          attributes: data.animal.attributes,
        };
        // console.log("animal in Card:");
        //console.log(animal.environment);
        //console.log(animal.description);
        // console.log("animal attributes");
        console.log(animal.attributes);

        setAnimalId(true);
        setItem(animal);
      };

      fetchCardData();
    } else {
      setAnimalId(true);
      // console.log("props animal in Card:");
      // console.log(props.item.environment);
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

{
  /* <div className="card-details">
                <h5>Attributes:</h5>
                <h6>
                  Spayed Neutered:{" "}
                  {item.attributes.spayed_neutered == true
                    ? "yes"
                    : item.attributes.spayed_neutered == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  House Trained:{" "}
                  {item.attributes.house_trained == true
                    ? "yes"
                    : item.attributes.house_trained == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Declawed:{" "}
                  {item.attributes.declawed == true
                    ? "yes"
                    : item.attributes.declawed == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Special Needs:{" "}
                  {item.attributes.special_needs == true
                    ? "yes"
                    : item.attributes.special_needs == false
                    ? "no"
                    : "unknown"}
                </h6>
                <h6>
                  Shots Current:{" "}
                  {item.attributes.shots_current == true
                    ? "yes"
                    : item.attributes.shots_current == false
                    ? "no"
                    : "unknown"}
                </h6>
              </div> */
}
