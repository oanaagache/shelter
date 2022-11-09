import { useState } from "react";
import "./Adopt.css";
import logo from "./others/images/image5.svg";

function Dropdown({ selected, setSelected, options }) {
  const [isActive, setIsActive] = useState(false);
  //console.log("options :", options);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={logo} />
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
