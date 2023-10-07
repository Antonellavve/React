import React from "react";
import { useDispatch } from "react-redux";
import { removeProductToCart, addToCart } from "../../../Redux/Cart/cartSlice";
import { PriceCard, TitleCard, ProductContainerStyled, QuantityContainerStyled, TextContainerStyled } from "./ModalCartStyles";
import { AiFillMinusCircle } from "react-icons/ai";
import {AiFillPlusCircle} from "react-icons/ai";
import {AiFillCloseCircle} from "react-icons/ai"
import { formatPrice } from "../../../utils/formatPrice";
import Increment from "../../UI/Increment/Increment";
import Counter from "../../UI/Counter/Counter"

const ModalCartCard = ({ img, title, price, quantity, id}) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <TitleCard>{title}</TitleCard>
        <PriceCard>{formatPrice(price)}</PriceCard>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increment bgColor="gray" onClick={() => dispatch(removeProductToCart(id))}>
          {
            quantity === 1 ? <AiFillCloseCircle /> : <AiFillMinusCircle/>
          }
          
        </Increment>

        <Counter>{quantity}</Counter>

        <Increment bgColor="gray" onClick={() => dispatch(addToCart({img, title, price, quantity, id}))}>
          <AiFillPlusCircle/>
        </Increment>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;