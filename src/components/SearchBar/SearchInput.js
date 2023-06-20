import "./styles/SearchInput.css";
import SearchCategory from "./SearchCategory";
import { useContext, useRef } from "react";
import { Context as PleContext } from "../../context/ProductListEnhancement";
import { FaSearch } from "react-icons/fa";

function SeachInput() {
  const inputRef = useRef();
  const { keywordChange } = useContext(PleContext);

  function handleKeywordChange() {
    keywordChange(inputRef.current.value);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      keywordChange(inputRef.current.value);
    }
  };
  return (
    <div className="searchInputContainer">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <div className="categoryDropdown">
          <SearchCategory />
        </div>
      </div>
      <button className="btn-search" onClick={handleKeywordChange}>
        <p className="search-text">Search</p>
        <div className="search-icon">
          <FaSearch />
        </div>
      </button>
    </div>
  );
}

export default SeachInput;
