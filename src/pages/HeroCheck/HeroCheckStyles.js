import styled from 'styled-components';


export const HeroCheckStyled = styled.div`
width: auto;
min-height: 55vh;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
margin-top: 7rem;
`;

export const HeroContainer = styled.div`
margin-top: 7rem;

h1 {
    margin-bottom: 4rem;
    text-transform: uppercase;
  }

  a {
    text-decoration: underline;
    justify-content: center;
    margin-bottom: 15%;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-weight: bold;
  }
`;

export const HeroValidate = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
h1{
  font-size: 45px;
  margin-top: 5rem;
}
p{
  font-size: 20px;
}
`



