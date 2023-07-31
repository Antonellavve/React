import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
        --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
    }
    html{
    scroll-behavior: smooth;
    }
    body {
    margin: 0;
    padding: 0;
    background: #111111;
    font-family: 'Raleway';
    color: #E5E4E2;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
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