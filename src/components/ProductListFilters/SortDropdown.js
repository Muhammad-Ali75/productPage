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
    setIsOpen(() => !isOpen);
  };

  const handleOptionSelect = (event) => {
    sortByChange(event.currentTarget.dataset.sort);
    setIsOpen(() => false);
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
          <li data-sort="Relevence" onClick={handleOptionSelect}>
            Relevence
          </li>
          <li data-sort="Latest" onClick={handleOptionSelect}>
            Latest
          </li>
          <li data-sort="Price Low to High" onClick={handleOptionSelect}>
            Price Low to High
          </li>
          <li data-sort="Price High to Low" onClick={handleOptionSelect}>
            Price High to Low
          </li>
          <li data-sort="MOQ Low to High" onClick={handleOptionSelect}>
            MOQ Low to High
          </li>
          <li data-sort="Ratings High to Low" onClick={handleOptionSelect}>
            Ratings High to Low
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
