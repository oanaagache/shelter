import React, { useEffect } from "react";

const ages = ["Baby", "Young", "Adult", "Senior"];
const Filteri = ({ setCards, cards }) => {
  // Prevent page reload when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // Filter by age

  useEffect(() => {
    filterAges;
    console.log("useEffect: Ages");
    var agesArray = ["Baby", "Young", "Adult", "Senior"];
    setCards(agesArray);
  }, []);

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <div className="select">
          <select
            name="select"
            id="select"
            onChange={(e) => filterAges(e.target.value)}
            value={ages.name}
          >
            <option value="Baby">Africa</option>
            <option value="Young">Asia</option>
            <option value="Adult">Europe</option>
            <option value="Senior">Americas</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filteri;
