import styled from "styled-components"

export const AboutUsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 20px;
margin: 0 3rem;

h1{
    font-size: 30px;
    margin-top: 9rem;
    color: white;
}
`
export const TextAboutUs = styled.div`
display: flex;
flex-direction: row;
font-size: 18px;
gap: 10px;
width: 100%;
align-items: center;
margin-left: 10%;

@media (max-width: 546px) {
    flex-direction: column;
}

h3{
    font-weight: 800;
    text-decoration: underline;
    color: white;
};

p{
    margin: 0 1rem;
    width: 70%;
}
`
export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    background: #181716;
    border-radius: 10px;
    align-items: center; /* Centra verticalmente */
    justify-content: center; /* Centra horizontalmente */
    padding: 15px; /* Añade espacio interior para mejorar el aspecto */
    text-align: center;
    height: auto;
    margin-right: 30px;
    color: white;
ul {
    list-style: none;
    padding: 0;
}
li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
}
`;
