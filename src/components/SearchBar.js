import CatergoryDropdown from "./CategoryDropdown";
import SeachInput from "./SearchInput";
import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="containerSearch">
      <CatergoryDropdown />
      <SeachInput />
    </div>
  );
}

export default SearchBar;
