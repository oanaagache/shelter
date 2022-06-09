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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjEyMTJmNTYxZDFlOWJlNzMxMDZmMDAzZTE0ZmRlMDQ5MTE2YzMxZjk2MzllZGFlYzk2ZWMzNWY3MDcxNzI4MTYzMTJkNjc4YmYyNDc3M2JmIiwiaWF0IjoxNjU0ODAwOTAxLCJuYmYiOjE2NTQ4MDA5MDEsImV4cCI6MTY1NDgwNDUwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.jXfnPTe4bmlWBqP1FAbquEQxWsXg0GgIWX_aigQbJ3v3efMpYfYe6MKrM6ET9dvl1H1_DSPtSDUk-L810eGRgHfRby3lNTd7-zYKytv5xR08nm-pSMnPrksxDc8hPS9YXPskiMVnuzrjW1jmmGlLRf8EoOM7Z3FpUBhUB-Z660ErursVATmxsX_rNvFerSfyiqxkusTFS2B9CbwkMt5hEKnTHHB3n-Lb3VvGZbo7BTXTHqmNMYyCR4jyONa-X_GTrWFRFl8xHEzVRQWyVxpVo68_PG3wbDY7PteauiGhU29AFvl3t-XCwOwz6a7K0YQkTXIZX3l-CI2zThd9Datn5g";
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
