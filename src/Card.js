import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./images/image.png";
import { useParams } from "react-router-dom";

const Card = (props) => {
  const { id } = useParams();
  const [animalId, setAnimalId] = useState(false);

  let navigate = useNavigate();
  const [item, setItem] = useState({});

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImY4MzA5YjM3ZjMxNTBmYjY4YWE1NDNiMWUzZDIyZWFjYzEyYzYxYTViZGRlNjExN2JmYzM0Y2E1N2M4MzI2NGM5YTQyMWJjOTY1N2Y0YjMyIiwiaWF0IjoxNjU1MDk3OTk2LCJuYmYiOjE2NTUwOTc5OTYsImV4cCI6MTY1NTEwMTU5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.Szxox9CQKri2exP6iDWinZKs-wRXDCM8IkQON8Kdv6b8_Q5m7iKwIfXrOZroUY9uO1AWOkokTUxWLGGt49csEGhjTbc4NFAaCFJSWsmpNr1uRMdCRnZnQ0Krux6YAHTjAUmxJUhjvvMN94ki8Z-3Vw81SxGy6azHaeDwHuwyNtlIMj71xiBCUpNuVXhvusfaXM8zbDSdc7xELzk9iKbKgNwVqaIsIcJyQqmB6PUghs8cCBl7cXMV3sO9euIc3Jjm9qbPapHIF3CLskG3rAMjuxKPdWyMyevB2QkQszvgl8hJizvitCv-xUEZ5grEp-ebxYdmX-jdRpkSjWQaV7TQ9A";
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
        };
        //console.log("animal in Card:");
        //console.log(animal);

        setAnimalId(true);
        setItem(animal);
      };

      fetchCardData();
    } else {
      setAnimalId(true);
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

          <div className="button">
            <button
              className="adopt"
              onClick={() => {
                navigate("/responses");
              }}
            >
              {" "}
              Adopt
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
