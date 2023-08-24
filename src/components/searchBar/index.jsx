import "./styles.css";
import Button from "../button";
const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form className="search-form">
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="form-input"
        />
        <Button btnType="submit" btnText="Search" />
      </form>
    </div>
  );
};
export default SearchBar;
