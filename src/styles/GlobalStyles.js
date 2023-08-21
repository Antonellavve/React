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
    overflow-X: hidden;
    }
    a {
    text-decoration: none;
    color: #C0C0C0;
    }
    a:visited {
    color: #C0C0C0;
    }
    li {
    list-style: none;
    }
    
`;