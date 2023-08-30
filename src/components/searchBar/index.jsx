import "./styles.css";
import Button from "../button/index";
import React from "react";
// import React, { useState } from "react";

const SearchBar = ({ searchTerm, onSearchChange, handleClick }) => {
  return (
    <div className="searchBar">
      <div className="search-form">
        <input
          type="search"
          placeholder="search"
          className="form-input"
          value={searchTerm}
          onChange={onSearchChange}
        />

        <Button onClick={handleClick} />
      </div>
    </div>
  );
};
export default SearchBar;
