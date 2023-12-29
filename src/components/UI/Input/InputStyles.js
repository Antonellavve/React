import styled from 'styled-components';

export const InputBox = styled.div`
    outline: none;
    border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
    border-radius: 8px;
    height: 30px;
    padding: 0.5rem 1rem;
    color: white;
    width: 100%; /* Ajusta el ancho según tus necesidades */
    margin-top: 0.5rem; /* Ajusta el margen superior según tus necesidades */
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

export const InputLabel = styled.label`
    display: flex;
    margin:  0; /* Agrega un pequeño margen superior e inferior */
    width: 50%; /* Ajusta el ancho según tus necesidades */
    text-align: right; /* Alinea el texto a la derecha para que esté junto al campo de entrada */
`;


export const Input= styled.input`
    outline: none;
    border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
    border-radius: 8px;
    height: 30px;
    padding: 0.5rem 1rem;
    color: black;
    width: 70%;
/* 
    ::placeholder {
        opacity: 60%;
    } */

    /* :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
    } */
    `;

export const MessageOfError = styled.p`
    margin: 0;
    color: #fb103d;
    font-size: 12px;
`;
