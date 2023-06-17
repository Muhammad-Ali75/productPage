import "./styles/ProductListFilters.css"
import FiltersSection from "./FilterSection";
import ProductSection from "./ProductSection";

function ProductListFilters() {
  return (
    <div className="product-list-filter-container">
      {true && <FiltersSection />}
      <ProductSection />
    </div>
  );
}

export default ProductListFilters;
