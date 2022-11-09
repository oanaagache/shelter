import React from "react";

const Checkbox = (props) => {
  const { id, title, name, handleChange, checked } = props;

  return (
    <div>
      <input
        id={id}
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};
export default Checkbox;
