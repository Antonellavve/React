import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: null,
  totalProducts: 0,
  orderBy: "price",
  ascendent: false,
  isLoading: true,
  error: false
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
    successFetchingProducts: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.products = [...action.payload];
    },
    errorFetchingProducts: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  }
});

// Exportando las acciones, incluyendo la nueva
export const {
  addNewProduct,
  createProducts,
  getProducts,
  orderProducts,
  fetchingProducts,
  successFetchingProducts,
  errorFetchingProducts,
  setProducts
} = productsSlice.actions;

export default productsSlice.reducer;

