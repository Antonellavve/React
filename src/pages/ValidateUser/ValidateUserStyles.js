import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ContainerValidate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  min-height: 70vh;
  h1{
    font-size: 45px;
    margin: 4rem;
  }
  p{
  font-size: 20px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;