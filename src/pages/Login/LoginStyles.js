import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70%; /* Ajusta la distancia desde la parte superior */
  min-height: 70vh; /* Altura mínima del contenedor */
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const LoginEmail = styled.p`
margin: 0;
`;