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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjBjMmZlZGEyMzIzNDgwMjcxM2M3MmQ0ZTI4YWNjMWJiMmU3NzFiN2QzMzk4NzI5NGQwOGExNGQxZjA3MmJhNjMyN2IzMDYxYjE0ZDY0MzVhIiwiaWF0IjoxNjU0Nzc0ODM5LCJuYmYiOjE2NTQ3NzQ4MzksImV4cCI6MTY1NDc3ODQzOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.fih1QSHVS3Uae-9YGec9WoAI8w_ZXn_7XlkQ2HG-ouZeG7UmSgYU7FRKT5wuufx1ezFJLPMkXuTo6UTS35sqGznqXGrd_yeYyVgr6A417htvwBQLUqVSavXsX8zhXwm-VZPIupMi_vL4hdq53k0l6ppszc0jL44N9mUw3mp8uOTL7HJ340IKI7vOW7N0IVcbSvK4qMlilbKxyoX5fXHovmbrgf7pUQ6pbHk1gnuAK7t_2FOzqUsMvFce1jx3tpzrcrk4NhtSZyA7TovzkVl_skRpMGloCH1aq3U4pQR63BPAK0Uz5gs-Kwm6C7pWPVVWbGGmR6uxozWClRbJHyKmXw";
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

              <div className="card-details">
                <h4>
                  Color:
                  {item.colors.primary ? item.colors.primary : "No color found"}
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
