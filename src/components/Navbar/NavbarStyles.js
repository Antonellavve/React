import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavbarContainer = styled.header`
  /* Estilos del contenedor de la barra de navegación */
  height: 17vh;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1000;
` ;

export const ContainerNavbar = styled.div`
  display: flex;
  margin: 3%;
  gap: 15px;
`

export const LinksContainer = styled.div`
/* Estilos del contenedor de los enlaces */
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
text-align: center;
font-size: 15px;
padding: 0.5rem;
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

@media (max-width: 768px) and (min-width: 320px) {
display: ${props => (props.isOpenCustom ? "flex" : "none")};
position: fixed; 
margin-top: 5rem; /* Altura del Navbar para que esté debajo de él */
gap: 5%;
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

@media (max-width: 768px){
    display: flex;
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
    cursor: pointer;
    gap: 1.5rem ;
`;

export const CartContainer = styled.div`
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

export const UserContainer = styled.div``;

export const EfectOfCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40; 
  backdrop-filter: blur(6px); /* efecto de desenfoque */
  display: ${props => (props.isClosed ? 'none' : 'block')};
`;