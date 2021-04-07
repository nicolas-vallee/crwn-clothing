import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 20px 10px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media screen and (min-width: 800px) {
    padding: 20px 60px;
  }
  }

  a {
  color: inherit;
  text-decoration: none;
  }
`;

export default GlobalStyle;
