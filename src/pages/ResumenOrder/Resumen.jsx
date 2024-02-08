import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../utils/formatPrice'

import CardResumen from '../../components/Resumen/CardResumen';
// import Link from '../../components/UI/Link/Link';

import {
    CostoEnvioStyled,
    CostoProductoStyled,
    CostoTotalStyled,
    HrStyled,
    ProductsContainerStyled,
    ResumenContainerInfoStyled,
    ResumenContainerStyled,
    ResumenTitleStyled,
} from './ResumenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/orders';
import { useParams } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';

const Resumen = () => {

const dispatch = useDispatch()
const {orderId} = useParams();

const [visitedOrder, setVisitedOrder] = useState(null);

const orders = useSelector(state => state.orders.orders)
const {currentUser} = useSelector(state => state.user)

useEffect(() => {
if(!orders) {
    getOrders(dispatch, currentUser)
}
setVisitedOrder(orders?.find(order => order._id === orderId))
}, [orderId, currentUser, orders, dispatch])

    return (
        <ResumenContainerStyled>
            <ResumenTitleStyled>
                <h1>Resumen Orden: #{visitedOrder?._id.slice(0,7)}</h1>

            </ResumenTitleStyled>
            <h2>Productos:</h2>
            <ProductsContainerStyled>
                {
                visitedOrder?.items.map((item) => {
                    return <CardResumen {...item} key={item._id} />
                })
                }
            </ProductsContainerStyled>
            <HrStyled />
            <ResumenContainerInfoStyled>
                <h3>Costos:</h3>
                <CostoProductoStyled>
                    <p>Costo de productos</p>
                    <span>{formatPrice(visitedOrder?.price)}</span>
                </CostoProductoStyled>
                <CostoEnvioStyled>
                    <p>Costo de envío</p>
                    <span>{formatPrice(visitedOrder?.shippingCost)}</span>
                </CostoEnvioStyled>
                <CostoTotalStyled>
                    <p>Total</p>
                    <span>{formatPrice(visitedOrder?.total)}</span>
                </CostoTotalStyled>
            </ResumenContainerInfoStyled>
        </ResumenContainerStyled>
    );
};

export default Resumen;