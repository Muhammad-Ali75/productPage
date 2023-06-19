import createDataContext from "./createDataContext";

// context to handle product data
const productReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "add_product":
      return { ...state, products: [action.payload, ...state.products] };

    default: {
      return state;
    }
  }
};

const updateState = (dispatch) => (post) => {
  dispatch({ type: "add_post", payload: post });
};

export const { Provider, Context } = createDataContext(
  productReducer,
  { updateState },
  {
    products: [],
    totalPages: 0,
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
