import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  a {
  color: inherit;
  text-decoration: none;
  }
`;

export default GlobalStyle;
