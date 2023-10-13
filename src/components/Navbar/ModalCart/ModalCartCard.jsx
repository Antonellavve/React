import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProductToCart, addToCart } from "../../../Redux/Cart/cartSlice";
import { PriceCard, TitleCard, ProductContainerStyled, ContainerOfQuantity, TextContainer} from "./ModalCartStyles";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { formatPrice } from "../../../utils/formatPrice";
import Counter from "../../UI/Counter/Counter";
import Submit from "../../UI/Submit/Submit";  // Importa el componente Submit para el modal de confirmación

const ModalCartCard = ({ img, title, price, quantity, id }) => {
  const dispatch = useDispatch();
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);

  const handleIncrement = (isAdd) => {
    if (isAdd) {
      dispatch(addToCart({ img, title, price, quantity, id }));
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
    dispatch(removeProductToCart(id));
    setIsClearCartModalOpen(false);  // Cierra el modal después de eliminar el producto
  };

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainer>
        <TitleCard>{title}</TitleCard>
        <PriceCard>{formatPrice(price)}</PriceCard>
      </TextContainer>
      <ContainerOfQuantity>
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
      </ContainerOfQuantity>

      {/* Modal de confirmación para vaciar el carrito */}
      {isClearCartModalOpen && (
        <div className="modal">
          <h2>¿Estás seguro de que deseas eliminar el producto?</h2>
          <Submit onClick={handleClearCart}>Eliminar Producto</Submit>
          <Submit onClick={() => setIsClearCartModalOpen(false)}>Cancelar</Submit>
        </div>
      )}
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
