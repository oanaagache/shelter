import React, { useState, useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import logo2 from "./images/image.png";
import { useParams } from "react-router-dom";

function Card(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  console.log(id);

  const [item, setItem] = useState({});
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RTM0bUY1eTh1YVRrY0Rwb3BIV2labldHb1lKWDVVZnc1OXZ0RkRwT0pVNzh1VzV1ciIsImp0aSI6IjgwNDE4NDkyNGQyYzA4Y2I3ZmE0Zjg3ZmVmYThjZDEyZjI1ZmYyZWI5NzNhYWVmNmM1NzVkNzgzNzA3ZjZmOWQ3OGQ1ZTY0YjBiMGFhOGEwIiwiaWF0IjoxNjU0NTk3NjEwLCJuYmYiOjE2NTQ1OTc2MTAsImV4cCI6MTY1NDYwMTIxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.F7mvA3nuEx40AwkZI4mOvmvLK2kY8gRFQr0y2-IgnZHS58Xkg0mrnmeSAadzyVmOQxJeAcpk7vUufBhr6didEpJ5EDL650RoN5XY2UNMslKk5VM0ocM3sU7LAlodDEQb88jZjgOwA9tac638irmB_PuhkdvweqiWuUpDFXJNraOALhuu8LaiIFaHf1xfpN0gy4sAskDgNqpMF7LadJ5DWcDLVlFW6S7YhGvV8vxorHPSYU_riGO7KqswLzA0nyfvbdrtg4X7op8CzPVw4BZVCwsTUp7DmwOuHEOP4W-pV9V3eSz8z_xGliOnPaMK8otxK_jmHMDDzLBpGFf-qpmHeQ";
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
        console.log(animal);
        setItem(animal);
      };

      fetchCardData();
    } else {
      setItem(props.item);
    }
  }, []);

  /*useEffect(() => {
    if (id) {
      fetch(animalUrl, {
        headers: {
          Authorization: bearer,
        },
      })
        .then((res) => res.json())
        .then((data) => {
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
          console.log(animal);
          setItem(animal);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);*/

  return (
    <div className="card-container">
      {/* <div className="card-header">
        <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
        <h2>
          <Link to="/adopt">Back</Link>
        </h2>
      </div> */}

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
  );
}

export default Card;
