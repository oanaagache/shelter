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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6ImRlMGM5NDBhZWFiY2E4N2I5NDM2NjM2MGIwODlkNGY3NzUzZWQ0MzhhN2VhYjYzNjRjOTEzZDA5NWYxODg5MTQ1YWFiM2RjOGRkOWQ1MTdhIiwiaWF0IjoxNjU0NzYyNTA0LCJuYmYiOjE2NTQ3NjI1MDQsImV4cCI6MTY1NDc2NjEwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.UCo2a5HlAYN-iHR69qsCCnmHl-o-6iFimkA1KjYAemwdb9om1xQuYjaHUk9dHkS-g041T5YCdhIUohZ-F7ip2dJ4az_8WBRqHcE43-yePvHJUb0NfyPelE6ZcPFvn61LuEwhvx-Oxv8rq8IBAEOkf6QS92WEP6nHunjylRYgpvloz6Pj-EKNOshMXX6l3dUyQduv6jNxQyNVnRfEZkJJmdkxPtijdD4Xy0zxp3xq5Abko7Pv4Jbk-6fMXm39Wm7t0HynekLlFIFVf22ZeLbU9w1KswiW-bbizPYovd-_cKh5_PqgMefMnlOiF9JsQ2RJ7KVnMAoCgvZeEpP7zYO5kQ";
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
