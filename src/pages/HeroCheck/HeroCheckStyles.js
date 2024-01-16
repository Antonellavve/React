import styled from 'styled-components';


export const HeroCheckStyled = styled.div`
width: 50%;
display: flex;
text-align: center;
padding: 1rem;
`;

export const HeroContainer = styled.div`
margin-top: 10rem;
h1 {
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    color: blue;
    background: #bfff00;
    color: black;
    justify-content: center;
    gap: 20px;
    margin-top: 3rem;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-weight: bold;
    
    &:hover {
      /* Styles for hover state */
      color: white;
    }
  }
`;



