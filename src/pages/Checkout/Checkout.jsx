import React from 'react';
import { useSelector } from "react-redux";
import { ContainerCheckout } from "./CheckoutStyles";
import FormOfCheckout from "../../components/CheckoutComponent/FormCheckout/CheckoutForm"
import ProductsCheckout from '../../components/CheckoutComponent/Products/ProductsCheckout';

const Checkout = () => {
    const { cartItems, costShipping } = useSelector((state) => state.cart);

    const price = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
    }, 0);

    return (
        <div>
        <ContainerCheckout>
            <ProductsCheckout
                cartItems = {cartItems}
                shippingCost = {costShipping}
                price = {price}/>
                
            <FormOfCheckout
                cartItems = {cartItems}
                shippingCost = {costShipping}
                price = {price}/>

        </ContainerCheckout>
        </div>
    );
};

export default Checkout;
