import "./styles/ProductList.css"
import ProductGridCard from "./ProductGridCard";
import ProductListCard from "./ProductListCard";

function ProductList({ view }) {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <div className={view === "grid" ? "product-grid-container" : "product-list-container"}
    >
      {data.map((item, index) =>
        view === "grid" ? (
          <ProductGridCard isUsa={index % 2 === 0 ? true : false} />
        ) : (
          <ProductListCard />
        )
      )}
    </div>
  );
}

export default ProductList;
