import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./images/image4.svg";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link
                to="/"
                style={
                  ({ textDecoration: "none" }, { color: " rgb(184, 106, 187)" })
                }
              >
                Back{" "}
              </Link>
            </h2>
          </div>

          <h4 className="adopt-title">More Details About Us</h4>
        </div>
      </div>

      <div className="adopt-drop">
        <h6>
          SHELTER is dedicated to helping pets find homes, and we know you are
          too. Our site provides ready access to data for hundreds of thousands
          of adoptable pets and the organizations that care for them.
        </h6>

        <h6>
          Dogs, cats, rabbits, and other domesticated animals rely on the care
          of devoted human guardians to keep them safe, happy, and healthy. Some
          of these animals are lucky enough to be adopted into responsible,
          permanent homes. Sadly, there are far more animals in need of a caring
          family than there are people willing or able to provide them with a
          lifetime of love and support.
        </h6>

        <div className="button">
          <button
            className="backHome"
            onClick={() => {
              navigate("/adopt");
            }}
          >
            Go to Adopt page
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
