import { useEffect, useContext } from "react";
import { Context as PleContext } from "./context/ProductListEnhancement";
import { Context as ProductContext } from "./context/ProductContext";

import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";
import Footer from "./components/Footer/Footer";

function App() {
  const {
    state: { page },
  } = useContext(PleContext);
  const {
    state: { products, totalPages, all_products },
    getData,
  } = useContext(ProductContext);

  console.log("Product STATE:::", products, totalPages, all_products);

  useEffect(() => {
    getData({ page });
  }, [page]);

  return (
    <>
      <NavBar />
      <div className="App">
        <SearchBar />
        {products.length !== 0 && <ProductListFilters />}
      </div>
      <Footer />
    </>
  );
}

export default App;
