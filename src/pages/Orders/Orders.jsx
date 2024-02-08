import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"; 

import MisOrders from "../../components/Orders/MisOrders";
import Button from "../../components/UI/Button/Button";

import { OrdenesContainerStyled, OrdenesTitle, BtnOrdenes, MisOrdenesPatternStyled } from "./OrdersStyles";
import { useEffect } from "react";
import { getOrders } from "../../axios/orders";
import { clearError, fetchOrdersFail, fetchOrdersStart} from "../../Redux/Orders/ordersSlice";

const MisOrdenes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user.currentUser)
    const {orders, error} = useSelector(state => state.orders);

    useEffect(() => {
        if(!orders) {
        getOrders(dispatch, currentUser)
        }

        if (!currentUser?.token) {
        dispatch(fetchOrdersFail())
        } else {
        error && dispatch(clearError())
        }
    }, [currentUser, orders, error, dispatch])

    return (
        <>
            <OrdenesContainerStyled>
                <OrdenesTitle>Mis órdenes</OrdenesTitle>
                <br />
                <MisOrders />
                <BtnOrdenes>
                    <Button onClick={() => navigate("/")}>Volver a comprar</Button>
                </BtnOrdenes>
            </OrdenesContainerStyled>
            <MisOrdenesPatternStyled />
        </>
    );
};

export default MisOrdenes;
