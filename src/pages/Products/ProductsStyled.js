import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const ProductsSection = styled.section`

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem; 
}
`;

export const Title = styled.h2 `
text-align: center;
justify-content: center;
align-items: center;
margin-top: 20%;

@media (max-width: 992px) {
    margin-top: 30%
}

@media (max-width: 546px) {
    margin-top: 10rem;
    font-size: 20px;
}
`

export const ProductsContainer = styled.div`
display:flex;
flex-wrap: wrap;
margin-top: 5%;
align-items: center;
justify-content: center;
text-align: center;
`

export const Card = styled.div`
display: flex;
flex-direction: column;
border: solid 3px gray;
border-radius: 10px;
width: 250px;
height: 480px;
align-items: center;
margin: 10px;
padding: 5px;

img{
    width: 230px;
    height: 280px;
    border-radius: 15px;
    padding-top: 20px;
}

h2{
    font-size: 25px;
    font-weight: 600;
    margin-top: 10px;
}

span{
    font-size: 25px;
    font-weight: 700;
    margin: 10px;
    color: white;
}
`
export const ProductosCard = styled.div`
    width: 300px;
    border-radius: 15px;
    padding: 1rem;
img {
    width: 100%;
    margin-bottom: 1rem;
}
h2 {
    font-weight: 600;
    margin: 0;
}
p {
    color: #666;
    font-size: 1.2rem;
}
`;

export const PriceContainer = styled.div``

export const CardPrice = styled.div``;

export const ContainerSelect = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
justify-content: center;
text-align: center;
margin: 0 1rem;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }

button{
    background-color: #C0C0C0;
    color: black;
    border-radius: 10px;
    width: 6.5rem;
    height: 2rem;
    font-size: 16px;
}
button.active {
    background: #bff000;
    color: black;
}
`;

export const ContainerOfProducts = styled.div`
margin-top: 10rem;

`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 20px;
`;

export const TxtContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: x-large;
    gap: 1rem;
    text-align: left;
    width: 50%;
    span {
    color: var(--dark-blue);
    background-color: var(--selective-yellow);
    padding: 2px 1px;
    transform: skew(35deg);
    font-weight: 500;
    }
    @media (max-width: 1200px){
    font-size: large;
    }
    @media (max-width: 992px){
    font-size: medium;
    p:nth-child(2){
    display: none;
    }
    }
    @media (max-width: 768px) {
    width: 100%;
    gap: 1rem;
    align-items: center;
    text-align:center;
    p:nth-child(3){
    display: none;
    }
}`

export const Modal = styled.div``




