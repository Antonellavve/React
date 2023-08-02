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
    color: #E5E4E2;
    overflow-X: hidden;
    width: auto;
    }
    a {
    text-decoration: none;
    color: #C0C0C0;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;