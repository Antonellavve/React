import {createSlice} from "@reduxjs/toolkit"
import { addItem, deleteCartItem, resetTheShipping } from "./cartUtils"
import { THE_SHIPPING } from "../../utils/limitProducts"

const STATE_INITIAL = {
    cartItems: [],
    costShipping: 0,
    hidden: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState: STATE_INITIAL,
    reducers: {
        // para agregar al carrito
        addToCart : (state, action) =>{
            return{
                ...state,
                cartItems: addItem(state.cartItems, action.payload),
                costShipping: THE_SHIPPING 
            }
        },

        // remover productos del carrito 
        removeProductToCart : (state, action) => {
            return{
                ...state,
                cartItems: deleteCartItem (state.cartItems, action.payload),
                costShipping: resetTheShipping(state.cartItems, THE_SHIPPING)
            }
        },
        // limpiar el carrito 
        clearCart : (state) => {
            return {
                ...state,
                cartItems: [],
                costShipping: 0
            }
        },
        // toggle de apertura y cierre del carrito 
        toggleHiddenCart: (state) => {
            return{
                ...state,
                hidden: !state.hidden
            }
        }
    }
})

export default cartSlice.reducer;
export const{
    addToCart,
    clearCart,
    removeProductToCart,
    toggleHiddenCart,
} = cartSlice.actions;
