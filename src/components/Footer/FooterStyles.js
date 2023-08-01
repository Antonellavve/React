import styled  from "styled-components"

export const FooterContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
justify-content: center;
font-size:20px;
gap: 20px;
color: #C0C0C0;
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
