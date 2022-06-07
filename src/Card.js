import React from "react";
import "./Card.css";
import logo from "./images/image5.svg";
import { Link } from "react-router-dom";
import logo2 from "./images/image.png";
//import { useParams } from "react-router-dom";

function Card({ item, setAnimalSelected }) {
  //const { id } = useParams();

  return (
    <div className="card-container">
      {/* <div className="card-header">
        <img style={({ height: 0.1 }, { padding: 10 })} src={logo} />
        <h2>
          <Link to="/adopt">Back</Link>
        </h2>
      </div> */}

      <div className="card-content">
        {/* <Link to="/card/:id"> */}
        <img
          style={{
            width: 300,
            height: 300,
          }}
          onClick={() => setAnimalSelected(item)}
          src={item.img ? item.img["medium"] : logo2}
        />
        {/* </Link> */}

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
