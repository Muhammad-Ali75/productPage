import "./styles/ProductListFilters.css";
import FiltersSection from "./FilterSection";
import ProductSection from "./ProductSection";
import { useState } from "react";

function ProductListFilters() {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div className="product-list-filter-container">
      <div className="desktop-filters">{true && <FiltersSection />}</div>

      <div className="mobile-filters">
        <button onClick={toggleDropdown}>
          {dropdown ? "Close Filters" : "Show Filters"}
        </button>
        {dropdown && <FiltersSection />}
      </div>
      <ProductSection />
    </div>
  );
}

export default ProductListFilters;
