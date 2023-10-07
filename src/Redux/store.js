import {combineReducers, configureStore} from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./Categories/categoriesSlice"
import productsReducer from "./Products/productsSlice";
import destacadosReducer from "./Destacados/destacadosSlice";
import cartReducer from "./Cart/cartSlice"
import userReducer from "./user/userSlice"
import ordersReducer from "./orders/ordersSlice"

const reducers = combineReducers ({
    categories : categoriesReducer,
    products: productsReducer,
    destacados: destacadosReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist :[]
}

const persisteReducer = persistReducer(persistConfig, reducers);

export const store = configureStore ({
    reducer: persisteReducer,
    //Agregar middleware para que no se queje de que el estado no es serializable (por el persist)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);