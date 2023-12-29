import styled from 'styled-components';
import { Formik, Form } from 'formik';

export const CheckoutDatosStyled = styled.div`
    width: 100%;
    margin-top: 30px;
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
    gap: 2rem;

    h2 {
        background-color: black;
        font-size: 25px;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const CheckContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
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
