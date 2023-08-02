import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    gap: 30px;
    h1 {
        margin-bottom: 2rem;
        font-size: 80px;
        color: #C0C0C0;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
export const HeroImg = styled.div`
	width: 100%;
	img {
		width: 100%;
		padding-bottom: 75px;
	}
	@media (max-width: 1000px) {
		display: none;
	}
`;