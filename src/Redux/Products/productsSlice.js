import { createSlice } from "@reduxjs/toolkit";
// import { totalProducts, Products } from "../../data/products";

const INITIAL_STATE = {
    products: [], 
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
        : products.sort((a, b) => b.price - a.price)
      break;
    default:
      break;
  }
  return products;
}

const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
      getProducts: state => {
        return state.products;
      },
      orderProducts: ((state, action) => {
          const { products } = state;
          return {
            ...state,
            products: productsSort([...products], ...action.payload)
          }
      }),
      fetchingProducts: ((state) => {
      return {
          ...state,
          isLoading: true,
          }
      }),
      successFetchingProducts: ((state, action) => {
      return {
          ...state,
          isLoading: false,
          error: false,
          products: [...action.payload],
          }
      }),
      errorFetchingProducts: ((state, action) => {
      return {
          ...state,
          isLoading: false,
          error: action.payload
          }
      })
}
});
    
export const { getProducts, orderProducts, fetchingProducts, successFetchingProducts, errorFetchingProducts } = productsSlice.actions;
export default productsSlice.reducer;
