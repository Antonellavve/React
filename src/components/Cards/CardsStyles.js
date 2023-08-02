import styled from "styled-components";

export const CardsWrapper = styled.section`
display: flex;
flex-direction: column;
width: 100%;

h2{
    font-size: 40px;
    text-align: center;
    margin-top: 50px;
    color: #c0c0c0;
}

@media (max-width: 768px) {
    display: flex;
}
`;

export const CardsContainer = styled.div`
display: flex;
border-radius:10px;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
flex-wrap: wrap;
width: 100%;
`;

export const CardProducts = styled.div`
display: flex;
flex-direction: column;
border: solid 3px gray;
border-radius: 10px;
width: 280px;
height: 480px;
align-items: center;
margin: 10px;
padding: 5px;
img{
    width: auto;
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
}
`;