import styled from "styled-components";


export const CardsTitle = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
h3{
    font-size: 30px;
}

a{
    display: flex;
    text-decoration: underline;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
}
`
export const CardsWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px; /* Espacio entre las columnas */
    width: 100%;
    align-items: center;
    margin: 0 3rem;

@media (max-width: 992px) {
    flex-direction: column;
}`


export const CardProducts = styled.div`
display: flex;
flex-direction: column;
border: solid 3px gray;
border-radius: 10px;
width: 250px;
height: 480px;
align-items: center;
margin:10px;
padding: 10px;

img{
    width: 230px;
    height: 300px;
    border-radius: 15px;
    padding-top: 20px;
}

h3{
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
`;

