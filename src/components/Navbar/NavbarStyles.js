import styled from "styled-components";

export const NavbarContainer = styled.header`
// Estilos del contenedor de la barra de navegación 
    height: 80px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export const LinksContainer = styled.div`
/* Estilos del contenedor de los enlaces */
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	font-size: 15px;
	margin-right: 2rem;

	a {
		padding: 1rem 1.5rem;
		font-weight: 700;
	}

	a:first-child {
		background: #4717F6;
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
	@media (max-width: 768px) {
		display: flex;
	}
`;
