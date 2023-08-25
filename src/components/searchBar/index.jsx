import "./styles.css";
import Button from "../button";
import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchBar">
      <form className="search-form">
        <input
          type="search"
          placeholder="search"
          className="form-input"
          value={searchTerm}
          onChange={onSearchChange}
        />

        <Button />
      </form>
    </div>
  );
};
export default SearchBar;
