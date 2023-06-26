import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./productActions";

const initialState = {
  products: [],
  loading: false,
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
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state) => {
      state.cart = state.cart + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.products;
        state.totalPages = payload.totalPages;
        state.all_products = payload.all_products;
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export const addCart = productSlice.actions.addCart;

export default productSlice.reducer;
