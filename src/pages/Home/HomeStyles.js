import styled from "styled-components";

export const HomePage = styled.div`
width: 100vw;
max-width: 1600px;
margin: 0 auto;

@media (max-width: 320px) {
    align-items: center;
    display: flex;
    flex-direction: column;
}
`;

export const HeroContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 8%;
gap: 30px;

.glitch {
    font-size: 8rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0.05em 0 0 #C0C0C0,
        -0.025em -0.05em 0 white,
        0.025em 0.05em 0 #BFFF00;
    animation: glitch 2500ms infinite;
    @media (max-width: 320px) {
    font-size: 5rem;
}
}

    .glitch span {
    position: absolute;
    top: 0;
    left: 0;
    }
    .glitch span:first-child {
    animation: glitch 650ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    opacity: 0.8;
    }
    .glitch span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.0125em, 0.025em);
    opacity: 0.8;
    }

    @keyframes glitch {
    0% {
        text-shadow: 0.05em 0 0 #C0C0C0,
        -0.05em -0.025em 0 white,
        -0.025em 0.05em 0 #BFFF00;
    }

    15% {
        text-shadow: -0.05em -0.025em 0 #C0C0C0,
        0.025em 0.025em 0 white,
        -0.05em -0.05em 0 #BFFF00;
    }

    50% {
        text-shadow: 0.025em 0.05em 0 #C0C0C0,
        0.05em 0 0 white,
        0 -0.05em 0 #BFFF00;
    }

    100% {
        text-shadow: -0.025em 0 0 #C0C0C0,
        -0.025em -0.025em 0 white,
        -0.025em -0.05em 0 #BFFF00;
    }
}

`
export const HeroImg = styled.div`
	img {
		width: 100%;
		padding-bottom: 75px;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

export const CategoriesSection = styled.div`
margin: 0 2rem;
`;

export const CardsContainer = styled.div`
margin: 0  2rem;
`;

