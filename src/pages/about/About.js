import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/image4.svg";
import "./About.css";

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="about-cont">
      <div className="about-inner">
        <img
          style={({ height: "10px" }, { width: "10px" })}
          src={logo}
          alt="Not found"
        />
        <Link className="about-arrow" to="/">
          Back{" "}
        </Link>
      </div>

      <div className="about-title">More Details About Us</div>

      <div className="about">
        <div>
          ANIMAL SHELTER is dedicated to helping pets find homes, and we know
          you are too. Our site provides ready access to data for hundreds of
          thousands of adoptable pets and the organizations that care for them.
        </div>
        <br />
        <div>
          Dogs, cats, rabbits, and other domesticated animals rely on the care
          of devoted human guardians to keep them safe, happy, and healthy. Some
          of these animals are lucky enough to be abouted into responsible,
          permanent homes. Sadly, there are far more animals in need of a caring
          family than there are people willing or able to provide them with a
          lifetime of love and support.
        </div>
        <br />
      </div>

      <div className="about-button-adopt">
        <button
          className="about-button"
          onClick={() => {
            navigate("/adopt");
          }}
        >
          Adopt
        </button>
      </div>
    </div>
  );
};

export default About;
