import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../../images/image4.svg";
import pic1 from "../../../images/dog.png";
import pic2 from "../../../images/cat.png";
import "../../../../src/index.css";
import "./Articles.css";

const Articles = () => {
  let navigate = useNavigate();

  return (
    <div className="articles-cont">
      <div className="articles-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="articles-arrow" to="/">
          Back{" "}
        </Link>
      </div>

      <div className="articles-title">Articles</div>

      <div className="articles-cards">
        <div className="articles-card-container">
          <div className="articles-card-content">
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={pic1}
            />
            <div className="articles-card-inner">
              <div className="articles-card-details">
                <h5>Dog Adoption Articles</h5>
                <h6>Learn more articles caring for your new dog.</h6>

                <div className="button-articles">
                  <button
                    className="button-articles-read"
                    onClick={() => {
                      navigate("/dogarticles");
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="articles-card-container">
          <div className="articles-card-content">
            <img
              style={{
                width: 350,
                height: 350,
              }}
              src={pic2}
            />
            <div className="articles-card-inner">
              <div className="articles-card-details">
                <h5>Cat Adoption Articles</h5>
                <h6>Helpful insights on what to expect when you have a pet.</h6>
                <div className="button-articles">
                  <button
                    className="button-articles-read"
                    onClick={() => {
                      navigate("/dogarticles");
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
    </div>
  );
};

export default Articles;
