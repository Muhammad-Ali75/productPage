import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ProductProvider } from "./context/ProductContext.js";
import { Provider as PleProvider } from "./context/ProductListEnhancement.js";
import "./styles/index.css";
import App from "./App";

// import { Context as UserContext } from "../Context/UserContext";
// const { addPost, addProduct } = useContext(UserContext);const { state } = useContext(UserContext);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <PleProvider>
        <App />
      </PleProvider>
    </ProductProvider>
  </React.StrictMode>
);
