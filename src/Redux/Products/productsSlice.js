import { createSlice } from "@reduxjs/toolkit";
import { totalProducts, Products } from "../../data/products";

const INITIAL_STATE = {
    products: Products, 
    totalProducts: totalProducts
};

export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state) => {
            return state;
        },
    },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;