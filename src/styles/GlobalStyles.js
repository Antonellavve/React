import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
    scroll-behavior: smooth;
    }
    body {
    margin: 0;
    padding: 0;
    background: #111111;
    font-family: 'Raleway';
    color: #C0C0C0;
    overflow-x: hidden;
    overflow-y: scroll;
}

/* Estilo de la barra de desplazamiento en navegadores webkit (Chrome y Safari) */
    body::-webkit-scrollbar {
    width: 18px; /* Ancho de la barra de desplazamiento */
    }

    body::-webkit-scrollbar-track {
    background-color: black; /* Color de fondo de la pista (gris claro) */
    border: 3px solid black;
}

body::-webkit-scrollbar-thumb {
    background-color: #333; /* Color del mango (gris oscuro) */
    border: 3px solid black;
}

body::-webkit-scrollbar-thumb:hover {
    background-color: #C0C0C0; /* Color del mango al pasar el ratón */
}
    a {
    text-decoration: none;
    color: #C0C0C0;
    }
    li {
    list-style: none;
    }
    
`;