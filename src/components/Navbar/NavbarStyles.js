// NavbarStyles.js
import styled from "styled-components";

export const NavbarContainer = styled.header`
  /* Estilos del contenedor de la barra de navegación */
  height: 80px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  /* Estilos del contenedor del menú */
display: flex;
align-items: center;
`;

export const LinksContainer = styled.div`
/* Estilos del contenedor de los enlaces */
position: absolute; /* Posición absoluta para que esté debajo del Navbar */
top: 80px; /* Altura del Navbar para que esté debajo de él */
right: 0; /* Alinear a la derecha del Navbar */
display: ${props => (props.isOpen ? "flex" : "none")};
flex-direction: column; /* Alineación vertical de los enlaces */
gap: 10px;
font-size: 15px;
background-color: #000000;
padding: 1rem;
z-index: 1; /* Asegurarse de que esté por encima del contenido */

a {
    padding: 1rem 1.5rem;
    font-weight: 700;
    color: #ffffff;
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
margin-right: 2rem;
display: ${props => (props.isOpen ? "none" : "flex")};
@media (max-width: 768px) {
    display: flex;
}
`;

