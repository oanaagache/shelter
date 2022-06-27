import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./images/image4.svg";
import pic1 from "./images/dog.png";
import pic2 from "./images/cat.png";

const Other = () => {
  let navigate = useNavigate();
  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/">Back</Link>
            </h2>
          </div>

          <h4 className="adopt-title">Articles</h4>
        </div>
      </div>

      <div className="cards">
        <div className="card-container">
          <img
            style={{
              width: 700,
              height: 700,
            }}
            src={pic1}
          />
          <div className="card-inner">
            <div className="card-details">
              <h2>Dog Adoption Articles</h2>
              <h5>Learn more about caring for your new dog.</h5>

              <div className="button-adopt">
                <button
                  className="adopt"
                  onClick={() => {
                    navigate("/adopt");
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <img
            style={{
              width: 700,
              height: 700,
            }}
            src={pic2}
          />
          <div className="card-inner">
            <div className="card-details">
              <h2>Cat Adoption Articles</h2>
              <h5>Helpful insights on what to expect.</h5>
              <div className="button-adopt">
                <button
                  className="adopt"
                  onClick={() => {
                    navigate("/adopt");
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
