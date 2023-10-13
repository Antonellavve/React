import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeProductToCart, clearCart } from "../../Redux/Cart/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { AiFillMinusCircle, AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import Counter from "../UI/Counter/Counter";
import Submit from "../UI/Submit/Submit";  // Importa el componente Submit para el modal de confirmación

import {
    CardContainer,
    CardInfoStyled,
    ProductTitleStyled,
    QuantityContainer,
    TotalPrice,
} from "./CardProductCheckStyles";

const CardProductCheckout = ({ img, title, desc, price, quantity, id }) => {
    const dispatch = useDispatch();
    const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);

    const handleIncrement = (isAdd) => {
        if (isAdd) {
            dispatch(addToCart({ img, title, desc, price, quantity, id }));
        } else {
            if (quantity === 1) {
                // Abre el modal de confirmación si la cantidad es 1
                setIsClearCartModalOpen(true);
            } else {
                dispatch(removeProductToCart(id));
            }
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());  // Limpia todo el carrito
        setIsClearCartModalOpen(false);  // Cierra el modal después de vaciar el carrito
    };

    return (
        <CardContainer>
            <img src={img} alt={title} />
            <CardInfoStyled>
                <ProductTitleStyled>{title}</ProductTitleStyled>
                <TotalPrice>{formatPrice(price)}</TotalPrice>
            </CardInfoStyled>
            <QuantityContainer>
                <button
                    onClick={() => handleIncrement(false)}
                    disabled={quantity === 0}
                >
                {quantity === 1 ? (
                    <AiFillCloseCircle onClick={handleClearCart} />
                ) : (
                    <AiFillMinusCircle />
                )}
                </button>
                <Counter>{quantity}</Counter>
                <button onClick={() => handleIncrement(true)}>
                    <AiFillPlusCircle />
                </button>
            </QuantityContainer>

            {/* Modal de confirmación para vaciar el carrito */}
            {isClearCartModalOpen && (
                <div className="modal">
                    <h2>¿Estás seguro de que deseas vaciar tu carrito?</h2>
                    <Submit onClick={handleClearCart}>Vaciar Carrito</Submit>
                    <Submit onClick={() => setIsClearCartModalOpen(false)}>Cancelar</Submit>
                </div>
            )}
        </CardContainer>
    );
};

export default CardProductCheckout;
