import "./styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductListFilters from "./components/ProductListFilters/ProductListFilters";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <SearchBar />
        <ProductListFilters />
      </div>
    </>
  );
}

export default App;
