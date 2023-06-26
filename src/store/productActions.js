import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateQuery, generateSort } from "../utils/functions";

export const getData = createAsyncThunk(
  "product/getAll",
  async (
    {
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
    },
    { rejectWithValue }
  ) => {
    try {
      const { data, status } = await axios.get(process.env.REACT_APP_API_URL, {
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
        return product_data;
      }
    } catch (e) {
      console.warn(e);
      return rejectWithValue(e.message);
    }
  }
);
