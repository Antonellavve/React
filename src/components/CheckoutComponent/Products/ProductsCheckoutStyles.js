import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
    width: 40%;
    text-align: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.2rem;
    width: 100%;
    height: auto;
    margin: 0 auto;

    overflow: scroll;

    &::-webkit-scrollbar {
        background: transparent;
        width: 6px;
    }

    &::-webkit-scrollbar:horizontal {
        display: none;
    }
`;

export const PriceContainerStyled = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SubtotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #fff;
    }

    & span {
        font-size: 1.5rem;
        font-weight: 400;
        color: #fff;
    }
`;

export const PriceTotalStyled = styled.span`
    color: #ff7a00;
    font-weight: 800;
    font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
    margin: 1rem 0;
`;