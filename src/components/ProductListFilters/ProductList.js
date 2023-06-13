import ProductGridCard from "./ProductGridCard";
import ProductListCard from "./ProductListCard";

function ProductList({ view }) {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: view === "grid" ? "row" : "column",
        flexWrap: view === "grid" ? "wrap" : "nowrap",
        marginTop: 20,
      }}
    >
      {data.map((item, index) =>
        view === "grid" ? <ProductGridCard /> : <ProductListCard />
      )}
    </div>
  );
}

export default ProductList;
