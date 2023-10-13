import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    width: 380px;
    border-radius: 1rem;
    padding: 1rem;
    background: #2d2e28;

    & img {
        height: 80px;
        width: 80px;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CardInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 240px;
`;

export const TotalPrice = styled.div`
`;

export const ProductTitleStyled = styled.h3`
    margin-top: 0;
    color: #fff;
`;

export const QuantityContainer = styled.span`
    display: flex;
    align-items: center;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: gray;
        border: none;
        border-radius: 15px;
        font-size: 1.1rem;
        font-weight: 800;
        color: #ffff;
        cursor: pointer;
    }
`;