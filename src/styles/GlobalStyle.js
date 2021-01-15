import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  * {
  box-sizing: border-box;
  background-color: inherit;
  color: inherit;
}
`;

export default GlobalStyle;
