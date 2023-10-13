import styled from "styled-components";

export const ContactTitle = styled.div`
text-align: center;
color: aliceblue;
margin-top: 8rem;
`;

export const ContainerContact = styled.section`
display: flex;
flex-direction: row;
font-size: 23px;
font-weight: 500;
align-items: center;
text-align: center;
justify-content: center;
gap: 50px;

p{
    font-size: 20px;
    font-weight: 300;
    margin-top: 0;
}
`
export const ContactUs = styled.div`
background: white;
color: black;
width: 35%;
border-radius: 10px;
font-size: 15px;
height: auto;
border: 2px solid #bfff00;

p{
    font-size:14px;
}
`

export const ContainerForm = styled.div`
background-image: url(https://m.media-amazon.com/images/I/71MUgJW0z6L._AC_UF894,1000_QL80_.jpg);
color: white; /* Color del texto */
text-shadow: -1px -1px 0 black,
            -1px -1px 0 black,
            -1px -1px 0 black,
            -1px -1px 0 black; 
border: solid 3px white;
height: auto;
align-items: center;
justify-content: center;
text-align: center;
display: flex;
flex-direction: column;
font-size: 20px;

form label{
    display: flex;
    font-weight: 800;
    margin: 20px;
}
form input{
    border-radius: 7px;
    width: 90%;
    height: 30px;
    border: 2px solid #bfff00;
}
form textarea{
    border-radius: 7px;
    width: 90%;
    border: 2px solid #bfff00;
}
`