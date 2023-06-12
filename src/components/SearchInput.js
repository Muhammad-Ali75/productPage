import "../styles/SearchInput.css";
import SearchCategory from "./SearchCategory";

function SeachInput() {
  return (
    <div className="searchInputContainer">
      <div className="inputContainer">
        <input type="text" placeholder="Search" />
        <div className="categoryDropdown">
          <SearchCategory />
        </div>
      </div>
      <button className="btn-search">Search</button>
    </div>
  );
}

export default SeachInput;
