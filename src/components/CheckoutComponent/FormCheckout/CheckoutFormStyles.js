import styled from 'styled-components';
import { Formik, Form } from 'formik'; // Importa Formik y Form directamente desde 'formik'

export const CheckoutDatosStyled = styled.div`
    width: 100%;
    margin: 30px;
    @media (max-width: 768px) {
        align-items:center;
        text-align: center;
        justify-content: center;
    }
`;

export const StyledFormik = styled(Formik)` 
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const StyledForm = styled(Form)` 
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    justify-content: center;
`;
