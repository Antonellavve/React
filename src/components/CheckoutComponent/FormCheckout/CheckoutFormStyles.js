import styled from 'styled-components';
import { Formik, Form } from 'formik';

export const CheckoutDatosStyled = styled.div`
    width: 100%;
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
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    @media (max-width: 768px) {
        width: 80%;
        flex-direction: column;
        justify-content: center;
    }

    h2 {
        background-color: black;
        font-size: 25px;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
        align-items: center;
    }
`;

export const Check1 = styled.div`
    border: 3px solid black;
    width: 70%;
    padding: 10px;
    text-align: center;
    height: 400px;
`;

export const Check2 = styled.div`
    border: 3px solid black;
    width: 70%;
    padding: 10px;
    text-align: center;
    height: 400px;
`;

export const IconCash = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
`;
