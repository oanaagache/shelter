import { useState } from "react";
import "../../../src/index.css";
import logo from "../../images/image5.svg";

const Dropdown = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-4/5 sm:w-3/5 relative mt-1 box-content">
      <div
        className="flex items-center justify-between bg-white shadow-md font-bold text-black "
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <img src={logo} />
      </div>

      {isActive && (
        <div className="absolute top-full left-auto py-3 bg-white shadow-lg  text-black w-full z-1 box-content">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="py-1 px-2 box-content cursor-pointer transition-all hover:bg-gray"
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
