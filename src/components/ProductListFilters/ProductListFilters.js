import FiltersSection from "./FilterSection";
import ProductSection from "./ProductSection";

function ProductListFilters() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1550px",
        flexDirection: "row",
        display: "flex",
        alignSelf: "center",
        margin: "5rem 0rem",
      }}
    >
      {true && <FiltersSection />}
      <ProductSection />
    </div>
  );
}

export default ProductListFilters;
