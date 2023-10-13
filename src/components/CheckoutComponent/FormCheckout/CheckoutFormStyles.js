import styled from 'styled-components';
import { Formik, Form } from 'formik'; // Importa Formik y Form directamente desde 'formik'

export const CheckoutDatosStyled = styled.div`
    width: 50%;
    margin: 10px;
    height: auto;
`;

export const StyledFormik = styled(Formik)` 
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const StyledForm = styled(Form)` 
    display: flex;
    flex-wrap: wrap;
`;
