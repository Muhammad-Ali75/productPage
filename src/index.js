import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Provider as PleProvider } from "./context/ProductListEnhancement.js";
// import { Provider as ProductProvider } from "./context/ProductContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PleProvider>
        <App />
      </PleProvider>
    </Provider>
  </React.StrictMode>
);
