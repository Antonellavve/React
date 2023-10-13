
import styled from "styled-components";

export const Title = styled.h2 `
text-align: center;
margin-top: 15%;
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
    height: 300px;
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
    background: var(--gray-bg);
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
margin: 0 3rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0;
    }

button{
    background-color: #C0C0C0;
    color: black;
    border-radius: 10px;
    width: 8rem;
    height: 2rem;
    font-size: 18px;
}


`;
