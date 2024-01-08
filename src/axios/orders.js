import axios from "axios"
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../Redux/Orders/ordersSlice";

import {BASE_URL} from "../utils/limitProducts"

export const getOrders = async (dispatch, currentUser) => {

    dispatch(fetchOrdersStart())

    console.log(currentUser.token);

    try {
        const orders = await axios.get(`${BASE_URL}orders`, {
            headers: {
                'x-token': currentUser.token
            }
        })
        if (orders) {
            dispatch(fetchOrdersSuccess(orders.data.data))
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail("Algo salio mal"))
    }
}

export const createOrder = async (order, dispatch, currentUser) => {
    try {

        const response = await axios.post(`${BASE_URL}/orders`, order, {
            headers: {
                'x-token': currentUser.token
            }
        });

        if(response) {
            getOrders(dispatch, currentUser)
        }
        
    } catch (error) {
        dispatch(createOrderFail())
    }
}