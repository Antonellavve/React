import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.header`
  /* Estilos del contenedor de la barra de navegación */
  height: 15vh;
  width:100%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;

` ;

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
height: 5%;
color: #C0C0C0 !important;
&.open{
  display: flex;
}


@media (max-width: 768px) and (min-width: 547px) {
display: ${props => (props.isOpenCustom ? "flex" : "none")};
flex-direction: row;
position: absolute; /* Posición absoluta para que esté debajo del Navbar */
top: 13%; /* Altura del Navbar para que esté debajo de él */
right: 8%; /* Alinear a la derecha del Navbar */
gap: 5%;
border-radius: 10px;
width: 65%;
height: auto;
}
@media (max-width: 546px) and (min-width: 320px){
  display: ${props => (props.isOpenCustom ? "flex" : "none")};
  flex-direction: column;
  gap: 0;
  font-size: 10.5px;
  margin-top: 250px;
  height: auto;
  width: 100%;
  border-radius: 10px;
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
margin-right: 40px;

@media (max-width: 768px) and (min-width: 320px) {
    display: ${props => (props.isOpen ? "none" : "flex")};
}
`;

export const NavLinkStyled = styled(NavLink)`
  &.active{
    text-decoration: underline;
}
`

