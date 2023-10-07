import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../../Redux/Cart/cartSlice";
import Submit from "../../UI/Submit/Submit";
import { InvisibleScreen } from "../NavbarStyles";
import ModalCartCard from "./ModalCartCard";
import { ContainerPrice, ModalContainer, Divider, ProductsWrapperStyled, TotalPriceContainer, TheSubtotal, TitleStyled, AnimatePresence, Shipping } from "./ModalCartStyles";
import { formatPrice } from "../../../utils/formatPrice";
import Increment from "../../UI/Increment/Increment";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ModalCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, costShipping } = useSelector((state) => state.cart);

  const hiddenCart = useSelector((state) => state.cart.hidden);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      {!hiddenCart && (
        <InvisibleScreen
          onClick={() => dispatch(toggleHiddenCart())}
          isClosed={hiddenCart}
        />
      )}

      <AnimatePresence>
        {!hiddenCart && (
          <ModalContainer
            key="modal-del-carrito"
            initial={{ translateX: 500 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 500 }}
            transition={{ type: "tween", duration: 0.9 }}
          >

            <TitleStyled>
              <h1>Mi Pedido</h1>
              <Increment
                onClick={() => dispatch(clearCart())}
                bgColor="gray"
                disabled={!cartItems.length}
              >
                {/* icono de vaciar carrito */}
                <AiFillCloseCircle />
              </Increment>
            </TitleStyled>

            <ProductsWrapperStyled>
              {cartItems.length ? (
                cartItems.map((item) => {
                  return < ModalCartCard key={item.id} {...item} />;
                })
              ) : (
                <p>No tiene productos en el carrito</p>
              )}
            </ProductsWrapperStyled>

            <ContainerPrice>
              <TheSubtotal>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </TheSubtotal>

              <Shipping>
                <p>Envio</p>
                <span>{formatPrice(costShipping)}</span>
              </Shipping>

              <Divider />

              <TotalPriceContainer>
                <p>Total:</p>
                <span>{formatPrice(totalPrice + costShipping)}</span>
              </TotalPriceContainer>

              <Submit
                onClick={async () => {
                  setIsSubmitting(true); // Iniciar el envío
                  // Aquí puedes realizar cualquier lógica adicional antes de finalizar la compra
                  navigate("/checkout");
                  dispatch(toggleHiddenCart());

                  setIsSubmitting(false); // Finalizar el envío
                }}
                disabled={!cartItems.length || isSubmitting}
              >
                {isSubmitting ? <Loader /> : "Finalizar compra"}
              </Submit>
            </ContainerPrice>
          </ModalContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
