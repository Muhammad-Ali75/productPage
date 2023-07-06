import axios from "axios";

const ProductApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default ProductApi;
