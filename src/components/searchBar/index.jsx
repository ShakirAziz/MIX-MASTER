import "./styles.css";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <form className="search-form">
        <input type="search" name="search" id="" className="form-input" />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
