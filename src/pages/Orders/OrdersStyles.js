import styled from 'styled-components';

export const OrdenesContainerStyled = styled.div`
  max-width: 1600px;
  min-height: calc(100vh - 500px);
  margin-top: 6.5rem;
  padding: 2rem 0;
`;

export const OrdenesTitle = styled.h2`
  position: none;
  padding-top: 3rem;
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
`;

export const MisOrdenesPatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
`;

export const BtnOrdenes = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;