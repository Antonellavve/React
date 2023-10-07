import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
  position: absolute;
  top: 15%;
  right: 0;
  z-index: 99;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 420px;
  height: auto;
  padding: 2rem;
  background-color: black;
  border-radius:0 0 50px 50px;
`;

export const TitleStyled = styled.div`
  margin: 0 0 1.5rem 0;
  display: flex;
  justify-content: space-between;
  & h2 {
    margin-top: 0;
    color: #fff;
  };
`;

export const ProductContainer = styled.div`
  height: 95px;

`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  width: 380px;
  border-radius: 1rem;
  padding: 1rem;
  background: #2d2e28;

  & img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export const TextContainerStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleCard = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const PriceCard = styled.div``;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.span`
  border: 0.3px solid #fff;
  width: 100%;
  margin-top: auto;
`;

export const ContainerPrice= styled.div`
display: flex;
flex-direction: column;
gap: 10%;
  & p {
    margin-top: auto;
    margin: 10px;
  }
`;

export const TheSubtotal = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Shipping = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }

  & span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }
`;

export const AnimatePresence = styled.div ``



