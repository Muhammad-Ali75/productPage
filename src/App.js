import { useEffect, useContext } from "react";
import { Context as PleContext } from "./context/ProductListEnhancement";
// import { Context as ProductContext } from "./context/ProductContext";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./store/productActions";

import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";
import Footer from "./components/Footer/Footer";

function App() {
  const { loading, error, products, all_products } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const { state } = useContext(PleContext);
  // const {
  //   state: { products, error, all_products },
  //   getData,
  // } = useContext(ProductContext);

  useEffect(() => {
    dispatch(getData({ ...state }));
    // eslint-disable-next-line
  }, [state]);

  return (
    <>
      <NavBar />
      <div className="App">
        <SearchBar />
        {loading ? (
          <div className="no-products">Loading...</div>
        ) : products.length !== 0 && !error ? (
          <>
            <div className="total-products">
              Products &nbsp;<p>({all_products} Products)</p>
            </div>
            <ProductListFilters />
          </>
        ) : (
          <div className="no-products">No Products to Show</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
