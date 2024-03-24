import styled, { keyframes } from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
  justify-content: center;
`;


const buttonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const TabButton = styled.button`
  padding: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 20px;
  background-color: transparent;
  font-size: 15px;
  font-weight: 700;
  color: #C0C0C0;
;

  &.active {
    background-color: #bfff00;
    color: black;
    animation: ${buttonAnimation} 0.5s ease-in-out;
  }
`;
