import styled from 'styled-components';

export const ContainerDatos = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 2rem;
    text-align: left;
`;


export const DataUser = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px; /* Ajusta según sea necesario */
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }
`;

export const EditButton = styled.div`
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 8px 16px;
    border-radius: 5px;
    display: inline-block;
  }
`;

export const EditableField = styled.div`
`
