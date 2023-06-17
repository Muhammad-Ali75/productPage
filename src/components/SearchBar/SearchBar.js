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
            <h4 onClick={handleSetOpen}>PPE</h4>
            <ul>
              <li onClick={handleSetOpen}>Beard Covers</li>
              <li onClick={handleSetOpen}>Coverall</li>
              <li onClick={handleSetOpen}>Face Mask</li>
              <li onClick={handleSetOpen}>Face Shield</li>
              <li onClick={handleSetOpen}>Gloves</li>
              <li onClick={handleSetOpen}>Goggles</li>
              <li onClick={handleSetOpen}>Gown</li>
              <li onClick={handleSetOpen}>Head Cover</li>
              <li onClick={handleSetOpen}>Mask Straps</li>
              <li onClick={handleSetOpen}>PPE Kit</li>
              <li onClick={handleSetOpen}>Shoe Cover</li>
              <li onClick={handleSetOpen}>Surgical Scrubs</li>
            </ul >
          </div >

          {/* Health & Medical */}

          <div>
            <h4 onClick={handleSetOpen}>Health & Medical</h4>
            <ul>
              <li onClick={handleSetOpen}>Adult Diapers</li>
              <li onClick={handleSetOpen}>Air Purifiers</li>
              <li onClick={handleSetOpen}>Barriers</li>
              <li onClick={handleSetOpen}>Body Bags</li>
              <li onClick={handleSetOpen}>Covid Test Kits</li>
              <li onClick={handleSetOpen}>Disinfection Tunnels</li>
              <li onClick={handleSetOpen}>Hand Sanitizer</li>
              <li onClick={handleSetOpen}>Medical Equipment & Hospital Supplies</li >
              <li onClick={handleSetOpen}>Oximeter</li>
              <li onClick={handleSetOpen}>Oxygen Regulators</li>
              <li onClick={handleSetOpen}>Sanitizer Sprays & Bottles</li >
              <li onClick={handleSetOpen}>Sanitizing Grips</li>
              <li onClick={handleSetOpen}>Sterilizer</li>
              <li onClick={handleSetOpen}>Syringe</li>
              <li onClick={handleSetOpen}>Thermometer</li>
              <li onClick={handleSetOpen}>Wipes</li>
            </ul>
          </div >

          {/* Garden & Outdoor */}

          <div >
            <h4 onClick={handleSetOpen}>Garden & Outdoor</h4>
            <ul>
              <li onClick={handleSetOpen}>Deck Boxes</li>
              <li onClick={handleSetOpen}>Outdoor Decor</li>
              <li onClick={handleSetOpen}>Patio Furniture & Accessories</li>
            </ul >
          </div >

          {/* Sports & Fitness */}

          <div >
            <h4 onClick={handleSetOpen}>Sports & Fitness</h4>
            <ul>
              <li onClick={handleSetOpen}>Pilates</li>
              <li onClick={handleSetOpen}>Strength Training Equipment</li>
            </ul>
          </div >

          {/* Other */}

          <div  >
            <h4 onClick={handleSetOpen}>Other</h4>
            <ul>
              <li onClick={handleSetOpen}>Miscellaneous</li>
            </ul >
          </div >

          {/* Baby */}

          <div >
            <h4 onClick={handleSetOpen}>Baby</h4>
            <ul>
              <li onClick={handleSetOpen}>Feeding Products</li>
            </ul >
          </div >

          {/* Beauty & Personal Care */}

          <div >
            <h4 onClick={handleSetOpen}>Beauty & Personal Care</h4>
            <ul>
              <li onClick={handleSetOpen}>Electric Copper Combs</li>
              <li onClick={handleSetOpen}>Eyebrow Trimmers</li>
              <li onClick={handleSetOpen}>Feminine Care</li>
              <li onClick={handleSetOpen}> Skin Care</li>
            </ul>
          </div >

          {/* Home, Kitchen & Office */}

          <div >
            <h4 onClick={handleSetOpen}>Home, Kitchen & Office</h4>
            <ul>
              <li onClick={handleSetOpen}>Home & Office Decor</li>
            </ul >
          </div >
        </div >
      )
      }
    </div >
  );
}

export default SearchBar;
