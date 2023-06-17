import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      {/* <div className="App">
        <SearchBar />
        <ProductListFilters />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
