import { useState } from "react";
import "./Form.css";
import logo from "./image5.svg";

function Form({ selected, setSelected, options }) {
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
          {options.map((option) => (
            <div
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

export default Form;
