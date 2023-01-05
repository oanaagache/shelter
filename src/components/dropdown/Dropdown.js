import { useState } from "react";
import "../dropdown/Dropdown.css";
import logo from "../../images/image5.svg";

const Dropdown = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        style={
          ({ alignItems: "center" },
          { fontSize: "12px" },
          { paddingLeft: "7px" })
        }
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <img
          style={({ height: "20px" }, { width: "20px" })}
          src={logo}
          alt="alt"
        />
      </div>

      {isActive && (
        <div className="dropdown-content" style={{ marginLeft: "0" }}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
              style={({ fontSize: "13px" }, { paddingLeft: "7px" })}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
