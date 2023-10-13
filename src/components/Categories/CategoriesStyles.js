import styled from "styled-components";

export const CategoriesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 0 auto;
width: 60%;

@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const CardCategory = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 10px;
border: 2rem;
`;

export const StyledCategoriesContainer1 = styled(CategoriesContainer)`
  /* Estilos para el primer contenedor */
    img {
	width: 30rem;
	border-radius: 10px;
    }
`;

export const StyledCategoriesContainer2 = styled(CategoriesContainer)`
    img {
	width: 25rem;
	border-radius:10px;
	}
`;