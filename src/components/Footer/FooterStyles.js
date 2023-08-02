import styled  from "styled-components"

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 270px;
justify-content: center;
font-size:20px;
gap: 20px;
color: #C0C0C0;
align-items: center;
background-color: #1C1C1C;
margin-top: 20px;
    span{
        font-size: 22px;
        align-items: center;
        font-weight: 800;
        padding-right: 5px;
        border-right: 2px solid #ccc;
        color: white;
        @media(max-width:320px){
            display: flex;
            text-align: center;
            justify-content: center;
            border-right: none;
        }
    }
    @media (max-width: 320px) {
        display:flex;
        flex-direction:column;
	    justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 18px;
}
`
export const FooterNewsletter = styled.div`
left: 10%;
display: flex;
align-items: center;
gap: 20px;
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

`
export const Icons = styled.div`
display: flex;
gap: 30px;
flex-direction: row;
padding: 10px;
align-items: center;
border: 2px solid gray;
border-radius: 5px;
`
