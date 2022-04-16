import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: rgba(40, 44, 52, 1);
        font-family: 'Roboto', sans-serif;
        color: white;
    }
`;