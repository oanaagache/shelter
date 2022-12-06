import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/image4.svg";
import pic1 from "../../images/image10.jpg";
import pic2 from "../../images/image11.jpg";
import pic3 from "../../images/image12.jpg";
import pic4 from "../../images/image13.jpg";
import { Link } from "react-router-dom";

const ArticlesCat = () => {
  let navigate = useNavigate();
  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/other" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </h2>
          </div>

          <h4 className="adopt-title">Cat Adoption</h4>
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
                <h2>Looking To Adopt?</h2>
                <h5>
                  Be prepared should be your mantra when adopting a cat. Find
                  out all you need to know before you bring kitty home.
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlescat");
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
                <h2>First 30 Days With A New Cat</h2>
                <h5>
                  Did you recently adopt a cat or are thinking about adopting
                  one? Learn what life might be like during the first month.
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlescat");
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
                <h2>Why Do Some Cats Like Water?</h2>
                <h5>
                  Cats are notorious for hating water, but did you know that
                  some cat breeds love to get wet? Find out which breeds, and
                  why. Does your cat love getting wet? Statistically speaking,
                  probably not! Most cats are fascinated by running water even
                  if they don’t want to play in it — but some cats not only
                  tolerate water, they
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlescat");
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
                <h2>Best Cat and Cute Kitten Names</h2>
                <h5>
                  Are you looking for just the right name for your new cat?
                  We’ve got all the inspiration you need to pick a pawsitively
                  pawesome cat name. So you have a new cat, but you want to find
                  a name that suits her to the nines. You’ve come to the right
                  place! Cat names can convey a cat’s personality, behavior, …
                </h5>
                <div className="button-adopt">
                  <button
                    className="adopt"
                    onClick={() => {
                      navigate("/articlescat");
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

export default ArticlesCat;
