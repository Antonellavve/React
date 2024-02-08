import styled from 'styled-components';

export const ContainerCheckout= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 8rem;
    gap: 20px;

    @media (max-width: 900px) and (min-width: 320px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;