import { useContext, useState } from "react";
import { Context as PleContext } from "../../context/ProductListEnhancement";
import { HiOutlineChevronDown } from "react-icons/hi";
import "./styles/SortDropdown.css";

function SortDropdown() {
  const {
    state: { sort_by },
    sortByChange,
  } = useContext(PleContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    sortByChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className="sortDropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={() => {
        if (isOpen) {
          toggleDropdown();
        }
      }}
    >
      <div className="sortdownArrowBtn">
        <button className="sortDropdown-toggle" onClick={toggleDropdown}>
          {sort_by}
          <HiOutlineChevronDown className="downArrow" />
        </button>
      </div>
      {isOpen && (
        <ul className="sortDropdownList">
          <li onClick={() => handleOptionSelect("Relevence")}>Relevence</li>
          <li onClick={() => handleOptionSelect("Latest")}>Latest</li>
          <li onClick={() => handleOptionSelect("Price Low to High")}>
            Price Low to High
          </li>
          <li onClick={() => handleOptionSelect("Price High to Low")}>
            Price High to Low
          </li>
          <li onClick={() => handleOptionSelect("MOQ Low to High")}>
            MOQ Low to High
          </li>
          <li onClick={() => handleOptionSelect("Ratings High to Low")}>
            Ratings High to Low
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
