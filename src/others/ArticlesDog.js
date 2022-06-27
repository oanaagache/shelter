import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/image4.svg";
import pic1 from "./images/image6.jpg";
import pic2 from "./images/image7.jpg";
import pic3 from "./images/image8.jpg";
import pic4 from "./images/image9.jpg";
import { Link } from "react-router-dom";

const ArticlesDog = () => {
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

          <h4 className="adopt-title">Dog Adoption</h4>
        </div>
      </div>

      <div className="cards">
        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic1}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>Why Are Dogs Given Up?</h2>
                <h5>
                  Find out the most common reasons for pet relinquishment. The
                  truth may surprise you!
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic2}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>First 30 Days With A New Dog</h2>
                <h5>
                  The first month is the most important to bond with a new dog.
                  Learn what to expect.
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic3}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>What Questions Should You Ask A Dog Breeder?</h2>
                <h5>
                  You have decided that it’s time to add a pet to your family.
                  After some consideration, you’ve fallen in love with a
                  particular dog breed. Many people then look for a dog breeder
                  to make their purebred-pup dream come true. Like any
                  responsible future pet parent, you still have some questions
                  before you take the plunge and choose your new
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-content">
            <img
              style={{
                width: 300,
                height: 300,
              }}
              src={pic4}
            />

            <div className="card-inner">
              <div className="card-details">
                <h2>Dog Rehoming – How to Rehome Your Pet</h2>
                <h5>
                  Rehoming a dog, in the first place, is not abandonment; as a
                  matter of fact, it’s humane, mature, and responsible.
                  Secondly, while there are various problems that can
                  potentially cause pet parents to consider giving away their
                  dog, comparatively there are also solutions. Dog Rehoming
                  Issue and Solution Board I got a new job and there’s no …
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlesdog");
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

export default ArticlesDog;
