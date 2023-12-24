import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../Redux/Cart/cartSlice";
import Input from "../../UI/Input/Input";
import { createOrder } from "../../../axios/orders";
import { checkoutValues } from "../../../formik/Values";
import { checkoutValidation } from "../../../formik/Validation";
import Submit from "../../UI/Submit/Submit";

import {
    CheckoutDatosStyled,
    StyledForm,
    StyledFormik,
    } from "./CheckoutFormStyles";

    const FormOfCheckout = ({ cartItems, shippingCost, price }) => {
        const dispatch = useDispatch();
        const {currentUser} = useSelector((state) => state.user);
        const navigate = useNavigate();

    return (
        <CheckoutDatosStyled>
        <h2>Ingresá tus datos</h2>
        <StyledFormik
            initialValues={checkoutValues}
            validationSchema={checkoutValidation}
            onSubmit={async (values, { setSubmitting }) => {
            const orderData = {
                items: cartItems,
                price,
                shippingCost,
                total: price + shippingCost,
                shippingDetails: { ...values },
            };
            try {
                await createOrder(orderData, dispatch, currentUser);
                navigate("/pedidoRealizado");
                dispatch(clearCart());
            } catch (error) {
                alert("Error al crear la orden");
            } finally {
                setSubmitting(false);
            }
            }}
        >
            {({ isSubmitting }) => (
            <StyledForm>
                <Input
                name="name"
                htmlFor="nombre"
                type="text"
                id="nombre"
                placeholder="Escribe tu nombre completo"
                >
                Nombre
                </Input>
                <Input
                name="cellphone"
                htmlFor="celular"
                type="text"
                id="celular"
                placeholder="Escribe tu celular"
                >
                Celular
                </Input>
                <Input
                name="location"
                htmlFor="localidad"
                type="text"
                id="localidad"
                placeholder="Escribe tu localidad"
                >
                Localidad
                </Input>
                <Input
                name="address"
                htmlFor="direccion"
                type="text"
                id="dirección"
                placeholder="Escribe tu dirección"
                >
                Dirección
                </Input>
                <br />
                <br />
                
                <div>

                <Submit
                disabled={!cartItems.length} // Elimina la condición isSubmitting
                >
                Iniciar Pedido
                </Submit>

                </div>
            </StyledForm>
            )}
        </StyledFormik>
        </CheckoutDatosStyled>
    );
};

export default FormOfCheckout;
