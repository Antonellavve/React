import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 8rem; /* Ajusta la distancia desde la parte superior */
  min-height: 100vh; /* Altura mínima del contenedor */
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  min-height: 70vh; /* Altura mínima del formulario */
`;


export const LoginEmailStyled = styled.p`
  color: var(--orange);

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;