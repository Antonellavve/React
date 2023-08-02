import styled from "styled-components";

export const CategoriesContainer = styled.div`
display: flex;
justify-content: center;
gap: 10px;
margin:0, 1.5rem;
width: auto;
@media (max-width: 768px) {
	flex-direction: column;
}
`;

export const CardCategory = styled(CategoriesContainer)`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 10px;
`;

export const StyledCategoriesContainer1 = styled(CategoriesContainer)`
  /* Estilos para el primer contenedor */
    img {
	width: 600px;
	border-radius: 10px;
	@media (max-width: 768px) {
		width: 450px;
	}
	@media (max-width: 320px) {
		width: 300px;
	}
    }
`;

export const StyledCategoriesContainer2 = styled(CategoriesContainer)`
    img {
	width: 450px;
	border-radius:10px;
	@media (max-width: 320px) {
		width: 300px;
	}
	}
`;