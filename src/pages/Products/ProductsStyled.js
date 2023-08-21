
import styled from "styled-components";

export const Title = styled.h2 `
text-align: center;
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
margin: 0 10px;
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