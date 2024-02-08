import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHiddenCart, clearCart } from "../../../Redux/Cart/cartSlice";
import Submit from "../../UI/Submit/Submit";
import { EfectOfCart} from "../NavbarStyles";
import ModalCartCard from "./ModalCartCard";
import { ContainerPrice, ModalContainer, Divider, ProductsWrapperStyled, TotalPriceContainer, TheSubtotal, TitleStyled, Shipping } from "./ModalCartStyles";
import { formatPrice } from "../../../utils/formatPrice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ReactModal from 'react-modal'; 

const ModalCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, costShipping } = useSelector((state) => state.cart);
  const hiddenCart = useSelector((state) => state.cart.hidden);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  // Función para abrir el modal de confirmación
  const openClearCartModal = () => {
    setIsClearCartModalOpen(true);
  };

  // Función para cerrar el modal de confirmación
  const closeClearCartModal = () => {
    setIsClearCartModalOpen(false);
  };

  // Función para vaciar el carrito
  const handleClearCart = () => {
    dispatch(clearCart());
    closeClearCartModal();
  };
  
  const currentUser = useSelector((state) => state.user.currentUser);

  const isUserLoggedIn = !!currentUser;

  return (
    <>
      {!hiddenCart && (
        <EfectOfCart
          onClick={() => dispatch(toggleHiddenCart())}
          isClosed={hiddenCart}
        />
      )}

      {!hiddenCart && (
        <ModalContainer key="modal-del-carrito">
          <TitleStyled>
            <h1>Mi Pedido</h1>
            <button
              onClick={openClearCartModal}
              disabled={!cartItems.length}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                background: "gray",
                border: "none",
                borderRadius: "15px",
                fontSize: "1.1rem",
                fontWeight: "800",
                color: "#ffff",
                cursor: "pointer"
              }}
            >
              {/* icono de vaciar carrito */}
              <AiFillCloseCircle />
            </button>
          </TitleStyled>

          <ProductsWrapperStyled>
            {cartItems.length ? (
              cartItems.map((item) => {
                return <ModalCartCard key={item.id} {...item} />;
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
            {isUserLoggedIn ? null : (
              <p style={{ color: "gray", fontSize: "14px", textAlign: "center" }}>
                Inicia sesión para acceder a beneficios y descuentos exclusivos para miembros.
              </p>
            )}
            <Submit
              onClick={async () => {
                setIsSubmitting(true); // Iniciar el envío
                navigate("/login");
                dispatch(toggleHiddenCart());
              }}
              disabled={!cartItems.length}
            >
              {isUserLoggedIn ? "Ver Cuenta" : "Inicia Sesión"}
            </Submit>

            <Submit
              onClick={async () => {
                setIsSubmitting(true); // Iniciar el envío
                navigate("/checkout");
                dispatch(toggleHiddenCart());
              }}
              disabled={!cartItems.length}
            >
              Ver Carrito
            </Submit>
          </ContainerPrice>
        </ModalContainer>
      )}

      {/* Modal de confirmación para vaciar el carrito */}
      <ReactModal
        isOpen={isClearCartModalOpen}
        onRequestClose={closeClearCartModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.803)',
            zIndex: 1000,
          },
          content: {
            width: '50%',
            height: '28%',
            margin: 'auto',
            zIndex: 1001,
            borderRadius: '10px',
            color: 'black',
            textAlign: 'center',
          },
        }}
        contentLabel="Confirmar Vaciar Carrito"
        ariaHideApp={false} // Deshabilitar el enfoque en el fondo
      >
        <h2>¿Estás seguro de que deseas vaciar tu carrito?</h2>
        <Submit onClick={closeClearCartModal}>Cancelar</Submit>
        <Submit onClick={handleClearCart}>Vaciar Carrito</Submit>
      </ReactModal>
    </>
  );
};

export default ModalCart;