import React from "react";
import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <label htmlFor="searchbar">Search Bar!</label>
        <input
          type="text"
          className="ui container"
          value={term}
          onChange={onInputChange}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
