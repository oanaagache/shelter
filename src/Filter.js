import React, { useEffect } from "react";

const Filter = () => {
  return (
    <section className="filter">
      <div>
        <select name="select" id="select" className="select">
          <option value="Type of pet">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
