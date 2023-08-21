import styled from "styled-components"

export const AboutUsContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
gap: 20px;

h2{
    font-size: 30px;
}

`
export const TextAboutUs = styled.div`
display: flex;
flex-direction: row;
font-size: 18px;
align-items: center;
text-align: center;
gap: 10px;
width: 80%;
h3{
    font-weight: 800;
    align-items: center;
    text-decoration: underline;
}
p{
    margin-left: 50px;
}
`
export const Contact = styled.div`
flex-direction: column;
background: #181716;
border-radius: 10px;
padding: 10px;
li{
    align-items: center;
}
`