import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./styles/searchCatergory.css";

const SearchCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
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
          <li onClick={() => handleOptionSelect("All Categories")}>
            All Categories
          </li>
          <li onClick={() => handleOptionSelect("PPE")}>PPE</li>
          <li onClick={() => handleOptionSelect("Health & Medical")}>
            Health & Medical
          </li>
          <li onClick={() => handleOptionSelect("Garden & Outdoor")}>
            Garden & Outdoor
          </li>
          <li onClick={() => handleOptionSelect("Sports & Fiteness")}>
            Sports & Fiteness
          </li>
          <li onClick={() => handleOptionSelect("Other")}>Other</li>
          <li onClick={() => handleOptionSelect("Baby")}>Baby</li>
          <li onClick={() => handleOptionSelect("Beauty & Personal Care")}>
            Beauty & Personal Care
          </li>
          <li onClick={() => handleOptionSelect("Home, Kitchen & Office")}>
            Home, Kitchen & Office
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchCategory;
