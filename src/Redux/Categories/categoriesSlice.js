import { createSlice } from "@reduxjs/toolkit";
import {categories} from "../../data/categories"

const STATE_INITIAL = {
    categories: categories,
    selectedCategory: null,
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: STATE_INITIAL,
    reducers: {
        selectCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            }
        }
    }
})

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
