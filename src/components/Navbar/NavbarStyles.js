import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import {motion} from "framer-motion"

export const NavbarContainer = styled.header`
  /* Estilos del contenedor de la barra de navegación */
  height: 15vh;
  width:100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
` ;

export const ContainerNavbar = styled.div`
  display: flex;
  margin: 3%;
`

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainer = styled.div`
/* Estilos del contenedor de los enlaces */
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
font-size: 15px;
padding: 1.5rem;
z-index: 1; /* Asegurarse de que esté por encima del contenido */
background-color: black;
color: #C0C0C0 !important;
width: 80%;
right: 5%;
border-radius: 0 0 50px 50px ;

&.open{
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) and (min-width: 547px) {
display: ${props => (props.isOpenCustom ? "flex" : "none")};
position: absolute; /* Posición absoluta para que esté debajo del Navbar */
top: 13%; /* Altura del Navbar para que esté debajo de él */
gap: 5%;
}
@media (max-width: 546px) and (min-width: 320px){
  display: ${props => (props.isOpenCustom ? "flex" : "none")};
  gap: 0;
  font-size: 10.5px;
  margin-top: 250px;
}

a {
    padding: 1rem 1.5rem;
    font-weight: 700;
    color: #C0C0C0;
}

a:first-child {
    background: #bfff00;
    color: black;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
`;

export const MenuStyled = styled.div`
/* Estilos del ícono del menú hamburguesa */
display: none;
font-size: 2rem;
cursor: pointer;
margin: 10px;

@media (max-width: 768px) and (min-width: 320px) {
    display: ${props => (props.isOpen ? "none" : "flex")};
}
`;

export const NavLinkStyled = styled(NavLink)`
  &.active{
    text-decoration: underline;
}
`

export const CartAndUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    gap: 10px;
`;


export const CartContainer = styled.div`
cursor: pointer;

span{
  position: absolute;
  text-align: center;
  height: 16px;
  width: 16px;

  border-radius: 1rem;
  border: 1px solid white;
  color: white;
  background-color: red;
  font-size: 0.8rem;
}`;

export const InvisibleScreen = styled.div`
    z-index: 40;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(420px - 100vh);

    ${({ isClosed }) =>
    !isClosed &&
    css`
      background-color: none;
    `}
`;