import { useEffect, useContext } from "react";
import { Context as PleContext } from "./context/ProductListEnhancement";

import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";
import Footer from "./components/Footer/Footer";

function App() {
  const { state } = useContext(PleContext);

  useEffect(() => {
    console.log("App STATE:::", JSON.stringify(state, null, 2));
  }, [state]);

  return (
    <>
      <NavBar />
      <div className="App">
        <SearchBar />
        <ProductListFilters />
      </div>
      <Footer />
    </>
  );
}

export default App;
