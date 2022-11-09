import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/image4.svg";

const Foster = () => {
  return (
    <div className="adopt-container">
      <div className="adopt-header">
        <div className="adopt-content">
          <div className="adopt-inner">
            <img style={({ height: 1 }, { padding: 10 })} src={logo} />
            <h2>
              <Link to="/" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </h2>
          </div>

          <h4 className="adopt-title">Why Foster A Dog or Cat?</h4>
        </div>
      </div>

      <div className="adopt-drop">
        <h5 className="adopt-drop-title">
          What does fostering a dog/cat involve?
        </h5>
        <h6>
          When you foster, you agree to take a homeless dog/cat into your home
          and give him or her love, care and attention, either for a
          predetermined period of time or until the dog/cat is adopted.
        </h6>
        <h5>Why do adoption groups need foster homes?</h5>
        <h6>
          There are many reasons a dog/cat might need foster care. Some of the
          most common include:
        </h6>
        <ul>
          <li>
            A rescue group doesn’t have a physical shelter and depends on foster
            homes to care for dogs/cats until suitable homes are found.
          </li>
          <li>
            A puppy is too young to be adopted and needs a safe place to stay
            until he or she is old enough to go to a forever home.
          </li>
          <li>
            A dog/cat is recovering from surgery, illness or injury and needs a
            safe place to recuperate.
          </li>
          <li>
            A dog/cat is showing signs of stress such as pacing or hiding in the
            shelter.
          </li>
          <li>
            A dog/cat has not lived in a home before or has not had much contact
            with people and needs to be socialized.
          </li>
          <li>
            A dog/cat has not lived in a home before or has not had much contact
            with people and needs to be socialized.
          </li>
        </ul>
        <h5>Why should I foster a dog or cat?</h5>
        <h6>
          Fostering a dog/cat is one of the most rewarding experiences you can
          have (other than adopting, of course). By taking an animal in need
          temporarily into your home you’re:
        </h6>
        <ul>
          <li>
            freeing up a spot so the shelter or rescue can take in another
            dog/cat.
          </li>
          <li>
            giving your foster dog/cat the time he needs to be ready for
            adoption.
          </li>
          <li>
            helping the shelter or rescue learn more about the dog/cat so he can
            end up in the best home possible.
          </li>
          <li>
            socializing the dog/cat to a home environment and possibly getting
            him used to being around other pets and different types of people.
          </li>
        </ul>
        <h5>How do I sign up to foster a dog or cat?</h5>
        <h6>
          Find a <Link to="/">rescue group or shelter near you </Link> and
          contact them. They’ll likely have you fill out a foster application
          and, if you are approved, they will work with you to figure out the
          right foster dog/cat for your household.
        </h6>
      </div>
    </div>
  );
};

export default Foster;
