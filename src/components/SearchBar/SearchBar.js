import { useState } from "react";
import CatergoryDropdown from "./CategoryDropdown";
import SeachInput from "./SearchInput";
import "./styles/SearchBar.css";

function SearchBar() {
  const [open, setOpen] = useState(false);

  function handleSetOpen() {
    setOpen(!open);
  }

  return (
    <div className="searchBar">
      <div className="containerSearch">
        <CatergoryDropdown open={open} set={handleSetOpen} />
        <SeachInput />
      </div>
      {/* Category Dropdown */}
      {open && (
        <div className="category-dropdown">
          {/* PPE List */}

          <div>
            <h4>PPE</h4>
            <ul>
              <li>Beard Covers</li>
              <li>Coverall</li>
              <li>Face Mask</li>
              <li>Face Shield</li>
              <li>Gloves</li>
              <li>Goggles</li>
              <li>Gown</li>
              <li>Head Cover</li>
              <li>Mask Straps</li>
              <li>PPE Kit</li>
              <li>Shoe Cover</li>
              <li>Surgical Scrubs</li>
            </ul>
          </div>

          {/* Health & Medical */}

          <div>
            <h4>Health & Medical</h4>
            <ul>
              <li>Adult Diapers</li>
              <li>Air Purifiers</li>
              <li>Barriers</li>
              <li>Body Bags</li>
              <li>Covid Test Kits</li>
              <li>Disinfection Tunnels</li>
              <li>Hand Sanitizer</li>
              <li>Medical Equipment & Hospital Supplies</li>
              <li>Oximeter</li>
              <li>Oxygen Regulators</li>
              <li>Sanitizer Sprays & Bottles</li>
              <li>Sanitizing Grips</li>
              <li>Sterilizer</li>
              <li>Syringe</li>
              <li>Thermometer</li>
              <li>Wipes</li>
            </ul>
          </div>

          {/* Garden & Outdoor */}

          <div>
            <h4>Garden & Outdoor</h4>
            <ul>
              <li>Deck Boxes</li>
              <li>Outdoor Decor</li>
              <li>Patio Furniture & Accessories</li>
            </ul>
          </div>

          {/* Sports & Fitness */}

          <div>
            <h4>Sports & Fitness</h4>
            <ul>
              <li>Pilates</li>
              <li>Strength Training Equipment</li>
            </ul>
          </div>

          {/* Other */}

          <div>
            <h4>Other</h4>
            <ul>
              <li>Miscellaneous</li>
            </ul>
          </div>

          {/* Baby */}

          <div>
            <h4>Baby</h4>
            <ul>
              <li>Feeding Products</li>
            </ul>
          </div>

          {/* Beauty & Personal Care */}

          <div>
            <h4>Beauty & Personal Care</h4>
            <ul>
              <li>Electric Copper Combs</li>
              <li>Eyebrow Trimmers</li>
              <li>Feminine Care</li>
              <li> Skin Care</li>
            </ul>
          </div>

          {/* Home, Kitchen & Office */}

          <div>
            <h4>Home, Kitchen & Office</h4>
            <ul>
              <li>Home & Office Decor</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
