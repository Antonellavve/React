import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    selectedCategory: "",
    isLoading: false,
    error: null,
    };

    export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        fetchingCategories: (state) => {
        state.isLoading = true;
        state.error = null;
        },
        successFetchingCategories: (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        },
        errorFetchingCategories: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        },
        selectCategory: (state, action) => {
        state.selectedCategory =
            action.payload !== state.selectedCategory ? action.payload : null;
        },
    },
    });

    export const {
    fetchingCategories,
    successFetchingCategories,
    errorFetchingCategories,
    selectCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
