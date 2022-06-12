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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImViYzk0YjUyODc3ZWFiYTNiMzNiZTZlMGRjOGRiNWJiZDYyZmYyODJlZjBkMTFjNGE3ZDMyNzhkMWQyMTdkYTEzZDYxMjgxOTM1NjIzNjY0IiwiaWF0IjoxNjU1MDUzOTY2LCJuYmYiOjE2NTUwNTM5NjYsImV4cCI6MTY1NTA1NzU2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.G8WKb1pFh8l2UVNirD6CLH5DNi_KP7_tiHNao3CI7BcZSz31SkhHMFBcsmGjOzo4na1d5yTgL4BmI10NGHKtrEmyDxFBilSr-s9nLZVBcFThcJbwOvVagG61YqIQHH30uJknQy52gBdw6nc5sOjDICiNI8iMmxy9XuHAFLlS8jvFG8WABAitWtwhcEqCNMToMSaB7aPYc86QTCGG1YgPa7trQDBIBp_hkpllciRhhWLfAK78qltFZObDorV7byoytE6Ko8rlJR-OI1cDGSD3RYGzCZqHX8NyJMvsUksl8ecGLqhLkO6ZQBUoQnnKU7eqCOyQzQ9Bk8Tk6XB2zlc-Yg";
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
        console.log("animal in Card:");
        console.log(animal);

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
        </div>
      )}
    </>
  );
};

export default Card;
