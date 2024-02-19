import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    body {
      font-family: "Barlow Condensed", sans-serif;
    }
    
    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
  }
`