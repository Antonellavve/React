// NavbarStyles.js
import styled from "styled-components";

export const NavbarContainer = styled.header`
  /* Estilos del contenedor de la barra de navegación */
  height: 80px;
  width: auto;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 768px) {
    width: auto;
  }
  @media (max-width: 320px) {
    width: auto;
  }
`;

export const MenuContainer = styled.div`
  /* Estilos del contenedor del menú */
display: flex;
align-items: center;
`;

export const LinksContainer = styled.div`
/* Estilos del contenedor de los enlaces */
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
font-size: 15px;
background-color: #000000;
color: #c0c0c0;
padding: 1rem;
z-index: 1; /* Asegurarse de que esté por encima del contenido */

@media (max-width: 768px){
display: ${props => (props.isOpenCustom ? "flex" : "none")};
flex-direction: row;
position: absolute; /* Posición absoluta para que esté debajo del Navbar */
top: 100px; /* Altura del Navbar para que esté debajo de él */
right: 0; /* Alinear a la derecha del Navbar */
width: auto;
gap: 50px;
border-radius: 10px;
}
@media (max-width: 320px){
  flex-direction: row;
  right: 0;
  gap: 0;
  font-size: 10.5px;
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

@media (max-width: 768px) {
    display: ${props => (props.isOpen ? "none" : "flex")};
}
`;

