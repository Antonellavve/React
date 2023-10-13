import { createSlice } from "@reduxjs/toolkit";
import {getProducts} from "../../utils/destacadosProducts"

const INITIAL_STATE ={
    destacados : getProducts (4)
}

export const destacadosSlice = createSlice({
    name: "destacados",
    initialState: INITIAL_STATE,
    reducers: {
        desctacadosAkika : (state =>{
            return state
        })
    }
})

export const {desctacadosAkika} = destacadosSlice.actions;
export default destacadosSlice.reducer