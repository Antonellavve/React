import styled from 'styled-components';

export const ContainerDatos = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 2rem;
    text-align: left;
`;


export const Datos = styled.div`

`;

export const DataUser = styled.div`
`;

export const DatosEdit =styled.div`
  button{
      margin: 1rem;
      margin-bottom: 3rem;
      text-decoration: none;
      color: black;
      background-color: #bfff00;
      padding: 8px 16px;
      border-radius: 5px;
      display: inline-block;
      font-weight: bold;
      cursor: pointer;
  }`
    

export const EditButton = styled.div`
  margin-top: 10px;

  button{
    margin-bottom: 3rem;
    text-decoration: none;
    color: black;
    background-color: #bfff00;
    padding: 8px 16px;
    border-radius: 5px;
    display: inline-block;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const EditableField = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
input{
  width: 30%;
  height: 20px;
  border-radius: 5px;
}
`
