import createDataContext from "./createDataContext";
import axios from "axios";

// context to handle product data
const productReducer = (state, action) => {
  switch (action.type) {
    case "get_data":
      return {
        ...state,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
        all_products: action.payload.all_products,
      };

    default: {
      return state;
    }
  }
};

const getData = (dispatch) => async (params) => {
  try {
    const { data, status } = await axios.get(
      "http://localhost:5000/api/getAllProducts",
      {
        params,
      }
    );
    if (status === 200) {
      const product_data = {
        products: data.products,
        totalPages: Math.floor(data.all_products / data.limit),
        all_products: data.all_products,
      };
      dispatch({ type: "get_data", payload: product_data });
    }

    console.log("RESPONSE:::", JSON.stringify(data, null, 2));
  } catch (e) {
    console.warn(e);
  }
};

export const { Provider, Context } = createDataContext(
  productReducer,
  { getData },
  {
    products: [],
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
        "United States",
        "Vietnam",
      ],
    },
  }
);
