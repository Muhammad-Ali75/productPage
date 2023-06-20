import "./styles/SearchInput.css";
import SearchCategory from "./SearchCategory";
import { useContext, useRef } from "react";
import { Context as PleContext } from "../../context/ProductListEnhancement";

function SeachInput() {
  const inputRef = useRef();
  const { keywordChange } = useContext(PleContext);

  function handleKeywordChange(event) {
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
        Search
      </button>
    </div>
  );
}

export default SeachInput;
