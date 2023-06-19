import "./styles/ProductList.css";
import ProductGridCard from "./ProductGridCard";
import ProductListCard from "./ProductListCard";
import { useContext } from "react";
import { Context as ProductContext } from "../../context/ProductContext";

function ProductList({ view }) {
  const {
    state: { products },
  } = useContext(ProductContext);

  return (
    <div
      className={
        view === "grid" ? "product-grid-container" : "product-list-container"
      }
    >
      {products.map((item, index) =>
        view === "grid" ? (
          <ProductGridCard {...item} key={index} />
        ) : (
          <ProductListCard {...item} />
        )
      )}
    </div>
  );
}

export default ProductList;
