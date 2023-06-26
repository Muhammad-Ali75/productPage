import "./styles/ProductList.css";
import ProductGridCard from "./ProductGridCard";
import ProductListCard from "./ProductListCard";
import { useContext } from "react";
import { useSelector } from "react-redux";
// import { Context as ProductContext } from "../../context/ProductContext";

function ProductList({ view }) {
  // const {
  //   state: { products },
  // } = useContext(ProductContext);
  const { products } = useSelector((state) => state.product);

  return (
    <div
      className={
        view === "grid" ? "product-grid-container" : "product-list-container"
      }
    >
      {products.map((item) =>
        view === "grid" ? (
          <ProductGridCard key={item._id} {...item} />
        ) : (
          <ProductListCard key={item._id} {...item} />
        )
      )}
    </div>
  );
}

export default ProductList;
