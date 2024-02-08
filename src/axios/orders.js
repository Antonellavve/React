import axios from "axios";
import { 
    createOrderFail, 
    fetchOrdersFail, 
    fetchOrdersStart, 
    fetchOrdersSuccess 
} from "../Redux/Orders/ordersSlice";

import { BASE_URL } from "../utils/limitProducts";

export const getOrders = async (dispatch, currentUser) => {
    dispatch(fetchOrdersStart());

    try {
        const orders = await axios.get(`${BASE_URL}/orders`, {
            headers: {
                'x-token': currentUser.token
            }
        });

        console.log(orders);

        if (orders) {
            dispatch(fetchOrdersSuccess(orders.data));
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail("Algo salió mal"));
    }
};



export const createOrder = async (order, dispatch, currentUser) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`, order, {
            headers: {
            'x-token': currentUser.token
            }
        });
    
        if (response) {
            await getOrders(dispatch, currentUser);
        }
        } catch (error) {
        console.error("Error al crear la orden:", error);
        dispatch(createOrderFail());
        }
    };