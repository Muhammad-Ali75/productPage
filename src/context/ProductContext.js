import { generateQuery, generateSort } from "../utils/functions";
import createDataContext from "./createDataContext";
import axios from "axios";

const apiURL = process.env.API_URL;
// context to handle product data
const productReducer = (state, action) => {
  switch (action.type) {
    case "get_data":
      return {
        ...state,
        error: null,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
        all_products: action.payload.all_products,
      };
    case "add_cart":
      return { ...state, cart: action.payload };
    case "error":
      return { ...state, error: action.payload };

    default: {
      return state;
    }
  }
};

const addCart = (dispatch) => (value) => {
  dispatch({ type: "add_cart", payload: value });
};

const getData =
  (dispatch) =>
  async ({
    page,
    sort_by,
    keyword,
    min_price,
    max_price,
    moq,
    product_certificate,
    supplier_certificate,
    country,
    stock_in_usa,
  }) => {
    try {
      // "http://localhost:5000/api/getAllProducts", localHost
      const { data, status } = await axios.get(apiURL, {
        params: {
          limit: 6,
          page,
          keyword,
          sort: generateSort(sort_by),
          query: generateQuery({
            min_price,
            max_price,
            moq,
            product_certificate,
            supplier_certificate,
            country,
            stock_in_usa,
          }),
        },
      });
      if (status === 200) {
        const product_data = {
          products: data.docs,
          totalPages: data.totalPages,
          all_products: data.totalDocs,
        };
        dispatch({ type: "get_data", payload: product_data });
      }

      // console.log("RESPONSE:::", JSON.stringify(data, null, 2));
    } catch (e) {
      console.warn(e);
      dispatch({ type: "error", payload: e.message });
    }
  };

export const { Provider, Context } = createDataContext(
  productReducer,
  { getData, addCart },
  {
    products: [],
    error: null,
    cart: 0,
    totalPages: 0,
    all_products: 0,
    filters: {
      productCertification: [
        "ASTM",
        "CE",
        "Certificate of Compliance",
        "Certificate of Conformity",
        "EN",
        "EPA",
        "FCC",
        "FDA",
        "GB",
        "Green Clean Certificate",
        "Interek",
        "ISO 11439:2000",
        "ISO 11439:2013",
        "ROHS",
        "SGS",
      ],
      supplierCertification: [
        "DUNS",
        "DRS",
        "GMP",
        "ISO 13485",
        "ISO 9001",
        "ISO 9001:2015",
      ],
      manufacturerLocation: [
        "Australia",
        "Canada",
        "China",
        "Hong Kong S.A.R",
        "India",
        "Korea, Republic of",
        "United Kingdom",
        "USA",
        "Vietnam",
      ],
    },
  }
);
