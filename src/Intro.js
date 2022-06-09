import React from "react";

const Intro = (props) => {
  const {
    name,
    lastName,
    address1,
    address2,
    city,
    state,
    code,
    phoneNo,
    email,
  } = props;

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-inner">
          <div className="card-details">
            <h2>{name}</h2>
          </div>

          <div className="card-details">
            <h2>{lastName}</h2>
          </div>

          <div className="card-details">
            <h2>{address1}</h2>
          </div>

          <div className="card-details">
            <h2>{address2}</h2>
          </div>

          <div className="card-details">
            <h2>{city}</h2>
          </div>

          <div className="card-details">
            <h2>{state}</h2>
          </div>

          <div className="card-details">
            <h2>{code}</h2>
          </div>

          <div className="card-details">
            <h2>{phoneNo}</h2>
          </div>

          <div className="card-details">
            <h2>{email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
