import styled  from "styled-components"

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
justify-content: center;
text-align: center;
align-items: center;
font-size:20px;
color: #C0C0C0;
background-color: #1C1C1C;
margin-top: 55px;

    span{
        font-size: 22px;
        align-items: center;
        font-weight: 800;
        padding-right: 5px;
        border-right: 2px solid #ccc;
        color: white;
        @media (max-width: 320px){
            font-size: 18px;
        }
    }

    @media (max-width: 546) and (min-width: 320px) {
        display: block;
        text-align: center;
        font-size: 15px;
        width: auto;
}
`
export const FooterNewsletter = styled.div`
left: 10%;
display: flex;
align-items: center;
gap: 10px;
margin-top: 20px;
input{
    width: 250px;
}
button{
    border-radius: 10px;
    height: 40px;
    width: 120px;
    margin: 10px;
    font-size: 14px;
}
span{
    border-right: none;
}
@media (min-width:768px) and (max-width: 1000px){
    flex-direction: column;
    gap: 0;
}
@media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
}
`
export const Icons = styled.div`
display: flex;
gap: 20px;
flex-direction: row;
align-items: center;
border-radius: 5px;

h3{
    border-bottom: 3px groove #bfff00;
}

@media (max-width: 320px) {
    gap: 5px;
    height: 50px;
    font-size: 15px;
}
`
export const HoverableIcon = styled.div`
display: flex;
cursor: pointer;

&:hover {
    color: #bfff00; /* Cambia el color del ícono al pasar el cursor */
}
`;
