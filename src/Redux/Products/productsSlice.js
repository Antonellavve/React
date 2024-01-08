import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: null,
  totalProducts: 0,
  orderBy: "price",
  ascendent: false,
  isLoading: true,
  error: false
};

export const productsSort = (products, orderBy, ascendent) => {
  switch (orderBy) {
    case "price":
      ascendent
        ? products.sort((a, b) => a.price - b.price)
        : products.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  return products;
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    createProducts: (state) => {
      return state.products;
    },
    getProducts: (state) => {
      return state.products;
    },
    orderProducts: (state, action) => {
      state.products = productsSort([...state.products], ...action.payload);
    },
    fetchingProducts: (state) => {
      state.isLoading = true;
    },
    successFetchingProducts: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.products = [...action.payload];
    },
    errorFetchingProducts: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const {
  createProducts,
  getProducts,
  orderProducts,
  fetchingProducts,
  successFetchingProducts,
  errorFetchingProducts
} = productsSlice.actions;

export default productsSlice.reducer;
