import styled from 'styled-components';
import { Formik, Form } from 'formik'; // Importa Formik y Form directamente desde 'formik'

export const CheckoutDatosStyled = styled.div`
    width: 50%;
    margin: 10px;
    height: auto;
`;

export const StyledFormik = styled(Formik)` // Cambia el nombre de Formik a StyledFormik
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const StyledForm = styled(Form)` // Cambia el nombre de Form a StyledForm
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`;
