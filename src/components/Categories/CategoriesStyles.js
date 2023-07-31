import styled from "styled-components";

export const CategoriesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	gap: 10px;
	user-select: none;
	margin: 2rem;
`;

export const CardCategory = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ selected }) =>
		selected ? "var(--orange-bg)" : "var(--gray-bg)"};
	border-radius: 15px;
	cursor: pointer;
		img {
			width:450px;
			padding-top: 7px;
			padding-bottom: 7px;
		}
	}
`;
