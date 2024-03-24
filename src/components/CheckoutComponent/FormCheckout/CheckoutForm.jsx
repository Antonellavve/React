import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../Redux/Cart/cartSlice";
import Input from "../../UI/Input/Input";
import { createOrder } from "../../../axios/orders";
import { checkoutValues } from "../../../formik/Values";
import { checkoutValidation } from "../../../formik/Validation";
import Submit from "../../UI/Submit/Submit";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import {
    CheckoutDatosStyled,
    StyledForm,
    StyledFormik,
    IconCash,
    Check1,
    Check2,
} from "./CheckoutFormStyles";
import Loader from "../../UI/Loader/Loader";


const FormOfCheckout = ({ cartItems, shippingCost, price }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    return (
        <CheckoutDatosStyled>
            <h1>Ingresá tus datos</h1>
            <StyledFormik
                initialValues={checkoutValues}
                validationSchema={checkoutValidation}
                onSubmit={async (values) => {
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
                    } 
                }}
            >
                {({ isSubmitting }) => (
            <StyledForm>
            <Check1>
                <h2>1- Información del Cliente</h2>
                <br/>
                    <Input name="name" htmlFor="nombre" type="text" id="nombre" placeholder="Escribe tu nombre completo">
                        Nombre</Input>
                    <Input name="cellphone" htmlFor="celular" type="text" id="celular" placeholder="Escribe tu celular">
                        Celular</Input>
                    <Input name="location" htmlFor="localidad" type="text" id="localidad" placeholder="Escribe tu localidad">
                        Localidad</Input>
                    <Input name="address" htmlFor="direccion" type="text" id="dirección" placeholder="Escribe tu dirección">
                        Dirección</Input>
            </Check1>
            
            <Check2>
                <h2>2- Método de Pago</h2>
                    <IconCash>
                        <FaCcVisa style={{ fontSize: '30px', marginRight: '8px' }} />
                        <FaCcMastercard style={{ fontSize: '30px', marginRight: '8px' }}  />
                        <FaCcAmex style={{ fontSize: '30px', marginRight: '8px' }} />
                        <SiMercadopago style={{ fontSize: '30px', marginRight: '8px' }} />
                    </IconCash>
                    
                    <Input name="number_cash" type="number" required>
                        Número de tarjeta*</Input>
                    <Input name="date" type="text" pattern="(0[1-9]|1[0-2])\/[0-9]{4}" placeholder="MM/YYYY" required>
                        Vencimiento*</Input>
                    <Input name="name_cash" type="text" required>
                        Titular de la tarjeta*</Input>
                    <Input name="code" type="code" required>
                        CVV*</Input>
            </Check2>
        

        <div>
            <Submit disabled={!cartItems.length}>
                {isSubmitting ? <Loader /> : "Iniciar Pedido"}        
            </Submit>
        </div>
        </StyledForm>
        )
    }
    </StyledFormik>
</CheckoutDatosStyled>
);
};

export default FormOfCheckout;
