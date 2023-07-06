import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./styles/searchCatergory.css";

const SearchCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(() => !isOpen);
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(event.currentTarget.dataset.category);
    setIsOpen(() => false);
  };

  return (
    <div className="searchCategory">
      <div className="downArrowBtn">
        <button
          className="dropdown-toggle"
          style={{
            color: selectedOption === "All Categories" ? "#cbd5e0" : "black",
          }}
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "All Categories"}
          <HiOutlineChevronDown className="downArrow" />
        </button>
      </div>
      {isOpen && (
        <ul className="dropdownList">
          <li data-category="All Categories" onClick={handleOptionSelect}>
            All Categories
          </li>
          <li data-category="PPE" onClick={handleOptionSelect}>
            PPE
          </li>
          <li data-category="Health & Medical" onClick={handleOptionSelect}>
            Health & Medical
          </li>
          <li data-category="Garden & Outdoor" onClick={handleOptionSelect}>
            Garden & Outdoor
          </li>
          <li data-category="Sports & Fiteness" onClick={handleOptionSelect}>
            Sports & Fiteness
          </li>
          <li data-category="Other" onClick={handleOptionSelect}>
            Other
          </li>
          <li data-category="Baby" onClick={handleOptionSelect}>
            Baby
          </li>
          <li
            data-category="Beauty & Personal Care"
            onClick={handleOptionSelect}
          >
            Beauty & Personal Care
          </li>
          <li
            data-category="Home, Kitchen & Office"
            onClick={handleOptionSelect}
          >
            Home, Kitchen & Office
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchCategory;
