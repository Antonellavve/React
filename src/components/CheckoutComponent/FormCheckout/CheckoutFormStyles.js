import styled from 'styled-components';
import { Formik, Form } from 'formik';

export const CheckoutDatosStyled = styled.div`
    width: 80%;
    margin-top: 40px;
    justify-content: center;
    text-align: center;
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const StyledFormik = styled(Formik)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center; /* Centra el contenido verticalmente */
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 2rem;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        background-color: black;
        font-size: 22px;
        color: white;
        padding: 10px;
        margin-bottom: 10px;
    }
`;

export const Check1 = styled.div`
    border: 3px solid black;
    width: 100%;
    padding: 10px;
    text-align: center;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra el contenido verticalmente */
    align-items: center; /* Centra el contenido horizontalmente */
`;

export const Check2 = styled.div`
    border: 3px solid black;
    width: 100%;
    padding: 10px;
    text-align: center;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra el contenido verticalmente */
    align-items: center; /* Centra el contenido horizontalmente */
`;

export const IconCash = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
`;

