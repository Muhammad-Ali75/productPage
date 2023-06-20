import { useEffect, useContext } from "react";
import { Context as PleContext } from "./context/ProductListEnhancement";
import { Context as ProductContext } from "./context/ProductContext";

import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";
import Footer from "./components/Footer/Footer";

function App() {
  const { state } = useContext(PleContext);
  const {
    state: { products, error },
    getData,
  } = useContext(ProductContext);

  useEffect(() => {
    getData({ ...state });
    // eslint-disable-next-line
  }, [state]);

  return (
    <>
      <NavBar />
      <div className="App">
        <SearchBar />
        {products.length !== 0 && <ProductListFilters />}
        {(products.length === 0 || error) && (
          <div
            style={{
              color: "red",
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            No Products to Show
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
