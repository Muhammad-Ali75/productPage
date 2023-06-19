import createDataContext from "./createDataContext";

// this context handles state for all products.

// Reducer to handle dispatched Actions
const pleReducer = (state, action) => {
  switch (action.type) {
    case "change_page":
      return { ...state, page: action.payload };

    case "sort_by":
      return { ...state, sort_by: action.payload };

    case "keyword":
      return { ...state, keyword: action.payload };

    case "min_price":
      return { ...state, min_price: action.payload, page: 1 };

    case "max_price":
      return { ...state, max_price: action.payload, page: 1 };

    case "moq":
      return { ...state, moq: action.payload, page: 1 };

    case "product_certificate":
      return { ...state, product_certificate: action.payload, page: 1 };

    case "supplier_certificate":
      return { ...state, supplier_certificate: action.payload, page: 1 };

    case "country":
      return { ...state, country: action.payload, page: 1 };

    case "stock_in_usa":
      return { ...state, stock_in_usa: !state.stock_in_usa, page: 1 };

    default: {
      return state;
    }
  }
};
//Action to change State
const pageChange = (dispatch) => (pageNumber) => {
  dispatch({ type: "change_page", payload: pageNumber });
};

const sortByChange = (dispatch) => (sortBy) => {
  dispatch({ type: "sort_by", payload: sortBy });
};

const keywordChange = (dispatch) => (keyword) => {
  dispatch({ type: "keyword", payload: keyword });
};

const minPriceChange = (dispatch) => (price) => {
  dispatch({ type: "min_price", payload: price });
};

const maxPriceChange = (dispatch) => (price) => {
  dispatch({ type: "max_price", payload: price });
};

const moqChange = (dispatch) => (unit) => {
  dispatch({ type: "moq", payload: unit });
};

const productCertificateChange = (dispatch) => (data) => {
  dispatch({ type: "product_certificate", payload: data });
};

const supplierCertificateChange = (dispatch) => (data) => {
  dispatch({ type: "supplier_certificate", payload: data });
};

const countryChange = (dispatch) => (data) => {
  dispatch({ type: "country", payload: data });
};

const stockInUsaChange = (dispatch) => () => {
  dispatch({ type: "stock_in_usa" });
};

//exporting  reducer, actions and initial state.
export const { Provider, Context } = createDataContext(
  pleReducer,
  {
    pageChange,
    sortByChange,
    keywordChange,
    minPriceChange,
    maxPriceChange,
    moqChange,
    productCertificateChange,
    supplierCertificateChange,
    countryChange,
    stockInUsaChange,
  },
  {
    page: 1,
    sort_by: "Relevance",
    keyword: "",
    min_price: 0,
    max_price: 6900,
    moq: "",
    product_certificate: [],
    supplier_certificate: [],
    country: [],
    stock_in_usa: false,
  }
);
