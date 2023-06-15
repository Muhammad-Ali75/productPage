import { useState } from "react";
import SortSection from "./SortSection";
import ProductList from "./ProductList";
import "./styles/ProductSection.css";
import Pagination from "./Pagination";

function ProductSection() {
  const [view, setView] = useState("grid");

  function handleSet(v) {
    setView(v);
  }

  return (
    <div className="productSection">
      <div className="bannerContainer">
        <p style={{ color: "#231f20" }}>Buy</p>
        <div className="imageContainer">
          <p>Placing bulk orders on BuyHive is safe & easy.</p>
          <strong>Click to learn how it works!</strong>
        </div>
      </div>
      {false && <div className="loadingContainer">Loading...</div>}
      <SortSection view={view} set={handleSet} />
      <ProductList view={view} />
      <div style={{ alignSelf: "flex-end" }}>
        <Pagination />
      </div>
    </div>
  );
}

export default ProductSection;
