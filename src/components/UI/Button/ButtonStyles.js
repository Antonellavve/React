import { styled } from "styled-components";

export const StyledButton = styled.div`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: ${({ radius }) => `${radius}px`};
    background: #bfff00;
    color: black;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        opacity: 95%;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        background: gray;
        color: #999; 
    }
`;
export const ButtonContainer= styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 3rem;
`;
