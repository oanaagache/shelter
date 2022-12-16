import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "../../../src/index.css";

const CountrySelector = (props) => {
  const { setCountry } = props;
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    setCountry(value.label);
  };

  return (
    <Select
      className="text-base sm:text-base md:text-base lg lg:text-base xl:text-base xxl:text-base"
      id="inputCountry"
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default CountrySelector;
